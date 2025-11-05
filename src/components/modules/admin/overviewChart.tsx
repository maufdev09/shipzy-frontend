"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { useGetStatusDistrubutionQuery } from "@/redux/features/auth/parcel.api";

export const description = "A pie chart with a legend";

const chartConfig = {
  DELIVERED: {
    label: "DELIVERED",
    color: "var(--chart-1)",
  },
  CANCELED: {
    label: "CANCELED",
    color: "var(--chart-2)",
  },

  REQUESTED: {
    label: "REQUESTED",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function OverViewChart() {
  const { data: DistributionData } = useGetStatusDistrubutionQuery(undefined);


  const chartData = DistributionData?.data?.map((item: any) => {
    let fillColor = "";

    switch (item._id) {
      case "DELIVERED":
        fillColor = "var(--color-chart-1)";
        break;
      case "CANCELED":
        fillColor = "var(--color-chart-2)";
        break;
      case "REQUESTED":
        fillColor = "var(--color-chart-3)";
        break;

      default:
        fillColor = "var(--chart-1)";
    }

    return {
      status: item._id,
      count: item.count,
      fill: fillColor,
    };
  });


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>delivery status</CardTitle>
        <CardDescription> June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="count" />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
