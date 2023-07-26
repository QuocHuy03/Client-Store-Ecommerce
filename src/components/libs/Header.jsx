import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCategories } from "../../utils/api/categoriesApi";

const Header = () => {
  const { user, carts } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const { data, isLoading } = useQuery(
    ["categories"],
    () => fetchAllCategories(),
    {
      staleTime: 1000,
    }
  );

  return (
    <div className="border-b">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <a className="ml-4 flex lg:ml-0 gap-x-2" href="/">
            <p className="font-bold text-xl">STORE</p>
          </a>
          <nav className="mx-6 items-center">
            <div className="flex w-full relative">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
                onClick={handleDropdownToggle}
              >
                All Categories
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transform transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Nhập Từ Khóa ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>

            {isOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white absolute py-2 w-40 mt-4 rounded-lg shadow-2xl"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  {/* {data?.map((item) => (
                    <li key={item.id}> */}
                  <Link
                    to={`/c/laptop`}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {/* {item.nameCategory} */}Laptop
                  </Link>
                  {/* </li>
                  ))} */}
                </ul>
              </div>
            )}
          </nav>
          <div
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
            className="ml-auto flex items-center gap-x-4"
          >
            {user ? (
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://i.imgur.com/bbnrc1T.png"
                  alt="Rounded avatar"
                />
                <span className="font-medium text-sm">
                  {user.fullname} <br />
                  <Link to={"/logout"} className=" text-gray-400">
                    Đăng xuất
                  </Link>
                </span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://i.imgur.com/bbnrc1T.png"
                  alt="Rounded avatar"
                />
                <Link
                  to={"/login"}
                  className="font-medium text-sm text-gray-400"
                >
                  Đăng nhập <br /> Đăng ký
                </Link>
              </div>
            )}

            <div
              className="relative"
              onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="text-gray-600 w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </div>
              <ul
                className={`absolute right-0 w-40 py-2 mt-4 rounded-lg shadow-2xl z-10 bg-white ${
                  open ? "block" : "hidden"
                }`}
              >
                <li className="flex w-full items-center px-3 py-2 text-sm gap-2">
                  <img
                    width={50}
                    height={50}
                    src="https://lh3.googleusercontent.com/9s8Aic3sDaMZ2-m8gSB5u6pAV_vpD989iDPNIkWTY9Hen8mDK1mWzGYme4N6wmmmITqnvekGo6IrpLVIueEw=rw"
                    alt=""
                  />
                  <ul>
                    <li className="text-xs font-medium">Hủy Đơn Hàng</li>
                  </ul>
                </li>
              </ul>
            </div>

            <Link
              to={"/cart"}
              className="w-auto border border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition flex items-center rounded-full bg-black px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} x2={21} y1={6} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="ml-2 text-sm font-medium text-white">
                {carts.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
