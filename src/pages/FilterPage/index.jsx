import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/libs/Layout";
import { fetchAllCategories } from "../../utils/api/categoriesApi";

const FilterPage = () => {
  const { data: dataCategories, isLoading } = useQuery(
    ["categories"],
    () => fetchAllCategories(),
    {
      staleTime: 1000,
    }
  );

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 px-4 sm:px-6 lg:px-8 pb-24">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <button
                type="button"
                className="w-auto rounded-full bg-black border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition flex items-center gap-x-2 lg:hidden"
              >
                Filter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <line x1={12} x2={12} y1={5} y2={19} />
                  <line x1={5} x2={19} y1={12} y2={12} />
                </svg>
              </button>
              <div
                style={{
                  position: "fixed",
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                  display: "none",
                }}
              />
              <div className="hidden lg:block">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold">Thương Hiệu</h3>
                  <hr className="my-4" />
                  <div className="flex flex-wrap gap-3">
                    {dataCategories?.map((item) => (
                      <div className="flex items-center">
                        <input
                          id={`checker_${item.id}`}
                          type="checkbox"
                          defaultValue
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`checker_${item.id}`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item.nameCategory}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold">Colors</h3>
                  <hr className="my-4" />
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Đen
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Xanh lá
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Hồng
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Hồng nhạt
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Vàng
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Xám
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-auto border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition rounded-md text-sm text-gray-800 p-2 bg-white border boder-gray-300"
                      >
                        Trắng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                    <div className="aspect-square rounded-xl bg-gray-100 relative">
                      <img
                        alt="Image"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="aspect-square object-cover rounded-md"
                        sizes="100vw"
                        srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=3840&q=75 3840w"
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdckypb6to%2Fimage%2Fupload%2Fv1689067600%2Fmdrvtga6qgcghgw59idx.webp&w=3840&q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          color: "transparent",
                        }}
                      />
                      <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5 absolute">
                        <div className="flex gap-x-6 justify-center">
                          <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-600"
                            >
                              <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                              <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                              <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                              <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                            </svg>
                          </button>
                          <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-600"
                            >
                              <circle cx={8} cy={21} r={1} />
                              <circle cx={19} cy={21} r={1} />
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        Tee Drew House Secret SS Tee Green
                      </p>
                      <p className="text-sm text-gray-500">Drew</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">3.500.000&nbsp;₫</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilterPage;
