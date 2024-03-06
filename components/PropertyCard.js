import Image from "next/image";
import Button from "./Button";

export default function PropertyCard() {
  return (
    <div className="bg-white rounded-3xl p-4 grid text-xl font-inter font-semibold relative">
      <Image
        src="/images/property.jpeg"
        width={370}
        height={170}
        className="rounded-xl h-170 w-370 mb-4"
        alt="property"
      />
      <div className="flex justify-between mb-2 items-center">
        <p className=" text-[#1a201f] ">Duplex</p>
        <div className="flex gap-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z"
              stroke="#1A201F"
              stroke-width="1.5"
            />
            <path
              d="M10.3332 7.33333C10.3332 8.622 9.2885 9.66667 7.99984 9.66667C6.71117 9.66667 5.6665 8.622 5.6665 7.33333C5.6665 6.04467 6.71117 5 7.99984 5C9.2885 5 10.3332 6.04467 10.3332 7.33333Z"
              stroke="#1A201F"
              stroke-width="1.5"
            />
          </svg>
          <p className="font-medium text-xs">Boulder, Colorado</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-[#000080]">$3,187,200</p>
        <div className="flex gap-2">
          <svg
            width="33"
            height="21"
            viewBox="0 0 33 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 15.5835H1.6665"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3332 18.5V14.3333C18.3332 12.762 18.3332 11.9763 17.845 11.4882C17.3568 11 16.5712 11 14.9998 11H4.99984C3.42849 11 2.64281 11 2.15466 11.4882C1.6665 11.9763 1.6665 12.762 1.6665 14.3333V18.5"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3332 11V9.84817C13.3332 9.42525 13.2569 9.28378 12.8662 9.11708C12.0524 8.76991 11.0647 8.5 9.99984 8.5C8.935 8.5 7.94724 8.76991 7.1335 9.11708C6.74279 9.28378 6.6665 9.42525 6.6665 9.84817V11"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M16.6668 11V7.13381C16.6668 6.55744 16.6668 6.26926 16.5245 5.99711C16.3822 5.72496 16.1794 5.58409 15.7738 5.30236C14.1386 4.16648 12.1478 3.5 10.0002 3.5C7.85251 3.5 5.86175 4.16648 4.22652 5.30236C3.82093 5.58409 3.61814 5.72496 3.47582 5.99711C3.3335 6.26926 3.3335 6.55744 3.3335 7.13381V11"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M22.736 13.568V12.192L28.112 4.48H30.32V11.984H31.808V13.568H30.32V16H28.528V13.568H22.736ZM28.608 6.336L24.832 11.984H28.608V6.336Z"
              fill="#526360"
            />
          </svg>

          <svg
            width="32"
            height="21"
            viewBox="0 0 32 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.6665 10.1665H14.2791C15.4999 10.1665 16.1103 10.1665 16.4789 10.7793C16.8475 11.392 16.6304 11.7826 16.1963 12.5639C15.3346 14.1148 13.6628 15.1665 11.7416 15.1665C10.4545 15.1665 9.27925 14.6944 8.38467 13.9165"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66683 10.1665V4.33317C6.66683 3.5475 6.66683 3.15466 6.42275 2.91058C6.17867 2.6665 5.78584 2.6665 5.00016 2.6665C4.21449 2.6665 3.82165 2.6665 3.57757 2.91058C3.3335 3.15466 3.3335 3.5475 3.3335 4.33317V10.1665C3.3335 10.9522 3.3335 11.345 3.57757 11.5891C3.82165 11.8332 4.21449 11.8332 5.00016 11.8332C5.78584 11.8332 6.17867 11.8332 6.42275 11.5891C6.66683 11.345 6.66683 10.9522 6.66683 10.1665Z"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.8335 6.8335H8.3335"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3335 15.1668C12.5002 16.0002 13.3335 18.5002 14.9998 19.3335H3.3335C4.16683 18.5002 5.5835 15.8335 4.5835 11.8335"
              stroke="#526360"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.968 13.52C24.992 12.6347 25.7973 11.9093 26.384 11.344C26.9813 10.768 27.4773 10.1707 27.872 9.552C28.2667 8.93333 28.464 8.31467 28.464 7.696C28.464 7.056 28.3093 6.55467 28 6.192C27.7013 5.82933 27.2267 5.648 26.576 5.648C25.9467 5.648 25.456 5.85067 25.104 6.256C24.7627 6.65067 24.5813 7.184 24.56 7.856H22.8C22.832 6.64 23.1947 5.712 23.888 5.072C24.592 4.42133 25.4827 4.096 26.56 4.096C27.7227 4.096 28.6293 4.416 29.28 5.056C29.9413 5.696 30.272 6.54933 30.272 7.616C30.272 8.384 30.0747 9.12533 29.68 9.84C29.296 10.544 28.832 11.1787 28.288 11.744C27.7547 12.2987 27.072 12.944 26.24 13.68L25.52 14.32H30.592V15.84H22.816V14.512L23.968 13.52Z"
              fill="#526360"
            />
          </svg>
        </div>
      </div>
      <Button className="p-1 text-sm">View listing</Button>

      <div className="absolute left-8 top-8">
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
    </div>
  );
}
