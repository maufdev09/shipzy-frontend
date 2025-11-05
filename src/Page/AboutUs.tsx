
export default function AboutUs() {
  return (
    <div>
      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-6 md:py-12">
          {/* <!-- Component --> */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {/* <!-- Content --> */}
            <div className="flex flex-col gap-8 md:w-3/5">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl">About us</h2>
              <p className="text-sm sm:text-base">
                We are committed to delivering your parcels safely, quickly, and
                reliably. Our platform connects senders and receivers through a
                transparent and efficient delivery network. Every shipment is
                tracked in real-time, ensuring complete visibility from pickup
                to delivery.
              </p>
              <a
                href="javascript:void(0);"
                className="w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
              >
                Learn More
              </a>
              {/* <!-- Divider --> */}

              {/* <!-- Testimonials --> */}
            </div>
            {/* <!-- Image --> */}
            <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[384px] md:[752px]">
              <img
                src={"Hero1.png"}
                className="w-fit
            "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
