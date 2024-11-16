"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CenteredLayout } from "@/components/ui/centeredLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation"; // Changed from next/router
import React, { useState } from "react";

export default function DataImport() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 5000);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CenteredLayout>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Import Your Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="excel">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="excel">Excel</TabsTrigger>
              <TabsTrigger value="hubspot">HubSpot</TabsTrigger>
              <TabsTrigger value="salesforce">Salesforce</TabsTrigger>
            </TabsList>
            <TabsContent value="excel">
              <form onSubmit={handleSubmit}>
                <Label htmlFor="file-upload">Upload Excel File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  accept=".xlsx,.xls,.csv"
                />
              </form>
            </TabsContent>
            <TabsContent value="hubspot">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="hubspot-api-key">HubSpot API Key</Label>
                  <Input
                    id="hubspot-api-key"
                    type="password"
                    placeholder="Enter your HubSpot API key"
                  />
                </div>
                <Button onClick={handleSubmit}>Connect HubSpot</Button>
              </div>
            </TabsContent>
            <TabsContent value="salesforce">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="salesforce-username">
                    Salesforce Username
                  </Label>
                  <Input
                    id="salesforce-username"
                    placeholder="Enter your Salesforce username"
                  />
                </div>
                <div>
                  <Label htmlFor="salesforce-password">
                    Salesforce Password
                  </Label>
                  <Input
                    id="salesforce-password"
                    type="password"
                    placeholder="Enter your Salesforce password"
                  />
                </div>
                <Button onClick={handleSubmit}>Connect Salesforce</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>
            Next: Analyze Data
          </Button>
        </CardFooter>
      </Card>
    </CenteredLayout>
  );
}
