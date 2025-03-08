"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
    { year: "2020", book: 10, author: 5 },
    { year: "2021", book: 5, author: 3 },
    { year: "2022", book: 3, author: 2 },
    { year: "2023", book: 8, author: 4 },
    { year: "2024", book: 15, author: 12 },
];

const chartConfig = {
    book: {
        label: "book",
        color: "hsl(var(--chart-1))",
    },
    author: {
        label: "author",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

const BookAuthorAreaChart = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Book Author Overview</CardTitle>
                <CardDescription>
                    Showing total books released for the last 5 years
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(1)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="author"
                            type="natural"
                            fill="var(--color-author)"
                            fillOpacity={0.4}
                            stroke="var(--color-author)"
                            stackId="a"
                        />
                        <Area
                            dataKey="book"
                            type="natural"
                            fill="var(--color-book)"
                            fillOpacity={0.4}
                            stroke="var(--color-book)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            7.3% Increase in Books Released
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            2020 - 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BookAuthorAreaChart;
