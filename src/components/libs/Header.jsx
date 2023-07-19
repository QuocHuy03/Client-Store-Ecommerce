import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";

const Header = () => {
  const { carts } = useContext(AppContext);
  return (
    <div className="border-b">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <a className="ml-4 flex lg:ml-0 gap-x-2" href="/">
            <p className="font-bold text-xl">STORE</p>
          </a>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/17fea6f3-6725-428e-b25e-3f41af172ccf"
            >
              AMI
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/262978a6-1ab0-4c48-ac81-b22f8b3c76b4"
            >
              Drew
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/58378bff-974f-45c5-ac0c-1dca0bd55a3e"
            >
              Gucci
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/91feb81e-a9d2-47fc-9019-f5ceaeeb8cfc"
            >
              THOM BROWNE
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/b6c847e3-2518-4846-978b-867b2e698023"
            >
              ADLV
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/f6ef5b2b-acdd-4976-8dcc-ace7bd5c7403"
            >
              13 De Mazo
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-black text-neutral-500"
              href="/category/f9b7c1e5-66f6-4b1a-ac86-1d8d8f652b37"
            >
              LOUIS VUITTON
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-x-4">
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
