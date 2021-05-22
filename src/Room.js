import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "./initFirebase";
const db = firebase.database();

function Room() {
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const ref = db.ref(`rooms/${id}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return;
      }
      const messages = [];
      if (data.messages) {
        Object.entries(data.messages).forEach(([key, value]) =>
          messages.push(value)
        );
        setState(messages);
      }
    });
    // console.log(state);
    return () => {
      ref.remove()
      ref.off();
    };
  }, [id]);

  const send = () => {
    db.ref(`rooms/${id}/messages`).push({ message, time: Date.now() });
    // console.log(state);
  };
  return (
    <>
      <h1>Room ID : {id}</h1>
      {state.map((each) => {
        return (
          <>
            <p>{each.message}</p>
            <span>{each.time}</span>
          </>
        );
      })}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={send}>send</button>
    </>
  );
}

export default Room;
