"use client";

import React from "react";

interface CenteredLayoutProps {
  children: React.ReactNode;
}

export function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}
