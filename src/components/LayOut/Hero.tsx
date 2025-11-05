import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



const Hero = () => {

const props ={
  badge :"📦 Fast, Secure & Reliable",
  heading : "Deliver Anything , Anywhere Instantly.",
  description :  "Experience the easiest way to send and receive parcels with real-time tracking, instant notifications, and seamless management for senders, receivers, and admins.",
  buttons : {
    primary: {
      text:"Get Started",
      url:  "/register",
    },
    secondary: {
      text: "Track a Parcel",
      url: "/track",
    },
  },
  image :{
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Hero section demo image showing interface components",
  },
}


  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {props?.badge && (
              <Badge variant="outline">
                {props?.badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {props?.heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {props?.description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {props?.buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={props?.buttons.primary.url}>{props?.buttons.primary.text}</a>
                </Button>
              )}
              {props?.buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={props?.buttons.secondary.url}>
                    {props?.buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={"Hero1.png"}
            alt={props?.image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };