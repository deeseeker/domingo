import Image from "next/image";

export default function Benefits() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-20 mt-8 md:mt-16">
      <Image
        src="/images/about-domingo.jpeg"
        alt="benefits"
        width={649}
        height={471}
        className="rounded-lg h-471 w-649 md:w-2/5 md:h-auto md:mr-8"
      />
      <div className="py-4 md:py-0">
        <h2 className="text-xl md:text-2xl">Why Domingo?</h2>
        <p className="text-sm md:text-base">
          With an extensive network of seasoned professionals with in-depth
          knowledge of the real estate market. We leverage our expertise to
          guide you through every step of your property journey. We are
          committed to excellence in all aspects of our business. From the
          quality of our services to the professionalism of our team, we set
          high standards and continuously thrive to exceed expectations. With an
          extensive network of seasoned professionals with in-depth knowledge of
          the real estate market. We leverage our expertise to guide you through
          every step of your property journey. We are committed to excellence in
          all aspects of our business. From the quality of our services to the
          professionalism of our team, we set high standards and continuously
          thrive to exceed expectations.
        </p>
      </div>
    </div>
  );
}