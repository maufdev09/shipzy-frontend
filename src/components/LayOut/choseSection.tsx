import {

  ChartBar,
  Clock3,

  Headset,

  PackageSearch,

  ShieldCheck,

  Truck,

} from "lucide-react";

import { Button } from "@/components/ui/button";



const ChoseSection = () => {

 const featureProps = {
  title: "Powerful Features for Smarter Parcel Delivery",
  features: [
    {
      heading: "Real-Time Tracking",
      description:
        "Stay updated every second — track your parcels in real-time with live status updates and delivery progress notifications.",
      icon: <PackageSearch className="size-6" />,
    },
    {
      heading: "Secure & Reliable",
      description:
        "Every parcel is handled with top-notch care. End-to-end security ensures your deliveries reach the right hands safely.",
      icon: <ShieldCheck className="size-6" />,
    },
    {
      heading: "On-Time Delivery",
      description:
        "Our AI-powered logistics system ensures faster pickups and on-time deliveries, every time — no more delays.",
      icon: <Clock3 className="size-6" />,
    },
    {
      heading: "Nationwide Network",
      description:
        "We deliver across Bangladesh with a vast and efficient delivery network — from Dhaka to the most remote towns.",
      icon: <Truck className="size-6" />,
    },
    {
      heading: "24/7 Customer Support",
      description:
        "Our dedicated support team is always ready to help you with parcel issues, tracking, or account queries — day or night.",
      icon: <Headset className="size-6" />,
    },
    {
      heading: "Performance Analytics",
      description:
        "Admins can visualize performance, analyze trends, and optimize operations using dynamic dashboards and analytics charts.",
      icon: <ChartBar className="size-6" />,
    },
  ],
  buttonText: "Explore All Features",
  buttonUrl: "/features",
};



  return (
    <section className="py-32">
      <div className="container">
        {featureProps?.title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {featureProps?.title}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featureProps?.features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {featureProps?.buttonUrl && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <a href={featureProps?.buttonUrl}>{featureProps?.buttonText}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { ChoseSection };