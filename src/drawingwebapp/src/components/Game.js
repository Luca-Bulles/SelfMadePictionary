import React, { useState, useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import useInterval from "../utils";
import Canvas from "./Canvas";

function Game() {
  const [connection, setConnection] = useState(null);
  const [image, setImage] = useState("");
  const [imageToSend, setImageToSend] = useState(null);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/hubs/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then((result) => {
          console.log("Connected!");
          connection.on("ReceiveDrawingImage", (drawingImage) => {
            setImage(drawingImage);
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  }, [connection]);

  const sendDrawingImage = async () => {
    if (imageToSend) {
      const drawingImage = {
        base64Image: imageToSend,
      };

      if (connection.connectionStarted) {
        try {
          await connection.send("SendDrawingImage", drawingImage);
        } catch (e) {
          console.log(e);
        }
      } else {
        alert("No connection to server yet.");
      }
    }
  };

  useInterval(sendDrawingImage, 1 * 1000);

  const updateImageToSend = (newImage) => {
    setImageToSend(newImage);
  };

  return (
    <div>
      <Canvas updateImageToSend={updateImageToSend} />
      {console.log(image)}
    </div>
  );
}

export default Game;
