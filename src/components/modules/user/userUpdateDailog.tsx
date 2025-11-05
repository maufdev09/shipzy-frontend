/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Role } from "@/constants/role";
import { useUpdateUserMutation } from "@/redux/features/auth/user.api";
import { PackageCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function UserUpdateDailog({ id }:any) {
  const [updateUser] = useUpdateUserMutation();

  const form = useForm({
    defaultValues: {
      role: "",
    },
  });

  async function onSubmit(data:any) {
    try {
     await updateUser({ id, data }).unwrap();
      toast.success("role is Changed");
     
    } catch (error) {
      toast.error("Failed to change Role.");
      console.error(error);
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <PackageCheck />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Login As a sender or receiver</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Login As a sender or receiver</SelectLabel> */}
                        <SelectItem value={Role.ADMIN}>Admin</SelectItem>
                        <SelectItem value={Role.RECEIVER}>Receiver</SelectItem>
                        <SelectItem value={Role.SENDER}>Sender</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription className="sr-only">
                    Select your Role as sender or recivier.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
