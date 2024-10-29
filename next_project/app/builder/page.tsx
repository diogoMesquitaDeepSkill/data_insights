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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

export default function WorkflowBuilder() {
  const [steps, setSteps] = useState([{ type: "", name: "" }]);

  const addStep = () => {
    setSteps([...steps, { type: "", name: "" }]);
  };

  return (
    <DashboardLayout>
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Workflow Builder</CardTitle>
          <CardDescription>
            Define your business processes to improve AI analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Select
                  value={step.type}
                  onValueChange={(value) => {
                    const newSteps = [...steps];
                    newSteps[index].type = value;
                    setSteps(newSteps);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select step type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lead-generation">
                      Lead Generation
                    </SelectItem>
                    <SelectItem value="sales-process">Sales Process</SelectItem>
                    <SelectItem value="customer-onboarding">
                      Customer Onboarding
                    </SelectItem>
                    <SelectItem value="product-delivery">
                      Product Delivery
                    </SelectItem>
                    <SelectItem value="customer-support">
                      Customer Support
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Step name"
                  value={step.name}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index].name = e.target.value;
                    setSteps(newSteps);
                  }}
                />
                {index < steps.length - 1 && <ArrowRight className="h-4 w-4" />}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={addStep} variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add Step
          </Button>
          <Button>Save Workflow</Button>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
