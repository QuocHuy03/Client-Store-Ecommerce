import { useContext } from "react";
import Layout from "../../components/libs/Layout";
import { AppContext } from "../../context/AppContextProvider";
import { useDispatch } from "react-redux";
import { Empty, message } from "antd";
import {
  decreaseQuantity,
  increasingQuantity,
  removeFromCart,
} from "../../stores/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { carts } = useContext(AppContext);
  const totalAmount = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncreasingQuantity = (item) => {
    dispatch(increasingQuantity(item));
    message.success("+ 1 Số Lượng Success");
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
    message.info("- 1 Số Lượng Success");
  };

  const handleDeleteItem = (item) => {
    dispatch(removeFromCart(item));
    message.error("Xóa Sản Phẩm Thành Công");
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                <ul>
                  {carts && carts.length > 0 ? (
                    carts.map((item) => (
                      <li
                        className="flex py-6 border-b items-center"
                        key={item.id}
                      >
                        <div className="relative h-20 w-20 rounded-md overflow-hidden sm:h-40 sm:w-40">
                          <img
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="object-cover object-center"
                            sizes="100vw"
                            srcSet={
                              item.image ? item.image.split(",")[0] : null
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
                        <div className="relative ml-4 flex flex-1 flex-col gap-4 sm:ml-6">
                          <div className="absolute z-10 right-0 top-0">
                            <button
                              onClick={() => handleDeleteItem(item)}
                              className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
                            >
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
                              <p className="text-base font-semibold text-black">
                                {item.name}
                              </p>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-gray-500 uppercase">
                                {item.color}
                              </p>
                              <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                                Extra Small
                              </p>
                            </div>
                            <div className="">
                              {(item.quantity * item.price).toLocaleString()}đ
                            </div>
                          </div>
                          <div class="flex items-center border-gray-100">
                            <button
                              onClick={() => handleDecreaseQuantity(item)}
                              class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {" "}
                              -{" "}
                            </button>
                            <input
                              class="h-8 w-8 border bg-white text-center text-xs outline-none"
                              value={item.quantity}
                              readOnly
                              min="1"
                            />
                            <button
                              onClick={() => handleIncreasingQuantity(item)}
                              class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-center">
                      <Empty />
                    </p>
                  )}
                </ul>
              </div>
              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                      Order Total
                    </div>
                    <div className="font-semibold">
                      {totalAmount.toLocaleString()}đ
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-black border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition w-full mt-6"
                >
                  Thanh Toán
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
