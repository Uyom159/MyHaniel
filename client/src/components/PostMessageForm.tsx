import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heart } from "lucide-react";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";

interface PostMessageFormProps {
  onSubmit: (data: InsertMessage) => void;
  isPending?: boolean;
}

export default function PostMessageForm({ onSubmit, isPending }: PostMessageFormProps) {
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      content: "",
    },
  });

  const handleSubmit = (data: InsertMessage) => {
    onSubmit(data);
    form.reset();
  };

  const characterCount = form.watch("content")?.length || 0;

  return (
    <Card className="p-8">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-primary fill-primary" />
        <h2 className="font-serif text-2xl font-bold">Share Your Love</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name (Optional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Leave anonymous or enter your name"
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Express your feelings..."
                    className="min-h-32 resize-none"
                    data-testid="input-content"
                  />
                </FormControl>
                <div className="flex justify-between items-center">
                  <FormMessage />
                  <span className={`text-sm ${characterCount > 500 ? "text-destructive" : "text-muted-foreground"}`}>
                    {characterCount}/500
                  </span>
                </div>
              </FormItem>
            )}
          />
          
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="px-8 rounded-full"
              disabled={isPending}
              data-testid="button-submit"
            >
              {isPending ? "Posting..." : "Post Message"}
              <Heart className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
