"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardLayout } from "@/components/ui/dashboardLayout";
import {
  AlertTriangle,
  Lightbulb,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export default function AIInsights() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-4 w-4" />
              AI-Generated Insights
            </CardTitle>
            <CardDescription>
              Based on your latest data and business trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                <div>
                  <p className="font-semibold">Revenue Growth Opportunity</p>
                  <p>
                    Your top 20% of customers contribute to 80% of your revenue.
                    Consider focusing more resources on retaining and upselling
                    to these high-value customers.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <TrendingDown className="mr-2 h-5 w-5 text-red-500" />
                <div>
                  <p className="font-semibold">Cost Reduction Potential</p>
                  <p>
                    Your software subscription costs have increased by 25% over
                    the last quarter. Review your subscriptions and consider
                    consolidating or negotiating better rates with vendors.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-semibold">Cash Flow Warning</p>
                  <p>
                    Based on your current burn rate and projected revenue, you
                    may face cash flow issues in the next 3-4 months. Consider
                    accelerating accounts receivable or exploring additional
                    funding options.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Button className="w-full">Generate More Insights</Button>
      </div>
    </DashboardLayout>
  );
}
