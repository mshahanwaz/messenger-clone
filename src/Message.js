import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>{message.message}</CardContent>
      </Card>
      <div className="message__userName">
        <small>{!isUser && `${message.username || username}`}</small>
      </div>
    </div>
  );
});

export default Message;
