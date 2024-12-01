import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/utils";


interface ChatDialogueProps {
  className?: string;
}

const ChatDialogue: React.FC<ChatDialogueProps> = ({ className }) => {
  const messages = [
    {
      id: 1,
      sender: "Julius Dembe",
      content: "Do you have alternate colors for this?",
      avatar: "JD",
      timestamp: "Just now",
    },
    {
      id: 2,
      sender: "FAUST SHOP",
      content: "Yes we do",
      avatar: "FS",
      timestamp: "Just now",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-4 h-full w-full",
        className
      )}
    >
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-3 group">
          <Avatar className="h-7 w-7 ring-1 ring-zinc-800 group-hover:ring-zinc-700 transition-all">
            <AvatarFallback className="bg-zinc-800 text-zinc-200 text-xs">
              {message.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-zinc-200">{message.sender}</p>
              <span className="text-xs text-zinc-500">{message.timestamp}</span>
            </div>
            <div className="rounded-lg bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 border border-zinc-800/50 group-hover:border-zinc-800 transition-colors">
              {message.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatDialogue;
