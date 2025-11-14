import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { z } from "zod";
import PasswordInput from "@/components/PasswordInput";

import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { config } from "@/config";
import { Link, useNavigate } from "react-router";

const formSchema = z.object({
  email: z
    .email({ error: "Invalid email address format." })
    .min(5, { error: "Email must be at least 5 characters long." })
    .max(100, { error: "Email cannot exceed 100 characters." }),
  // role: z.enum(Object.values(Role) as [string]).optional(),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long." }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const navigate = useNavigate();
  const [login] = useLoginMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "marufdev10@gmail.com",
      password: "marufdev90@gmail.com",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const result = await login(data).unwrap();
  
     if (result.success){
      toast.success("Login successful");
      navigate("/");
}

      // Reset form
      form.reset();
    } catch (error) {
    
      toast.error("Login failed.");
    }

   
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className=" text-3xl font-bold">Login</CardTitle>
          <CardDescription className="font-bold">
            Please enter your credentials to login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        {...field}
                      />
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your web password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
              
                type="submit"
                className=" w-full"
              >
                Login
              </Button>
            </form>

            <FieldGroup>
              <Field>
                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card my-6 ">
                  Or continue with
                </FieldSeparator>

                <Button
                  onClick={() => window.open(`${config.baseUrl}/auth/google`,"")}
                  variant="outline"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </Field>

              <Field>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
