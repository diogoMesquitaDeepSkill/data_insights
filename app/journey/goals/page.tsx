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
import { CenteredLayout } from "@/components/ui/centeredLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BusinessGoalsKPIs() {
  const router = useRouter();
  const [goals, setGoals] = useState([{ goal: "", kpis: [""] }]);

  const addGoal = () => {
    setGoals([...goals, { goal: "", kpis: [""] }]);
  };

  const addKPI = (goalIndex: number) => {
    const newGoals = [...goals];
    newGoals[goalIndex].kpis.push("");
    setGoals(newGoals);
  };

  const updateGoal = (index: number, value: string) => {
    const newGoals = [...goals];
    newGoals[index].goal = value;
    setGoals(newGoals);
  };

  const updateKPI = (goalIndex: number, kpiIndex: number, value: string) => {
    const newGoals = [...goals];
    newGoals[goalIndex].kpis[kpiIndex] = value;
    setGoals(newGoals);
  };

  const removeGoal = (index: number) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  };

  const removeKPI = (goalIndex: number, kpiIndex: number) => {
    const newGoals = [...goals];
    newGoals[goalIndex].kpis = newGoals[goalIndex].kpis.filter(
      (_, i) => i !== kpiIndex
    );
    setGoals(newGoals);
  };

  const handleContinue = () => {
    // Save goals and KPIs to state or context
    router.push("/journey/data-import");
  };

  return (
    <CenteredLayout>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Define Your Business Goals and KPIs</CardTitle>
          <CardDescription>
            Outline your key objectives and how you&apos;ll measure success
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {goals.map((goal, goalIndex) => (
              <div key={goalIndex} className="space-y-4 p-4 border rounded-md">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`goal-${goalIndex}`}>Business Goal</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeGoal(goalIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  id={`goal-${goalIndex}`}
                  placeholder="e.g., Increase customer retention"
                  value={goal.goal}
                  onChange={(e) => updateGoal(goalIndex, e.target.value)}
                />
                <div className="space-y-2">
                  <Label>Key Performance Indicators (KPIs)</Label>
                  {goal.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="flex items-center space-x-2">
                      <Input
                        placeholder="e.g., Customer churn rate"
                        value={kpi}
                        onChange={(e) =>
                          updateKPI(goalIndex, kpiIndex, e.target.value)
                        }
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeKPI(goalIndex, kpiIndex)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addKPI(goalIndex)}
                  >
                    <Plus className="h-4 w-4 mr-2" /> Add KPI
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={addGoal}>
              <Plus className="h-4 w-4 mr-2" /> Add Another Goal
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleContinue}>
            Continue to Data Source Selection
          </Button>
        </CardFooter>
      </Card>
    </CenteredLayout>
  );
}
