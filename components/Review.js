import Image from "next/image";

export default function Review() {
  return (
    <div className="px-4 md:px-20 mt-16">
      <h3 className="text-lg md:text-2xl font-bold">
        Recently sold properties
      </h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-4">
        <div className="bg-white rounded-3xl p-4 md:w-1/3">
          <Image
            src="/images/property.jpeg"
            layout="responsive"
            width={370}
            height={170}
            className="rounded-xl mb-4"
            alt="property"
          />
          <div className="flex justify-between">
            <p>Duplex</p>
            <p>$3,187,200</p>
          </div>
          <p className="text-sm md:text-base">
            “Thanks to Domingo I found my dream home effortlessly! The seamless
            interaction with agents streamlined the entire process”
          </p>
          <div className="flex items-center justify-center gap-2">
            <Image
              width={32}
              height={32}
              src="/images/ayesha.png"
              alt="customer"
              className="rounded-full"
            />
            <div>
              <p className="text-sm md:text-base">Ayesha Craig</p>
              <p className="text-xs md:text-sm">Domingo Customer</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-4 md:w-1/3">
          <Image
            src="/images/property.jpeg"
            layout="responsive"
            width={370}
            height={170}
            className="rounded-xl mb-4"
            alt="property"
          />
          <div className="flex justify-between">
            <p>Duplex</p>
            <p>$3,187,200</p>
          </div>
          <p className="text-sm md:text-base">
            “Thanks to Domingo I found my dream home effortlessly! The seamless
            interaction with agents streamlined the entire process”
          </p>
          <div className="flex items-center justify-center gap-2">
            <Image
              width={32}
              height={32}
              src="/images/ayesha.png"
              alt="customer"
              className="rounded-full"
            />
            <div>
              <p className="text-sm md:text-base">Ayesha Craig</p>
              <p className="text-xs md:text-sm">Domingo Customer</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-4 md:w-1/3">
          <Image
            src="/images/property.jpeg"
            layout="responsive"
            width={370}
            height={170}
            className="rounded-xl mb-4"
            alt="property"
          />
          <div className="flex justify-between">
            <p>Duplex</p>
            <p>$3,187,200</p>
          </div>
          <p className="text-sm md:text-base">
            “Thanks to Domingo I found my dream home effortlessly! The seamless
            interaction with agents streamlined the entire process”
          </p>

          <div className="flex items-center justify-center gap-2">
            <Image
              width={32}
              height={32}
              src="/images/ayesha.png"
              alt="customer"
              className="rounded-full"
            />
            <div>
              <p className="text-sm md:text-base">Ayesha Craig</p>
              <p className="text-xs md:text-sm">Domingo Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
