import Button from "./Button";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";

export default function Feature({ properties }) {
  return (
    <div className="px-4 md:px-20 pt-10 bg-zinc-50">
      <div className="flex flex-col md:flex-row md:gap-6 justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap md:gap-6">
          <Filter
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                  stroke="#526360"
                  stroke-width="1.5"
                />
                <path
                  d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                  stroke="#526360"
                  stroke-width="1.5"
                />
              </svg>
            }
            size="250px"
          />
          <Filter
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8332 1.66675L1.6665 5.83341"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 2.5V18.3333H5.83333C4.26198 18.3333 3.47631 18.3333 2.98816 17.8452C2.5 17.357 2.5 16.5713 2.5 15V5.83333"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5.83325L18.3333 9.99992"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.3335 18.333H14.1668C15.7382 18.333 16.5238 18.333 17.012 17.8448C17.5002 17.3567 17.5002 16.571 17.5002 14.9997V9.58325"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 8.33325V5.83325"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8335 9.16675H6.66683M5.8335 12.5001H6.66683"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 11.6667H14.1668"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.75 18.3333V15"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            size="250px"
          />
          <Filter
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3332 14.5833H1.6665"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3332 17.5V13.3333C18.3332 11.762 18.3332 10.9763 17.845 10.4882C17.3568 10 16.5712 10 14.9998 10H4.99984C3.42849 10 2.64281 10 2.15466 10.4882C1.6665 10.9763 1.6665 11.762 1.6665 13.3333V17.5"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3332 10V8.84817C13.3332 8.42525 13.2569 8.28378 12.8662 8.11708C12.0524 7.76991 11.0647 7.5 9.99984 7.5C8.935 7.5 7.94724 7.76991 7.1335 8.11708C6.74279 8.28378 6.6665 8.42525 6.6665 8.84817V10"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M16.6668 10V6.13381C16.6668 5.55744 16.6668 5.26926 16.5245 4.99711C16.3822 4.72496 16.1794 4.58409 15.7738 4.30236C14.1386 3.16648 12.1478 2.5 10.0002 2.5C7.85251 2.5 5.86175 3.16648 4.22652 4.30236C3.82093 4.58409 3.61814 4.72496 3.47582 4.99711C3.3335 5.26926 3.3335 5.55744 3.3335 6.13381V10"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            }
            size="112px"
          />
          <Filter
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6665 9.16675H14.2791C15.4999 9.16675 16.1103 9.16675 16.4789 9.7795C16.8475 10.3922 16.6304 10.7828 16.1963 11.5642C15.3346 13.1151 13.6628 14.1667 11.7416 14.1667C10.4545 14.1667 9.27925 13.6947 8.38467 12.9167"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66683 9.16675V3.33341C6.66683 2.54774 6.66683 2.15491 6.42275 1.91082C6.17867 1.66675 5.78584 1.66675 5.00016 1.66675C4.21449 1.66675 3.82165 1.66675 3.57757 1.91082C3.3335 2.15491 3.3335 2.54774 3.3335 3.33341V9.16675C3.3335 9.95242 3.3335 10.3452 3.57757 10.5893C3.82165 10.8334 4.21449 10.8334 5.00016 10.8334C5.78584 10.8334 6.17867 10.8334 6.42275 10.5893C6.66683 10.3452 6.66683 9.95242 6.66683 9.16675Z"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8335 5.83325H8.3335"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3335 14.1666C12.5002 14.9999 13.3335 17.4999 14.9998 18.3333H3.3335C4.16683 17.4999 5.5835 14.8333 4.5835 10.8333"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            size="w-[112px]"
          />
          <Filter
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3335 11.6667C13.3335 12.3571 13.8932 12.9167 14.5835 12.9167C15.2738 12.9167 15.8335 12.3571 15.8335 11.6667C15.8335 10.9764 15.2738 10.4167 14.5835 10.4167C13.8932 10.4167 13.3335 10.9764 13.3335 11.6667Z"
                  stroke="#526360"
                  stroke-width="1.5"
                />
                <path
                  d="M8.33317 5.83333H13.3332C15.6902 5.83333 16.8687 5.83333 17.6009 6.56557C18.3332 7.2978 18.3332 8.47633 18.3332 10.8333V12.5C18.3332 14.857 18.3332 16.0355 17.6009 16.7677C16.8687 17.5 15.6902 17.5 13.3332 17.5H8.33317C5.19047 17.5 3.61913 17.5 2.64281 16.5237C1.6665 15.5474 1.6665 13.976 1.6665 10.8333V9.16667C1.6665 6.02397 1.6665 4.45262 2.64281 3.47631C3.61913 2.5 5.19047 2.5 8.33317 2.5H11.6665C12.4415 2.5 12.829 2.5 13.1469 2.58518C14.0096 2.81635 14.6835 3.49022 14.9147 4.35295C14.9998 4.67087 14.9998 5.05836 14.9998 5.83333"
                  stroke="#526360"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            }
            size="250px"
          />
        </div>
        <Button className="px-6 py-3 w-[170px]">Search</Button>
      </div>

      <div>
        <h2 className="font-inter text-2xl font-bold mt-10">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
