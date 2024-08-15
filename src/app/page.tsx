"use client";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useRef } from "react";
import Message from "../components/Messages";

export default function Home() {
  const { messages, handleSubmit, input, handleInputChange } = useChat();
  const formRef = useRef<HTMLFormElement>(null);
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  }

  return (
    <main className=" fixed h-full w-full bg-muted">
      <div className="container flex flex-col h-full w-full py-8">
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <Message key={message.id} message={message}/>
          ))}
        </div>
        <form onSubmit={handleSubmit}
        ref={formRef}
        className="mt-auto relative ">
          <Textarea
            className="w-full text-lg"
            placeholder="Say something.."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 rounded-full"
          >
            <Send size={24} />
          </Button>
        </form>
      </div>
    </main>
  );
}
