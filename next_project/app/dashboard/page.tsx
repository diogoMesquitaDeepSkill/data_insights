"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DashboardLayout } from "@/components/ui/dashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  BarChart2,
  PieChart as PieChartIcon,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, Line, LineChart, Pie, PieChart } from "recharts";

// Mock data
const revenueData = [
  { month: "Jan", revenue: 10000 },
  { month: "Feb", revenue: 12000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 13000 },
  { month: "May", revenue: 18000 },
  { month: "Jun", revenue: 20000 },
];

const costBreakdown = [
  { name: "Labor", value: 40 },
  { name: "Materials", value: 30 },
  { name: "Overhead", value: 20 },
  { name: "Marketing", value: 10 },
];

const customerAcquisition = [
  { month: "Jan", newCustomers: 20, churn: 5 },
  { month: "Feb", newCustomers: 25, churn: 7 },
  { month: "Mar", newCustomers: 30, churn: 6 },
  { month: "Apr", newCustomers: 35, churn: 8 },
  { month: "May", newCustomers: 40, churn: 10 },
  { month: "Jun", newCustomers: 45, churn: 12 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Business Intelligence Dashboard
        </h1>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$88,000</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Customers
                  </CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">195</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Profit Margin
                  </CardTitle>
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customer Churn
                  </CardTitle>
                  <PieChartIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.2%</div>
                  <p className="text-xs text-muted-foreground">
                    -1.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[200px]"
                  >
                    <BarChart data={revenueData}>
                      <Bar dataKey="revenue" fill="var(--color-revenue)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      Labor: { label: "Labor", color: "hsl(var(--chart-1))" },
                      Materials: {
                        label: "Materials",
                        color: "hsl(var(--chart-2))",
                      },
                      Overhead: {
                        label: "Overhead",
                        color: "hsl(var(--chart-3))",
                      },
                      Marketing: {
                        label: "Marketing",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                    className="h-[200px]"
                  >
                    <PieChart data={costBreakdown}>
                      <Pie dataKey="value" nameKey="name" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle>Financial Analysis</CardTitle>
                <CardDescription>
                  Detailed financial metrics and projections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Financial analysis content would go here...</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition and Churn</CardTitle>
                <CardDescription>
                  Track new customers and churn rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    newCustomers: {
                      label: "New Customers",
                      color: "hsl(var(--chart-1))",
                    },
                    churn: { label: "Churn", color: "hsl(var(--chart-2))" },
                  }}
                  className="h-[300px]"
                >
                  <LineChart data={customerAcquisition}>
                    <Line
                      type="monotone"
                      dataKey="newCustomers"
                      stroke="var(--color-newCustomers)"
                    />
                    <Line
                      type="monotone"
                      dataKey="churn"
                      stroke="var(--color-churn)"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="workflow">
            <Card>
              <CardHeader>
                <CardTitle>Workflow Builder</CardTitle>
                <CardDescription>
                  Visualize and optimize your business processes
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <div className="text-center">
                  <Workflow className="mx-auto h-16 w-16 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">
                    Create Your Workflow
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Start building your custom workflow to visualize your
                    business processes.
                  </p>
                  <Button className="mt-4">Start Building</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
