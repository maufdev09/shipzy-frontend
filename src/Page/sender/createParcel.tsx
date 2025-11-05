import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useCreateParcelMutation } from "@/redux/features/auth/parcel.api";
import { useGetAllReceiversQuery } from "@/redux/features/auth/user.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export default function createParcel() {
  // const [register] = useRegisterMutation();
  const [createParcel] = useCreateParcelMutation();
  const { data: userInfo } = useUserInfoQuery(undefined);

  const { data: users, isLoading: receiverLoading } =
    useGetAllReceiversQuery(undefined);
 

  const reciverOptions = users?.data?.map(
    (user: { _id: string; name: string }) => ({
      value: user._id,
      label: user.name,
    })
  );
  const typeOfParcel = [
    {
      value: "DOCUMENT",
      label: "Document",
    },
    {
      value: "PACKAGE",
      label: "Package",
    },
    {
      value: "EXPRESS",
      label: "Express",
    },
  ];

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      type: "DOCUMENT",
      weight: 2.5,
      sender: "68a6e7aea4d0dc3ac7c329f0",
      receiver: "68a6e806a4d0dc3ac7c329f6",
      senderAddress: "House #12, Road #5, Banani, Dhaka",
      receiverAddress: "Sector 20, Uttara, Dhaka",
      deliveryDate: "",
    },
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating parcel....");

    const parcelData = {
      ...data,
      sender: userInfo?.data?._id,
      fee: Number(data.weight) * 50,
    };

    try {
    await createParcel(parcelData).unwrap();
     
      toast.success("Parcel created successfully!", { id: toastId });

      // Reset form
      form.reset();
    } catch (error) {
      
      toast.error("Parcel creation failed.", { id: toastId });
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle className=" text-3xl font-bold">Register</CardTitle>
              <CardDescription className="font-bold">
                Create a new account by filling out the form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  className="space-y-5"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="flex-1 ">
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {typeOfParcel?.map(
                              (item: { label: string; value: string }) => (
                                <SelectItem key={item.value} value={item.value}>
                                  <span className="font-bold ">
                                    {item.label}
                                  </span>
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight</FormLabel>
                        <FormControl>
                          <Input placeholder="2.5" {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your public email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="senderAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>sender Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your Adress
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="receiverAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>receiverAddress</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">
                          This is your Adress
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="receiver"
                    render={({ field }) => (
                      <FormItem className="flex-1 ">
                        <FormLabel>Receiver</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          disabled={receiverLoading}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {reciverOptions?.map(
                              (item: { label: string; value: string }) => (
                                <SelectItem key={item.value} value={item.value}>
                                  <span className="font-bold ">
                                    {item.label}
                                  </span>
                                  (ID: {item.value})
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="deliveryDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormLabel>Delivery Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date <
                                new Date(
                                  new Date().setDate(new Date().getDate() - 1)
                                )
                              }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className=" w-full"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
