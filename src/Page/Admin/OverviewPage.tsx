/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  useAllParcelQuery,
  useGetParcelOverviewQuery,
} from "@/redux/features/auth/parcel.api";
import { format } from "date-fns";
import { OverViewChart } from "@/components/modules/admin/overviewChart";

export const description = "A bar chart with a custom label";

const chartConfig = {
  monthlyShipments: {
    label: "monthlyShipments",
    color: "var(--primary)",
  },

  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig;

export default function OverviewPage() {
  const { data } = useAllParcelQuery(undefined);
  const { data: overviewData } = useGetParcelOverviewQuery(undefined);




  const monthData = data?.data?.map((item:any) => item.createdAt);
  const monthCount: Record<string, number> = {};

  monthData?.forEach((item:any) => {
  
    const monthName = format(new Date(item), "MMMM");
    monthCount[monthName] = (monthCount[monthName] || 0) + 1;
  });


  const chartData = Object.entries(monthCount).map(([month, count]) => ({
    month,
    monthlyShipments: count,
  }));

  return (
    <div>
      <div className=" flex justify-between gap-5 my-5">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Total Parcel</CardTitle>
            <CardDescription>{overviewData?.data?.totalParcel}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Delivered</CardTitle>
            <CardDescription>{overviewData?.data?.delivered}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>pending</CardTitle>
            <CardDescription>{overviewData?.data?.pending}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>inTransit</CardTitle>
            <CardDescription>{overviewData?.data?.inTransit}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className=" flex gap-5">
    
<div className="flex-1">
    <Card >
          <CardHeader>
            <CardTitle>Bar Chart - Monthly Shipments </CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  right: 16,
                }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
                />
                <XAxis dataKey="monthlyShipments" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                  dataKey="monthlyShipments"
                  layout="vertical"
                  fill="var(--color-monthlyShipments)"
                  radius={4}
                >
                  <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    className="fill-(--color-label)"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="monthlyShipments"
                    position="right"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
        </Card>
</div>
<div className="flex-1">

        <OverViewChart  ></OverViewChart>
</div>
      </div>
    </div>
  );
}
