"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation"; // Changed from next/router
import React, { useState } from "react";

export default function Company() {
  const [companyDescription, setCompanyDescription] = useState("");
  const [usefulInfo, setUsefulInfo] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save this data to your state management solution or API
    // For now, we'll just move to the next step
    router.push("/data-import");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Tell Us About Your Company</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="companyDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Description
                </label>
                <Textarea
                  id="companyDescription"
                  placeholder="Describe your company, its mission, and main activities"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  className="mt-1"
                  rows={4}
                />
              </div>
              <div>
                <label
                  htmlFor="usefulInfo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Useful Information
                </label>
                <Textarea
                  id="usefulInfo"
                  placeholder="Any additional information that might be helpful for analysis"
                  value={usefulInfo}
                  onChange={(e) => setUsefulInfo(e.target.value)}
                  className="mt-1"
                  rows={4}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>
            Next: Import Data
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
