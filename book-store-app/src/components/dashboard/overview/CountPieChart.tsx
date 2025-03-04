"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { title: "book", count: 20, fill: "var(--color-book)" },
    { title: "author", count: 12, fill: "var(--color-author)" },
    { title: "customer", count: 55, fill: "var(--color-customer)" },
];

const chartConfig = {
    count: {
        label: "Total Count Overview",
    },
    book: {
        label: "Book",
        color: "hsl(var(--chart-1))",
    },
    author: {
        label: "Author",
        color: "hsl(var(--chart-2))",
    },
    customer: {
        label: "Customer",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

const CountPieChart = () => {
    const totalCount = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0);
    }, []);

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Total Count by Category</CardTitle>
                <CardDescription>September - December 2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="title"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalCount.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Count
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing total count for the last 4 months
                </div>
            </CardFooter>
        </Card>
    );
};

export default CountPieChart;
