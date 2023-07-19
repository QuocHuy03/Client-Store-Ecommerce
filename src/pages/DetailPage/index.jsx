import { useEffect, useState } from "react";
import Layout from "../../components/libs/Layout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "../../utils/api/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cartSlice";
import { message } from "antd";

const DetailPage = () => {
  const { slug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorError, setShowColorError] = useState(false);
  const [isSlug, setIsSlug] = useState(slug || "");
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (slug) {
      setIsSlug(slug);
    }
  }, [slug]);

  const { data: product, isLoading } = useQuery(
    ["detail", isSlug],
    () => fetchProductBySlug(isSlug),
    {
      staleTime: 500,
    }
  );

  if (isLoading) {
    return <p>Loading</p>;
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  const handleColorClick = (color) => {
    if (color === null) {
      setShowColorError(true);
    } else {
      setSelectedColor(color);
      setShowColorError(false);
    }
  };

  const addProduct = (product) => {
    if (!selectedColor) {
      setShowColorError(true);
      return;
    }

    const { id, nameProduct, price_has_ropped, imagePaths, nameCategory } =
      product;
    dispatch(
      addToCart({
        product: {
          id,
          name: nameProduct,
          color: selectedColor,
          price: price_has_ropped,
          image: imagePaths,
          category: nameCategory,
        },
        quantity,
      })
    );
    message.success(`Thêm Sản Phẩm Vào Giỏ Hàng Success`);
  };
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div className="flex flex-col-reverse">
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <div
                    className="grid grid-cols-4 gap-6"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    {product.imagePaths &&
                      product.imagePaths.split(",").map((imagePath, index) => (
                        <button
                          key={index}
                          className={`relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ${
                            selectedImageIndex === index
                              ? "border-2 border-black"
                              : ""
                          }`}
                          onClick={() => handleImageClick(index)}
                          id="headlessui-tabs-tab-:r14:"
                          role="tab"
                          type="button"
                          aria-selected="true"
                          tabIndex={0}
                          data-headlessui-state="selected"
                          aria-controls="headlessui-tabs-panel-:r17:"
                        >
                          <div>
                            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                              <img
                                alt={product.nameProduct}
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover object-center"
                                sizes="100vw"
                                srcSet={imagePath}
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: 0,
                                  color: "transparent",
                                }}
                              />
                            </span>
                            <span
                              className={`absolute inset-0 rounded-md ring-2 ${
                                selectedImageIndex === index
                                  ? "ring-offset-2 ring-black"
                                  : "ring-transparent"
                              }`}
                            />
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
                <div className="aspect-square w-full">
                  {product.imagePaths && (
                    <div
                      id={`headlessui-tabs-panel-${selectedImageIndex}`}
                      role="tabpanel"
                      tabIndex={0}
                      data-headlessui-state="selected"
                      aria-labelledby={`headlessui-tabs-tab-${selectedImageIndex}`}
                    >
                      <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                        <img
                          alt={product.nameProduct}
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="object-cover object-center"
                          sizes="100vw"
                          srcSet={
                            product.imagePaths
                              ? product.imagePaths.split(",")[
                                  selectedImageIndex
                                ]
                              : null
                          }
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <span
                    id="headlessui-tabs-panel-:r18:"
                    role="tabpanel"
                    tabIndex={-1}
                    aria-labelledby="headlessui-tabs-tab-:r15:"
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
                    }}
                  />
                  <span
                    id="headlessui-tabs-panel-:r19:"
                    role="tabpanel"
                    tabIndex={-1}
                    aria-labelledby="headlessui-tabs-tab-:r16:"
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
                    }}
                  />
                </div>
              </div>
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div>
                  <div>
                    <p className="font-semibold text-lg">
                      {product.nameProduct}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className=" text-gray-500">{product.nameCategory}</p>
                      <p className="text-xs font-semibold uppercase text-green-400">
                        {product.statusProduct}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="text-xl font-semibold text-blue-700">
                      {product.initial_price.toLocaleString()}đ
                    </div>
                    <div
                      className="text-lg"
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      {product.price_has_ropped.toLocaleString()}đ
                    </div>
                  </div>
                  <hr className="my-4" />

                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-2">
                      <h3 className="font-semibold"> Color : </h3>
                      {product.nameColors &&
                        product.nameColors.split(",").map((color, index) => (
                          <div
                            key={index}
                            className={`h-8 w-8 rounded-full border ${
                              selectedColor === color
                                ? "border-2 border-blue-700"
                                : "border"
                            }`}
                            style={{
                              backgroundColor: color,
                              cursor: "pointer",
                            }}
                            onClick={() => handleColorClick(color)}
                          />
                        ))}
                      {showColorError && (
                        <span className="text-red-500">
                          (Vui lòng chọn Color)
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-x-2">
                      <div
                        className="text-base"
                        dangerouslySetInnerHTML={{
                          __html: product.contentProduct,
                        }}
                      ></div>
                    </div>
                  </div>
                  <hr class="my-4"></hr>

                  <div>
                    <h3 className="pb-2 text-base font-medium text-slate-500">
                      KHUYẾN MÃI ĐÃ NHẬN
                    </h3>
                    <div className="flex gap-x-5 pb-2">
                      <div>
                        <img
                          style={{
                            width: 35,
                            height: 25,
                          }}
                          height="25"
                          width="25"
                          src="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png"
                          alt=""
                        />
                      </div>
                      <div>
                        1x Miễn phí 1 đổi 1 Laptop trong 30 ngày (Áp dụng cho
                        đơn hàng tháng sinh nhật 1/7 - 31/7/2023)
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <div>
                        <img
                          style={{
                            width: 27,
                            height: 27,
                          }}
                          src="https://shopfront-cdn.tekoapis.com/cart/gift-filled.png"
                          alt=""
                        />
                      </div>
                      <div>1x Ba lô Lenovo (Quà tặng)</div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="mt-10 flex items-center gap-x-3">
                    <button
                      type="button"
                      style={{ flex: 1 }}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Mua Ngay
                    </button>
                    <button
                      type="button"
                      onClick={() => addProduct(product)}
                      style={{ flex: 1 }}
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Thêm Vào Giỏ Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-10" />
            <div className="space-y-4">
              <h3 className="font-bold text-3xl">Related Item</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                  <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <img
                      alt="Image"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="aspect-square object-cover rounded-md"
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
                    <p className="font-semibold text-lg">THOM BROWNE</p>
                    <p className="text-sm text-gray-500">THOM BROWNE</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">10.000.000&nbsp;₫</div>
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

export default DetailPage;
