import MessageBoard from "../MessageBoard";

export default function MessageBoardExample() {
  const mockMessages = [
    {
      id: "1",
      name: "Sarah",
      content: "Every moment with you feels like a beautiful dream. Thank you for being the light in my life.",
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "2",
      name: null,
      content: "Love is not just a feeling, it's a choice we make every day. I choose you, always and forever.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "3",
      name: "Michael",
      content: "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my everything.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
  ];

  return (
    <MessageBoard
      messages={mockMessages}
      onPostMessage={(data) => console.log("Post message:", data)}
      onDeleteMessage={(id) => console.log("Delete message:", id)}
      isPending={false}
    />
  );
}
