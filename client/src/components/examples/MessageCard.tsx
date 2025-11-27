import MessageCard from "../MessageCard";

export default function MessageCardExample() {
  const mockMessage = {
    id: "1",
    name: "Sarah",
    content: "Every moment with you feels like a beautiful dream. Thank you for being the light in my life. ♥",
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
  };

  return (
    <div className="p-8 max-w-2xl">
      <MessageCard
        message={mockMessage}
        onDelete={(id) => console.log("Delete message:", id)}
      />
    </div>
  );
}
