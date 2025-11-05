import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading="Frequently Asked Questions",
  items= [
    {
      id: "faq-1",
      question: "How can I track my parcel?",
      answer:
        "You can track your parcel by entering your tracking ID on the tracking page. The system will show you the current status and location of your shipment in real time.",
    },
    {
      id: "faq-2",
      question: "What should I do if my parcel is delayed?",
      answer:
        "If your parcel is delayed, please check the tracking page for updates. Delays can happen due to weather, customs, or local delivery issues. If it's delayed more than 3 days, contact our support team.",
    },
    {
      id: "faq-3",
      question: "Can I change my delivery address after placing the order?",
      answer:
        "Yes, you can change your delivery address within 12 hours of placing your order by contacting customer support. After dispatch, address changes may not be possible.",
    },
    {
      id: "faq-4",
      question: "What are the delivery timeframes?",
      answer:
        "Standard delivery takes 2–5 business days within the country. Express shipping options are available for faster delivery depending on your region.",
    },
    {
      id: "faq-5",
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      id: "faq-6",
      question: "How do I report a lost or damaged parcel?",
      answer:
        "If your parcel is lost or damaged, please contact our support team within 7 days of the expected delivery date. We’ll investigate and provide a resolution promptly.",
    },
    {
      id: "faq-7",
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit/debit cards, mobile banking, and cash-on-delivery (COD) in selected areas.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-32">
      <div className="container w-full">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq };
