import { Divider } from "@chakra-ui/react";
import EmailInput from "./EmailInput";

export default function Footer() {
  return (
    <div className="bg-[#00002B] text-[#E4E3E6] mt-20 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-6 pt-16 pb-24 gap-10">
        <div className="col-span-1 md:col-span-3 justify-self-start max-w-sm">
          <div className="flex items-center gap-3 text-2xl font-normal text-white col-start-1 col-span-3 mb-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 5.28C24 2.36394 21.6361 0 18.72 0H5.28C2.36394 0 0 2.36393 0 5.28V18.8927C0 21.8087 2.36394 24.1726 5.28 24.1726H18.72C21.6361 24.1726 24 26.5366 24 29.4526V42.72C24 45.636 26.364 48 29.28 48H42.72C45.636 48 48 45.636 48 42.72V29.1072C48 26.1912 45.636 23.8273 42.72 23.8273H29.28C26.364 23.8273 24 21.4634 24 18.5473V5.28Z"
                fill="#fff"
              />
            </svg>
            Domingo
          </div>
          <p className="mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur
            maximus quam.
          </p>
          <div>
            <label className="block mb-2 text-sm">
              Subscribe to our Newsletter
            </label>
            <EmailInput />
          </div>
        </div>
        <div className="font-onest text-base font-semibold">
          <h3 className="font-medium">Property</h3>
          <ul className="grid gap-y-6 mt-7">
            <li>List your property</li>
            <li>All your properties</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className="font-onest text-base font-semibold">
          <h3 className="font-medium">Our Company</h3>
          <ul className="grid gap-y-6 mt-7">
            <li>About us</li>
            <li>Terms of use</li>
            <li>Refund policy</li>
          </ul>
        </div>
        <div className="font-onest text-base font-semibold">
          <h3 className="font-medium">Account</h3>
          <ul className="grid gap-y-6 mt-7">
            <li>Log in</li>
            <li>Interested properties</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
      <div className="">
        <Divider />
      </div>
      <footer className="flex flex-col md:flex-row justify-between items-center pt-8 pb-16">
        <p class="text-sm text-center md:text-left">
          Copyright &copy; Domingo.co
        </p>
        <div className="flex gap-4 justify-center md:justify-end">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Content */}
          </svg>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Content */}
          </svg>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Content */}
          </svg>
        </div>
      </footer>
    </div>
  );
}
