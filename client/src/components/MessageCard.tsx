import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Message } from "@shared/schema";

interface MessageCardProps {
  message: Message;
  onDelete: (id: string) => void;
}

export default function MessageCard({ message, onDelete }: MessageCardProps) {
  return (
    <Card className="p-6" data-testid={`card-message-${message.id}`}>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-semibold text-foreground" data-testid={`text-author-${message.id}`}>
            {message.name || "Anonymous"}
          </h3>
        </div>
        
        <p className="text-base leading-relaxed text-foreground/90" data-testid={`text-content-${message.id}`}>
          {message.content}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground" data-testid={`text-timestamp-${message.id}`}>
            {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(message.id)}
            className="text-destructive hover:text-destructive"
            data-testid={`button-delete-${message.id}`}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
