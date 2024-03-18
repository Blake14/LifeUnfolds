import React from "react";

const MessageCenter = ({ colors, messages }) => {
  const messageCenterStyle = {
    backgroundColor: colors.background, // Background color for the message center
    color: colors.textHighlight, // Text color for messages
    padding: "20px", // Padding inside the message center
    borderRadius: "8px", // Rounded corners
    height: "100%", // Fixed height for the message center
    overflowY: "auto", // Allow vertical scrolling
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    width: "100%",
    fontSize: 12,
    flex: 1,
    fontFamily: "monospace",
    overflowY: "scroll",
  };

  const messageStyle = {
    marginBottom: "10px", // Space between messages
    padding: "5px", // Padding inside each message
    borderRadius: "4px", // Rounded corners for each message
    backgroundColor: colors.moduleBackground, // Slightly different background for contrast
    borderLeft: `5px solid ${colors.highlight}`, // Highlight line for each message
  };

  return (
    <div style={messageCenterStyle}>
      {messages.map((message, index) => (
        <div key={index} style={messageStyle}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default MessageCenter;
