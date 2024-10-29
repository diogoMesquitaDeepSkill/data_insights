import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import Navigation from "./navigation"; // Assuming the navigation component is in a file named navigation.tsx

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card
        className={cn(
          "w-full h-[calc(100vh-8rem)] max-w-6xl max-h-[800px] bg-white shadow-lg overflow-hidden flex flex-col",
          className
        )}
      >
        <div className="w-full">
          <Navigation />
        </div>
        <div className="flex-1 overflow-auto">
          <div className="p-4">{children}</div>
        </div>
      </Card>
    </div>
  );
}
