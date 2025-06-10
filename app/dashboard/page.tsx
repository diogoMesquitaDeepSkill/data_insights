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
import { Insight } from "@/components/ui/insight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, ShoppingCart, Target, Users } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [insights, setInsights] = useState({
    financial: [
      {
        id: 1,
        title: "Revenue Trend",
        content:
          "Revenue is showing an upward trend, with a 20% increase in the last quarter.",
      },
      {
        id: 2,
        title: "Cost Management",
        content:
          "Labor costs constitute 40% of total expenses. Consider optimizing workforce efficiency.",
      },
    ],
    customers: [
      {
        id: 3,
        title: "Customer Retention",
        content:
          "Customer retention rate has improved by 5% this quarter. Keep up the good work!",
      },
      {
        id: 4,
        title: "Churn Rate Alert",
        content:
          "Churn rate is increasing. Implement retention strategies to mitigate customer loss.",
      },
    ],
    products: [
      {
        id: 5,
        title: "Top Performer",
        content:
          "Product C has the highest customer satisfaction rate. Consider expanding its marketing.",
      },
      {
        id: 6,
        title: "Underperforming Product",
        content:
          "Product B has the lowest satisfaction. Investigate reasons and plan improvements.",
      },
    ],
  });

  const removeInsight = (tab: string, id: number): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setInsights((prevInsights: any) => ({
      ...prevInsights,
      [tab]: prevInsights[tab].filter(
        (insight: { id: number }) => insight.id !== id
      ),
    }));
  };

  const saveInsight = (tab: string, id: number): void => {
    // Implement save functionality here
    console.log(`Saved insight ${id} from ${tab} tab`);
  };

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
                    New Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+195</div>
                  <p className="text-xs text-muted-foreground">
                    +18.3% from last month
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
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ChartContainer
                    config={{
                      value: { label: "Value", color: "hsl(var(--chart-1))" },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={costBreakdown}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        >
                          {costBreakdown.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="financial">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Financial Analysis</CardTitle>
                  <CardDescription>
                    Detailed financial metrics and projections
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] w-full">
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
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis width={80} />
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
              <div className="space-y-4">
                {insights.financial.map((insight) => (
                  <Insight
                    key={insight.id}
                    title={insight.title}
                    content={insight.content}
                    onRemove={() => removeInsight("financial", insight.id)}
                    onSave={() => saveInsight("financial", insight.id)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="customers">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>
                    Customer Acquisition, Churn, and Retention
                  </CardTitle>
                  <CardDescription>
                    Track customer metrics over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] w-full">
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
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={customerAcquisition}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis
                          yAxisId="left"
                          label={{
                            value: "Number of Customers",
                            angle: -90,
                            position: "insideLeft",
                            offset: -5,
                          }}
                        />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="newCustomers"
                          name="New Customers"
                          stroke="var(--color-newCustomers)"
                        />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="churn"
                          name="Churn"
                          stroke="var(--color-churn)"
                        />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="retentionRate"
                          name="Retention Rate (%)"
                          stroke="var(--color-retentionRate)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <div className="space-y-4">
                {insights.customers.map((insight) => (
                  <Insight
                    key={insight.id}
                    title={insight.title}
                    content={insight.content}
                    onRemove={() => removeInsight("customers", insight.id)}
                    onSave={() => saveInsight("customers", insight.id)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="products">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                  <CardDescription>
                    Sales and customer satisfaction by product
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] w-full">
                  <ChartContainer
                    config={{
                      sales: { label: "Sales", color: "hsl(var(--chart-1))" },
                      satisfaction: {
                        label: "Satisfaction",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      >
                        <CartesianGrid />
                        <XAxis
                          type="number"
                          dataKey="sales"
                          name="Sales"
                          unit="$"
                          label={{
                            value: "Sales ($)",
                            position: "bottom",
                            offset: 0,
                          }}
                        />
                        <YAxis
                          type="number"
                          dataKey="satisfaction"
                          name="Satisfaction"
                          unit="%"
                          label={{
                            value: "Satisfaction (%)",
                            angle: -90,
                            position: "left",
                          }}
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
              <div className="space-y-4">
                {insights.products.map((insight) => (
                  <Insight
                    key={insight.id}
                    title={insight.title}
                    content={insight.content}
                    onRemove={() => removeInsight("products", insight.id)}
                    onSave={() => saveInsight("products", insight.id)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
