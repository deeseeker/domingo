import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function PropertyList({ property }) {
  const { id, location, main_image_url, price, type } = property;
  console.log(property);
  const address = location;
  const formattedAddress = address.split("\n")[1].split(",")[0];
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <Link href={`/properties/${id}`} passHref>
      <div className="font-inter relative rounded-lg shadow-custom-1 overflow-hidden">
        <Image
          src={main_image_url}
          width={370}
          height={170}
          className="mb-4 rounded-t-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          alt="property"
        />
        <div className="absolute left-4 top-4">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_128_476)">
              <path
                d="M25.9514 5.32554C22.3759 3.1323 19.2551 4.01615 17.3804 5.42402C16.6118 6.00128 16.2274 6.28991 16.0013 6.28991C15.7752 6.28991 15.3908 6.00128 14.6222 5.42402C12.7475 4.01615 9.62675 3.1323 6.05122 5.32554C1.35873 8.20391 0.29693 17.6998 11.1207 25.7111C13.1823 27.237 14.2131 28 16.0013 28C17.7896 28 18.8203 27.237 20.8819 25.7111C31.7057 17.6998 30.6439 8.20391 25.9514 5.32554Z"
                fill="white"
                fill-opacity="0.4"
              />
              <path
                d="M25.9514 5.32554C22.3759 3.1323 19.2551 4.01615 17.3804 5.42402C16.6118 6.00128 16.2274 6.28991 16.0013 6.28991C15.7752 6.28991 15.3908 6.00128 14.6222 5.42402C12.7475 4.01615 9.62675 3.1323 6.05122 5.32554C1.35873 8.20391 0.29693 17.6998 11.1207 25.7111C13.1823 27.237 14.2131 28 16.0013 28C17.7896 28 18.8203 27.237 20.8819 25.7111C31.7057 17.6998 30.6439 8.20391 25.9514 5.32554Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_128_476"
                x="-4.73105"
                y="-3.40049"
                width="41.465"
                height="38.8005"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_128_476"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_128_476"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="mx-6 my-5">
          <p className="text-3xl mb-3 font-bold">{formattedNumber}</p>
          <p className="text-base text-[#85818E]">
            4 Bedroom {type} in {formattedAddress}
          </p>
        </div>
      </div>
    </Link>
  );
}
