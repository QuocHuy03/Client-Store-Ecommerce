import Layout from "../../components/libs/Layout";

const CartPage = () => {
  return (
    <Layout>
      {" "}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                <ul>
                  <li className="flex py-6 border-b">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                      <img
                        alt
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover object-center"
                        sizes="100vw"
                        srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689069745%2Fcxr9bz07xyjadhkpx8p1.webp&w=3840&q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          color: "transparent",
                        }}
                      />
                    </div>
                    <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="absolute z-10 right-0 top-0">
                        <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6">
                        <div className="flex justify-between">
                          <p className="text-lg font-semibold text-black">
                            THOM BROWNE
                          </p>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">Hồng nhạt</p>
                          <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                            Extra Small
                          </p>
                        </div>
                        <div className="font-semibold">10.000.000&nbsp;₫</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                      Order total
                    </div>
                    <div className="font-semibold">10.000.000&nbsp;₫</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-black border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition w-full mt-6"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
