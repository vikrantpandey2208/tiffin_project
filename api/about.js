let aboutMessage = "Just Dabba API v1.0";

function setAboutMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return aboutMessage; 
}

module.exports = { setAboutMessage, getMessage };
