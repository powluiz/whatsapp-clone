import { React, useState } from "react";

import "./NewChat.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewChat = ({ user, data, openNewChat, setOpenNewChat, ...props }) => {
  const [list, setList] = useState([
    {
      id: 123,
      name: "Luiz Ricardo",
      avatar:
        "http://3.bp.blogspot.com/_8sgItSy2yPg/S9jqU8GBqHI/AAAAAAAAAa4/EcqVgI50EZU/s1600/shrek-gato-de-botas.jpg",
    },
    {
      id: 1234,
      name: "Loutro",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: 1234,
      name: "aaaa",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: 1234,
      name: "sdfsdfsdfsdf",
      avatar:
        "https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg",
    },
  ]);

  return (
    <div className={`newChat ${openNewChat ? " " : "closed"}`}>
      <div className="newChatHeader">
        <div className="newChatBackBtn" onClick={() => setOpenNewChat(false)}>
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChatHeadTitle">Nova Conversa</div>
      </div>
      <div className="newChatList">
        {list.map((item, key) => (
          <div key={key} className="newChatItem">
            <img className="newChatItemAvatar" src={item.avatar} alt="" />
            <div className="newChatItemName">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
