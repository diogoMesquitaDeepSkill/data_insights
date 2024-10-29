"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardLayout } from "@/components/ui/dashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function DataImport() {
  const [importSource, setImportSource] = useState("hubspot");

  return (
    <DashboardLayout>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Import Data</CardTitle>
          <CardDescription>
            Connect your data sources to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={importSource} onValueChange={setImportSource}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hubspot">HubSpot</TabsTrigger>
              <TabsTrigger value="salesforce">Salesforce</TabsTrigger>
              <TabsTrigger value="bank">Bank</TabsTrigger>
            </TabsList>
            <TabsContent value="hubspot">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="hubspot-api-key">HubSpot API Key</Label>
                  <Input
                    id="hubspot-api-key"
                    placeholder="Enter your HubSpot API key"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="salesforce">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salesforce-username">
                    Salesforce Username
                  </Label>
                  <Input
                    id="salesforce-username"
                    placeholder="Enter your Salesforce username"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salesforce-password">
                    Salesforce Password
                  </Label>
                  <Input
                    id="salesforce-password"
                    type="password"
                    placeholder="Enter your Salesforce password"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bank">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bank-name">Bank Name</Label>
                  <Select>
                    <SelectTrigger id="bank-name">
                      <SelectValue placeholder="Select your bank" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="chase">Chase</SelectItem>
                      <SelectItem value="bofa">Bank of America</SelectItem>
                      <SelectItem value="wells-fargo">Wells Fargo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bank-username">Username</Label>
                  <Input
                    id="bank-username"
                    placeholder="Enter your bank username"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bank-password">Password</Label>
                  <Input
                    id="bank-password"
                    type="password"
                    placeholder="Enter your bank password"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Connect</Button>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
