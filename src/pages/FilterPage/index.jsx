import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/libs/Layout";
import { fetchAllCategories } from "../../utils/api/categoriesApi";
import { fetchAllProductPage } from "../../utils/api/productsApi";
import { useEffect, useState } from "react";
import { Empty, Pagination } from "antd";
import "./style.css";
import { Link } from "react-router-dom";

const FilterPage = () => {
  const [page, setPage] = useState(1);

  const { data: dataCategories, isLoading: loadingCategories } = useQuery(
    ["categories"],
    () => fetchAllCategories(),
    {
      staleTime: 1000,
    }
  );

  const fetchProductPage = async (page) => {
    const data = await fetchAllProductPage(page);
    return data;
  };

  const {
    data: dataProducts,
    isLoading: loadingProducts,
    refetch,
  } = useQuery(["products", page], () => fetchProductPage(page), {
    staleTime: 1000,
  });

  const handlePageChange = async (page) => {
    setPage(page);
    await refetch();
  };

  const dataColors = [
    {
      id: 1,
      name: "black",
    },
    {
      id: 2,
      name: "red",
    },
    {
      id: 3,
      name: "yellow",
    },
    {
      id: 4,
      name: "white",
    },
  ];

  const dataPrice = [
    {
      id: 1,
      price: "0-5000000",
      text: "Dưới 5 Triệu",
    },
    {
      id: 2,
      price: "5000000-7000000",
      text: "Từ 5 - 7 Triệu",
    },
    {
      id: 3,
      price: "7000000-10000000",
      text: "Từ 7 - 10 Triệu",
    },
    {
      id: 4,
      price: "10000000-15000000",
      text: "Từ 10 - 15 Triệu",
    },
    {
      id: 5,
      price: "15000000-20000000",
      text: "Từ 15 - 20 Triệu",
    },
    {
      id: 6,
      price: "20000000-25000000",
      text: "Từ 20 - 25 Triệu",
    },
    {
      id: 7,
      price: "25000000-30000000",
      text: "Từ 25 - 30 Triệu",
    },
    {
      id: 8,
      price: "30000000-125000000",
      text: "Trên 30 Triệu",
    },
  ];

  const initialFilters = {
    categories: "",
    colors: "",
    prices: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryCategories = params.get("categories");
    const queryColors = params.get("colors");
    const queryPrices = params.get("prices");

    setFilters({
      categories: queryCategories || "",
      colors: queryColors || "",
      prices: queryPrices || "",
    });
  }, []);

  useEffect(() => {
    const hasFilters = Object.values(filters).some((value) =>
      Array.isArray(value) ? value.length > 0 : value !== ""
    );

    const query = Object.entries(filters)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            return `${key}=${encodeURIComponent(value[0])}`;
          }
          return null;
        } else if (value !== "") {
          return `${key}=${encodeURIComponent(value)}`;
        }
        return null;
      })
      .filter((item) => item !== null)
      .join("&");

    const currentPath = window.location.pathname;
    const newUrl = hasFilters ? `${currentPath}?${query}` : currentPath;

    window.history.replaceState({}, "", newUrl);
  }, [filters]);

  const handleFilterChange = (group, value) => {
    if (value === filters[group]) {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[group];
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [group]: value,
      }));
    }
  };

  let filteredData = dataProducts?.data;
  if (dataProducts?.data && dataProducts?.data.length > 0) {
    filteredData = dataProducts?.data.filter((huydev) => {
      if (
        filters.categories &&
        filters.categories !== huydev?.nameCategory.toLowerCase()
      ) {
        return false;
      }
      if (filters.colors) {
        const selectedColors = filters.colors
          .split(",")
          .map((color) => color.trim());
        const productColors = huydev.nameColors
          .split(",")
          .map((color) => color.trim());

        const hasMatchingColor = selectedColors.some((selectedColor) =>
          productColors.includes(selectedColor)
        );

        if (!hasMatchingColor) {
          return false;
        }
      }
      if (filters.prices) {
        const [minSalary, maxSalary] = filters.prices.split("-");
        const priceProduct = parseInt(huydev.price_has_ropped);
        if (minSalary && priceProduct < parseInt(minSalary)) {
          return false;
        }
        if (maxSalary && priceProduct > parseInt(maxSalary)) {
          return false;
        }
      }
      return true;
    });
  }

  const sort = [
    {
      id: 1,
      name: "Khuyến mãi tốt nhất",
      sort: "SORT_BY_DISCOUNT_PERCENT",
      order: "DESC",
    },
    {
      id: 2,
      name: "Giá tăng dần",
      sort: "SORT_BY_PRICE",
      order: "ASC",
    },
    {
      id: 3,
      name: "Giá giảm dần",
      sort: "SORT_BY_PRICE",
      order: "DESC",
    },
    {
      id: 4,
      name: "Sản phẩm mới nhất",
      sort: "SORT_BY_PUBLISH_AT",
      order: "DESC",
    },
  ];

  const [clickedItemId, setClickedItemId] = useState(null);

  const handleSortItem = (item) => {
    if (item.sort === "SORT_BY_DISCOUNT_PERCENT" && item.order === "DESC") {
      // dataProducts?.data.sort((a, b) => {
      //   console.log(a, b);
      //   return b.priceProduct - a.priceProduct;
      // });
      console.log("Khuyến Mãi Tốt Nhất");
    }
    if (item.sort === "SORT_BY_PRICE" && item.order === "ASC") {
      dataProducts?.data.sort((a, b) => {
        return a.price_has_ropped - b.price_has_ropped;
      });
    }

    if (item.sort === "SORT_BY_PRICE" && item.order === "DESC") {
      dataProducts?.data.sort((a, b) => {
        return b.price_has_ropped - a.price_has_ropped;
      });
    }

    if (item.sort === "SORT_BY_PUBLISH_AT" && item.order === "DESC") {
      dataProducts?.data.sort((a, b) => {
        const dateA = new Date(a.createAt).getTime();
        const dateB = new Date(b.createAt).getTime();
        return dateB - dateA;
      });
    }
    setClickedItemId(item.id);
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 px-4 sm:px-6 lg:px-8 pb-24">
            <div className="flex gap-x-8 flex-col sm:flex-row">
              <div className="w-full sm:w-1/6">
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
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">Bộ Lọc</h3>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(filters).some(([key, value]) => value) ? (
                        Object.entries(filters).map(([key, value]) =>
                          value ? (
                            <div className="css-re27eh" key={key}>
                              <span
                                className="css-cbubas"
                                style={{ cursor: "pointer" }}
                              >
                                <div
                                  type="caption"
                                  color="textPrimary"
                                  className="css-12zpvgl capitalize"
                                >
                                  {`${value}`}
                                </div>
                                <svg
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  size={16}
                                  className="css-9w5ue6"
                                  height={16}
                                  width={16}
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleFilterChange(key, "")}
                                >
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#DFDFE6"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.90045 8.64594C9.60755 8.35305 9.13268 8.35305 8.83979 8.64594C8.54689 8.93883 8.54689 9.41371 8.83979 9.7066L11.0765 11.9433L8.83997 14.1798C8.54707 14.4727 8.54707 14.9476 8.83997 15.2405C9.13286 15.5334 9.60773 15.5334 9.90063 15.2405L12.1371 13.004L14.3737 15.2405C14.6666 15.5334 15.1414 15.5334 15.4343 15.2405C15.7272 14.9476 15.7272 14.4727 15.4343 14.1798L13.1978 11.9433L15.4345 9.7066C15.7274 9.41371 15.7274 8.93883 15.4345 8.64594C15.1416 8.35305 14.6667 8.35305 14.3738 8.64594L12.1371 10.8826L9.90045 8.64594Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </div>
                          ) : null
                        )
                      ) : (
                        <Empty />
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">Thương Hiệu</h3>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-3">
                      {dataCategories?.map((item, index) => (
                        <div className="flex items-center" key={index}>
                          <input
                            onChange={() =>
                              handleFilterChange(
                                "categories",
                                item.slugCategory
                              )
                            }
                            id={`checker_category${item.id}`}
                            checked={filters.categories === item.slugCategory}
                            type="radio"
                            name="category"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor={`checker_category${item.id}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {item.nameCategory}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">Màu Sắc</h3>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-3">
                      {dataColors?.map((item, index) => (
                        <div className="flex items-center" key={index}>
                          <input
                            id={`checker_color${item.id}`}
                            onChange={() =>
                              handleFilterChange("colors", item.name)
                            }
                            checked={filters.colors === item.name}
                            type="radio"
                            name="color"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor={`checker_color${item.id}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">Mức Giá</h3>
                    <hr className="my-4" />
                    <div className="flex flex-wrap gap-3">
                      {dataPrice?.map((item, index) => (
                        <div className="flex items-center" key={index}>
                          <input
                            onChange={() =>
                              handleFilterChange("prices", item.price)
                            }
                            id={`checker_price${item.id}`}
                            checked={filters.prices === item.price}
                            type="radio"
                            name="price"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor={`checker_price${item.id}`}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {item.text}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-3/4">
                <div className="teko-row teko-row-start teko-row-baseline css-1uz4n2s">
                  <h1 className="text-xl font-medium capitalize mr-1">
                    Laptop - Máy tính xách tay
                  </h1>
                  <div
                    type="title"
                    color="textSecondary"
                    className="css-7gu8cj"
                  >
                    ({filteredData ? filteredData?.length : 0} sản phẩm)
                  </div>
                </div>

                <div className="css-129dmtm pb-5">
                  <div className="css-d1ctgk flex items-center flex-wrap gap-2 capitalize">
                    <div type="subtitle" className="css-ghn8qk">
                      Sắp Xếp Theo
                    </div>
                    {sort?.map((item) => (
                      <div
                        className={`${
                          clickedItemId === item.id
                            ? "css-1ss9yju"
                            : "css-1w3mv8m"
                        }`}
                        key={item.id}
                        onClick={() => handleSortItem(item)}
                      >
                        <div type="body" className="css-2knkn8">
                          {item.name}
                        </div>
                        {clickedItemId === item.id ? (
                          <>
                            <div className="css-u3jq8e" />
                            <span className="css-mpv07g">
                              <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                size={14}
                                className="css-1kpmq"
                                color="#ffffff"
                                height={14}
                                width={14}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12.4545L9.375 17L19 7"
                                  stroke="#82869E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:grid">
                  <div className="mt-6 lg:col-span-4">
                    {filteredData?.length === 0 ? (
                      <div className="c1i59 c0wh8 c6sts cljpo text-center px-5">
                        <h3 className="text-red-700 text-center">
                          <Empty description={false} />
                        </h3>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                        {filteredData?.map((item) => (
                          <div
                            className="bg-white group cursor-pointer border p-3 space-y-4"
                            key={item.id}
                          >
                            <div className="aspect-square relative">
                              <img
                                alt="Image"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="aspect-square rounded-md"
                                sizes="100vw"
                                srcSet={
                                  item.imagePaths
                                    ? item.imagePaths.split(",")[0]
                                    : null
                                }
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  color: "transparent",
                                }}
                              />
                              <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5 absolute">
                                <div className="flex gap-x-6 justify-center">
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
                              <p className="font-semibold text-sm">
                                {item.nameProduct}
                              </p>
                              <div className="flex items-center justify-between">
                                <p className=" text-gray-500 text-xs">
                                  {item.nameCategory}
                                </p>
                                <p className="text-xs font-semibold uppercase text-green-400">
                                  {item.statusProduct}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-semibold text-blue-700">
                                {item.price_has_ropped.toLocaleString()}đ
                              </div>
                              <div
                                className="text-xs"
                                style={{
                                  textDecoration: "line-through",
                                }}
                              >
                                {item.initial_price.toLocaleString()}đ
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-5 flex justify-center">
                  <Pagination
                    current={dataProducts?.currentPage}
                    total={dataProducts?.totalItems}
                    pageSize={dataProducts?.itemsPerPage || 0}
                    onChange={handlePageChange}
                  />
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
