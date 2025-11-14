import { File, Package, TruckElectric } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useParcelTrackingQuery } from "@/redux/features/auth/parcel.api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function TrackParcel() {
  const [trackingId, setTrackingId] = useState<string | null>(null);

  const { data: parcelTracking } = useParcelTrackingQuery(trackingId!, {
    skip: !trackingId,
  });

  const form = useForm({
    defaultValues: {
      trackingId: " ",
    },
  });

  const onSubmit = async (data: any) => {
    if (data.trackingId) {
      setTrackingId(data.trackingId);
    }
  };

  console.log(parcelTracking);

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Track Your Parcel
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Track Your Parcel
          </h2>
          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            Enter your tracking ID to get the latest status of your parcel.
          </p>
          <Form {...form}>
            <form
              className="flex justify-center items-center w-full gap-3"
              onSubmit={form.handleSubmit(onSubmit)}
              onChange={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="trackingId"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-50 md:w-72 lg:w-100"
                        type="text"
                        placeholder="Enter your tracking ID"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      search your parcel by tracking id
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className=" ">
                Search
              </Button>
            </form>
          </Form>
        </div>
        <div className="">
          {parcelTracking?.data?.map((Parcel: any) => (
            <Card
              key={Parcel?._id}
              className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0 w-full mx-auto"
            >
              <div className="aspect-16/9 w-full">
                {Parcel?.type === "DOCUMENT" && (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <File className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                {Parcel?.type === "PACKAGE" && (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <Package className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                {Parcel?.type === "EXPRESS" && (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <TruckElectric className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  {Parcel?.type}
                </h3>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Status:</strong> {Parcel?.status}
                </p>
                <p>
                  <strong>Weight:</strong> {Parcel?.weight} kg
                </p>
                <p>
                  <strong>Fee:</strong> ${Parcel?.fee}
                </p>
                <p>
                  <strong>Sender Address:</strong> {Parcel?.senderAddress}
                </p>
                <p>
                  <strong>Receiver Address:</strong> {Parcel?.receiverAddress}
                </p>
              </CardContent>

              {Parcel?.statusLog?.length > 0 && (
                <CardFooter className="flex flex-col items-start border-t pt-4">
                  <h4 className="mb-2  font-semibold">📦 Status Timeline</h4>
                  <ul className="border-l border-gray-300 pl-4 space-y-3">
                    {Parcel.statusLog.map((log: any, index: number) => (
                      <li key={index} className="relative">
                        <span className="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full" />
                        <div className="ml-2">
                          <p className="text-sm font-medium">{log.status}</p>
                          {log.note && (
                            <p className="text-xs text-gray-500 italic">
                              {log?.note}
                            </p>
                          )}
                          <p className="text-xs text-gray-400">
                            {new Date(log.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
