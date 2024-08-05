const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" alt="user" src="/user.png" />
      <span className="font-semibold px-2">{name}</span>
      <span> {message}</span>
    </div>
  );
};

export default ChatMessage;
