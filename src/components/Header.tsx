import { useEffect, useState } from "react";
import NextLink from "next/link";
import { ThemeToggle } from "src/components/ThemeToggle";

export const Header: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuShown((mobileMenuShown) => !mobileMenuShown);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    // bg-opacity-50 backdrop-filter backdrop-blur-3xl dark:bg-opacity-80
    <div
      className={`container sticky z-50 h-auto top-0  mx-auto bg-white shadow-sm text-gray-800 dark:bg-gray-900 dark:text-gray-200`}
    >
      <div className="flex items-center px-6 py-4 lg:px-10 lg:py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="w-full flex justify-start font-bold">
          <NextLink href="/">
            <a>WorkWork</a>
          </NextLink>
        </div>
        <ThemeToggle />
        <button className="" onClick={() => toggleMobileMenu()}>
          <div className="relative w-6 h-6 p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="relative ">
        {mobileMenuShown ? (
          <div className=" left-0 right-0 top-0 flex flex-col px-6 lg:px-10 absolute text-xl bg-white bg-opacity-80 backdrop-filter backdrop-blur-xl shadow-xl dark:bg-gray-700 dark:backdrop-filter dark:backdrop-filter-xl dark:bg-opacity-80">
            <div>
              <NextLink href="/" passHref>
                <a>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-left inline py-4 font-mono border-b-0 border-bluegray-300 dark:border-bluegray-700"
                    aria-label="Home"
                  >
                    Home
                  </button>
                </a>
              </NextLink>
            </div>

            <div>
              <NextLink href="/about">
                <a>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-left inline py-4 font-mono border-b-0 border-gray-300 dark:border-gray-700"
                    aria-label="About"
                  >
                    About
                  </button>
                </a>
              </NextLink>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
