"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { DashboardLayout } from "@/components/ui/dashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, ShoppingCart, Target, Users } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Enhanced mock data
const revenueData = [
  { month: "Jan", revenue: 10000, expenses: 8000, profit: 2000 },
  { month: "Feb", revenue: 12000, expenses: 9000, profit: 3000 },
  { month: "Mar", revenue: 15000, expenses: 10000, profit: 5000 },
  { month: "Apr", revenue: 13000, expenses: 11000, profit: 2000 },
  { month: "May", revenue: 18000, expenses: 12000, profit: 6000 },
  { month: "Jun", revenue: 20000, expenses: 13000, profit: 7000 },
];

const costBreakdown = [
  { name: "Labor", value: 40 },
  { name: "Materials", value: 30 },
  { name: "Overhead", value: 20 },
  { name: "Marketing", value: 10 },
];

const customerAcquisition = [
  { month: "Jan", newCustomers: 20, churn: 5, retentionRate: 75 },
  { month: "Feb", newCustomers: 25, churn: 7, retentionRate: 72 },
  { month: "Mar", newCustomers: 30, churn: 6, retentionRate: 80 },
  { month: "Apr", newCustomers: 35, churn: 8, retentionRate: 77 },
  { month: "May", newCustomers: 40, churn: 10, retentionRate: 75 },
  { month: "Jun", newCustomers: 45, churn: 12, retentionRate: 73 },
];

const productPerformance = [
  { name: "Product A", sales: 4000, satisfaction: 85 },
  { name: "Product B", sales: 3000, satisfaction: 78 },
  { name: "Product C", sales: 2000, satisfaction: 90 },
  { name: "Product D", sales: 2780, satisfaction: 82 },
  { name: "Product E", sales: 1890, satisfaction: 88 },
];

const customerLifetimeValue = [
  { segment: "New", clv: 500 },
  { segment: "Regular", clv: 2000 },
  { segment: "Loyal", clv: 5000 },
  { segment: "VIP", clv: 10000 },
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
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
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
                    Customer Lifetime Value
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,350</div>
                  <p className="text-xs text-muted-foreground">
                    +15.3% from last quarter
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conversion Rate
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">
                    +0.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customer Satisfaction
                  </CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7/5</div>
                  <p className="text-xs text-muted-foreground">
                    +0.2 from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Revenue, Expenses, and Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Revenue",
                        color: "hsl(var(--chart-1))",
                      },
                      expenses: {
                        label: "Expenses",
                        color: "hsl(var(--chart-2))",
                      },
                      profit: { label: "Profit", color: "hsl(var(--chart-3))" },
                    }}
                    className="h-[300px]"
                  >
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="var(--color-revenue)"
                        fill="var(--color-revenue)"
                      />
                      <Area
                        type="monotone"
                        dataKey="expenses"
                        stackId="1"
                        stroke="var(--color-expenses)"
                        fill="var(--color-expenses)"
                      />
                      <Area
                        type="monotone"
                        dataKey="profit"
                        stackId="1"
                        stroke="var(--color-profit)"
                        fill="var(--color-profit)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Customer Lifetime Value by Segment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      clv: { label: "CLV", color: "hsl(var(--chart-1))" },
                    }}
                    className="h-[300px]"
                  >
                    <BarChart data={customerLifetimeValue}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="segment" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="clv" fill="var(--color-clv)" />
                    </BarChart>
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
                <ChartContainer
                  config={{
                    revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
                    expenses: {
                      label: "Expenses",
                      color: "hsl(var(--chart-2))",
                    },
                    profit: { label: "Profit", color: "hsl(var(--chart-3))" },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="var(--color-expenses)"
                      />
                      <Line
                        type="monotone"
                        dataKey="profit"
                        stroke="var(--color-profit)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>
                  Customer Acquisition, Churn, and Retention
                </CardTitle>
                <CardDescription>
                  Track customer metrics over time
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
                    retentionRate: {
                      label: "Retention Rate",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customerAcquisition}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="newCustomers"
                        stroke="var(--color-newCustomers)"
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="churn"
                        stroke="var(--color-churn)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="retentionRate"
                        stroke="var(--color-retentionRate)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
                <CardDescription>
                  Sales and customer satisfaction by product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    sales: { label: "Sales", color: "hsl(var(--chart-1))" },
                    satisfaction: {
                      label: "Satisfaction",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid />
                      <XAxis
                        type="number"
                        dataKey="sales"
                        name="Sales"
                        unit="$"
                      />
                      <YAxis
                        type="number"
                        dataKey="satisfaction"
                        name="Satisfaction"
                        unit="%"
                      />
                      <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        content={<ChartTooltipContent />}
                      />
                      <Scatter
                        name="Products"
                        data={productPerformance}
                        fill="var(--color-sales)"
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
