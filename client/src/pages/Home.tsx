import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import EntranceGate from "@/components/EntranceGate";
import MessageBoard from "@/components/MessageBoard";
import { useToast } from "@/hooks/use-toast";
import type { Message, InsertMessage } from "@shared/schema";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const { toast } = useToast();

  const { data: messages = [], isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
    enabled: hasEntered,
  });

  const createMessageMutation = useMutation({
    mutationFn: async (data: InsertMessage) => {
      return await apiRequest("POST", "/api/messages", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
      toast({
        title: "Message posted!",
        description: "Your message of love has been shared.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to post message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMessageMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest("DELETE", `/api/messages/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
      toast({
        title: "Message deleted",
        description: "The message has been removed.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete message. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (!hasEntered) {
    return <EntranceGate onEnter={() => setHasEntered(true)} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading messages...</p>
      </div>
    );
  }

  return (
    <MessageBoard
      messages={messages}
      onPostMessage={(data) => createMessageMutation.mutate(data)}
      onDeleteMessage={(id) => deleteMessageMutation.mutate(id)}
      isPending={createMessageMutation.isPending}
    />
  );
}
