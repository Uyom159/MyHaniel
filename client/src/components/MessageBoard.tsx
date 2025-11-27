import { Heart } from "lucide-react";
import MessageCard from "./MessageCard";
import PostMessageForm from "./PostMessageForm";
import type { Message, InsertMessage } from "@shared/schema";

interface MessageBoardProps {
  messages: Message[];
  onPostMessage: (data: InsertMessage) => void;
  onDeleteMessage: (id: string) => void;
  isPending?: boolean;
}

export default function MessageBoard({
  messages,
  onPostMessage,
  onDeleteMessage,
  isPending,
}: MessageBoardProps) {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-3">
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground" data-testid="text-board-title">
            Messages of Love
          </h1>
          <p className="font-sans text-lg text-muted-foreground">
            Share your heart with the world
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <PostMessageForm onSubmit={onPostMessage} isPending={isPending} />
        
        <div className="space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto" />
              <p className="text-lg text-muted-foreground">
                No messages yet. Be the first to share your love!
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <MessageCard
                key={message.id}
                message={message}
                onDelete={onDeleteMessage}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
