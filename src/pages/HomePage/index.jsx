import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModalProduct from "../../components/ModalProduct";
import Layout from "../../components/libs/Layout";
import { AppContext } from "../../context/AppContextProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../utils/api/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cartSlice";
import { message } from "antd";

const HomePage = () => {
  const { isOpenModal, setIsOpenModal } = useContext(AppContext);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorError, setShowColorError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const { data, isLoading } = useQuery(["products"], () => fetchAllProducts(), {
    staleTime: 1000,
  });

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
    setIsOpenModal(false);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <div className="space-y-10 pb-10 ">
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
              className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
              style={{
                backgroundImage:
                  "url(https://laptopre.vn/upload/banner/banner-1687083850.png)",
              }}
            >
              {/* <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  Hãy trải nghiệm Store
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <h3 className="font-bold text-3xl">Featured Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* products */}
                {data?.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                      <div className="aspect-square rounded-xl bg-gray-100 relative">
                        <img
                          alt="Image"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="aspect-square object-cover rounded-md"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent",
                          }}
                          sizes="100vw"
                          srcSet={
                            item.imagePaths
                              ? item.imagePaths.split(",")[0]
                              : null
                          }
                        />
                        <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5 absolute">
                          <div className="flex gap-x-6 justify-center">
                            <button
                              onClick={openModal}
                              className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                            >
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
                            <Link
                              to={`/detail/${item.slugProduct}`}
                              className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                            >
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
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">
                          {item.nameProduct}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className=" text-gray-500">{item.nameCategory}</p>
                          <p className="text-xs font-semibold uppercase text-green-400">
                            {item.statusProduct}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold text-blue-700">
                          {item.initial_price.toLocaleString()}đ
                        </div>
                        <div
                          className="text-xs"
                          style={{
                            textDecoration: "line-through",
                          }}
                        >
                          {item.price_has_ropped.toLocaleString()}đ
                        </div>
                      </div>
                    </div>
                    <ModalProduct
                      isOpenModal={isOpenModal}
                      title={"Detail Product"}
                      closeModal={closeModal}
                    >
                      <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                          <div className="sm:col-span-4 lg:col-span-5">
                            <div className="flex flex-col-reverse">
                              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                <div
                                  className="grid grid-cols-4 gap-6"
                                  role="tablist"
                                  aria-orientation="horizontal"
                                >
                                  {item.imagePaths &&
                                    item.imagePaths
                                      .split(",")
                                      .map((imagePath, index) => (
                                        <button
                                          key={index}
                                          className={`relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ${
                                            selectedImageIndex === index
                                              ? "border-2 border-black"
                                              : ""
                                          }`}
                                          onClick={() =>
                                            handleImageClick(index)
                                          }
                                        >
                                          <div>
                                            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                                              <img
                                                alt={item.nameProduct}
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
                                {item.imagePaths && (
                                  <div
                                    id={`headlessui-tabs-panel-${selectedImageIndex}`}
                                    role="tabpanel"
                                    tabIndex={0}
                                    data-headlessui-state="selected"
                                    aria-labelledby={`headlessui-tabs-tab-${selectedImageIndex}`}
                                  >
                                    <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                                      <img
                                        alt={item.nameProduct}
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover object-center"
                                        sizes="100vw"
                                        srcSet={
                                          item.imagePaths
                                            ? item.imagePaths.split(",")[
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
                          </div>
                          <div className="sm:col-span-8 lg:col-span-7">
                            <div>
                              <h1 className="text-xl font-bold text-gray-900">
                                {item.nameProduct}
                              </h1>
                              <div className="flex items-center gap-10">
                                <p className=" text-gray-500">
                                  {item.nameCategory}
                                </p>
                                <p className="text-xs font-semibold uppercase text-green-400">
                                  {item.statusProduct}
                                </p>
                              </div>
                              <div className="mt-3 flex items-center gap-4">
                                <div className="text-lg font-semibold text-blue-700">
                                  {item.initial_price.toLocaleString()}đ
                                </div>
                                <div
                                  className="text-base"
                                  style={{
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {item.price_has_ropped.toLocaleString()}đ
                                </div>
                              </div>
                              <hr className="my-4" />
                              <div className="flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-2">
                                  <h3 className="font-semibold"> Color: </h3>

                                  {item.nameColors &&
                                    item.nameColors
                                      .split(",")
                                      .map((color, index) => (
                                        <div
                                          key={index}
                                          className={`h-6 w-6 rounded-full border ${
                                            selectedColor === color
                                              ? "border-2 border-blue-700"
                                              : "border"
                                          }`}
                                          style={{
                                            backgroundColor: color,
                                            cursor: "pointer",
                                          }}
                                          onClick={() =>
                                            handleColorClick(color)
                                          }
                                        />
                                      ))}
                                  {showColorError && (
                                    <span className="text-red-500">
                                      (Vui lòng chọn Color)
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-x-4">
                                  <div
                                    className="text-base"
                                    dangerouslySetInnerHTML={{
                                      __html: item.contentProduct,
                                    }}
                                  />
                                </div>
                              </div>
                              <hr className="my-4" />

                              <div className="mt-6 flex items-center gap-x-3">
                                <button
                                  type="button"
                                  style={{ flex: 1 }}
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                  Mua Ngay
                                </button>
                                <button
                                  type="button"
                                  onClick={() => addProduct(item)}
                                  style={{ flex: 1 }}
                                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                  Thêm Vào Giỏ Hàng
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ModalProduct>
                  </React.Fragment>
                ))}
                {/* end products */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
