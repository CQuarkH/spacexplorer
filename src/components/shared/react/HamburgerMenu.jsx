import React from "react";
import { routes } from "../../../models/routes";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className={`text-white md:hidden focus:outline-none z-50 relative`}
      >
        <div className="w-6 h-6 relative">
          <HamburgerIcon isOpen={isOpen} />
          <CloseIcon isOpen={isOpen} />
        </div>
      </button>
      <div
        className={`fixed p-6 top-9 right-0 h-full bg-[#0c0e11] text-zinc-400 z-40 transform ${
          isOpen ? "-translate-x" : "translate-x-full"
        } w-[200px] transition-transform duration-300 ease-in-out`}
      >
        {/* Contenido del Drawer */}
        <nav className="flex flex-col gap-4">
          {routes.map((route) => (
            <a
              href={route.path}
              className={`transition duration-300 ease-in-out hover:text-zinc-200 font-bold`}
            >
              {route.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

const HamburgerIcon = ({ isOpen }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
      isOpen ? "opacity-0" : "opacity-100"
    }`}
  >
    <svg
      width="28px"
      height="28px"
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

const CloseIcon = ({ isOpen }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
      isOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
        fill="#FFFFFF"
      />
    </svg>
  </div>
);

export default HamburgerMenu;
