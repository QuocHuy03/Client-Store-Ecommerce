import Layout from "../../components/libs/Layout";
import { Button, Form, Input, message, Select, Space } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";
import address from "../../json/addresses.json";
import { orderThunk } from "../../reduxThunk/orderThunk";
import "./style.css";
import { useDispatch } from "react-redux";
import { discount_code, transport_fee } from "../../env";
import { getDiscountThunk } from "../../reduxThunk/discountThunk";

export default function CheckoutPage() {
  const { carts, user } = useContext(AppContext);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [activeItem, setActiveItem] = useState(1);

  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const formRef = useRef(null);
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);
  const [discountCode, setDiscountCode] = useState();

  const payments = [
    {
      id: 1,
      name: "Thanh toán VNPAY-QR",
      desc: "Thanh toán qua Internet Banking, Visa, Master, JCB, VNPAY-QR",
      blade: true,
    },
    {
      id: 2,
      name: "Thanh toán khi nhận hàng",
      desc: "",
    },
  ];

  const handleClickPayment = (itemId) => {
    setActiveItem(itemId);
  };

  useEffect(() => {
    setProvinces(address.provinces);
    setDistricts(address.districts);
    setWards(address.wards);
  }, []);

  const handleSelectProvince = (provinceId) => {
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
  };

  const handleSelectDistrict = (districtId) => {
    setSelectedDistrict(districtId);
  };

  const filteredDistricts = districts.filter(
    (district) => district.province_id === selectedProvince
  );

  const filteredWards = wards.filter(
    (ward) => ward.district_id === selectedDistrict
  );

  useEffect(() => {
    form.setFieldsValue(user);
  }, [form, user]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const storedDiscounts = await dispatch(getDiscountThunk());
        setAppliedDiscounts(storedDiscounts.payload);
      } catch (error) {
        console.error("Error fetching discounts:", error);
      }
    };

    fetchDiscounts();
  }, [dispatch]);

  const totalAmount = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [totalPriceCode, setTotalPriceCode] = useState();

  const handleDiscountCodeBlur = (e) => {
    setDiscountCode(e.target.value);
  };

  const discoutCode = () => {
    if (discountCode === discount_code.code) {
      message.success("Áp Dụng Mã Giảm Giá Thành Công");
      const discountedAmount =
        totalAmount - transport_fee - discount_code.price;
      setTotalPriceCode(discountedAmount);
      formRef.current.resetFields();
      setIsDiscountApplied(true);
      setAppliedDiscounts([...appliedDiscounts, discountCode]);

      localStorage.setItem(
        "appliedDiscounts",
        JSON.stringify([...appliedDiscounts, discountCode])
      );
    } else {
      message.error("Mã Giảm Giá Không Chính Xác !");
      setTotalPriceCode(totalAmount - transport_fee);
      formRef.current.resetFields();
    }
  };

  const handleDiscountCodeDelete = (code) => {
    const updatedDiscounts = appliedDiscounts.filter((item) => item !== code);
    setAppliedDiscounts(updatedDiscounts);

    localStorage.setItem("appliedDiscounts", JSON.stringify(updatedDiscounts));

    setTotalPriceCode(totalAmount - transport_fee);
    formRef.current.resetFields();
  };

  const onFinish = async (values) => {
    const selectedCity = provinces.find(
      (province) => province.id === values.city
    );
    if (selectedCity) {
      values.city = selectedCity.name;
    }

    const selectedDistrict = districts.find(
      (district) => district.id === values.district
    );
    if (selectedDistrict) {
      values.district = selectedDistrict.name;
    }

    const selectedCommune = wards.find((ward) => ward.id === values.commune);
    if (selectedCommune) {
      values.commune = selectedCommune.name;
    }
    const orders = {
      values,
      carts: carts,
      totalPrice: totalPriceCode,
      userID: user.id,
      methodPayment: activeItem,
    };
    console.log(orders);

    const paymentUrl = await dispatch(orderThunk(orders));
    if (paymentUrl) {
      window.location.href = paymentUrl.payload;
    } else {
      // Handle other scenarios or errors
    }
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Checkout</h1>
            <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-2 pt-4">
              <div className="lg:col-span-4 border-r pr-5">
                <ul>
                  <li className="flex items-center">
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <div className="p-2">
                        <h1 className="text-base font-bold text-black">
                          Thông Tin Người Nhận Hàng
                        </h1>
                      </div>
                      <Form.Item
                        name="phone"
                        label="Số Điện Thoại"
                        rules={[
                          {
                            required: true,
                            message: "Phone is required",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          style={{ width: "100%" }}
                          placeholder="Nhập số điện thoại"
                        />
                      </Form.Item>

                      <div className="flex gap-5 justify-between">
                        <Form.Item
                          name="fullname"
                          label="Họ Và Tên"
                          rules={[
                            {
                              required: true,
                              message: "Fullname is required",
                            },
                            {
                              type: "string",
                              min: 6,
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            style={{ width: "100%" }}
                            placeholder="Vui lòng nhập tên người nhận"
                          />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            {
                              required: true,
                              message: "Email is required",
                            },
                            {
                              type: "email",
                              min: 6,
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            style={{ width: "100%" }}
                            placeholder="Nhập email của bạn"
                          />
                        </Form.Item>
                      </div>

                      <div className="py-4">
                        <h1 className="text-base font-bold text-black">
                          Địa Chỉ Nhận Hàng
                        </h1>
                      </div>

                      <Form.Item
                        name="city"
                        label="Tỉnh/Thành phố"
                        rules={[
                          {
                            required: true,
                            message: "City is required",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          value={selectedProvince}
                          onChange={handleSelectProvince}
                          placeholder="Select Province"
                        >
                          {provinces.map((province) => (
                            <Select.Option
                              key={province.id}
                              value={province.id}
                            >
                              {province.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="district"
                        label="Quận/Huyện"
                        rules={[
                          {
                            required: true,
                            message: "District is required",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          value={selectedDistrict}
                          onChange={handleSelectDistrict}
                          placeholder="Select District"
                          disabled={!selectedProvince}
                        >
                          {filteredDistricts.map((district) => (
                            <Select.Option
                              key={district.id}
                              value={district.id}
                            >
                              {district.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="commune"
                        label="Phường/Xã"
                        rules={[
                          {
                            required: true,
                            message: "Commune is required",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          placeholder="Select Ward"
                          disabled={!selectedDistrict}
                        >
                          {filteredWards.map((ward) => (
                            <Select.Option key={ward.id} value={ward.id}>
                              {ward.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="address"
                        label="Địa Chỉ Cụ Thể"
                        rules={[
                          {
                            required: true,
                            message: "Address is required",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          style={{ width: "100%" }}
                          placeholder="Nhập địa chỉ cụ thể của bạn"
                        />
                      </Form.Item>

                      <Form.Item>
                        <Space className="pt-2 float-right">
                          <Button
                            size="large"
                            type="primary"
                            className="bg-blue-500"
                            htmlType="submit"
                          >
                            Thanh Toán
                          </Button>
                        </Space>
                      </Form.Item>
                    </Form>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 border-r pl-2 pr-4">
                <div className="py-2">
                  <h1 className="text-base font-bold text-black">
                    Phương Thức Thanh Toán
                  </h1>
                  <p className="text-sm pt-2">
                    Thông tin thanh toán của bạn sẽ luôn được bảo mật
                  </p>
                </div>

                {payments.map((huyit) => (
                  <div
                    key={huyit.id}
                    className={`item ${
                      activeItem === huyit.id
                        ? "payment_blue"
                        : "payment_unblue"
                    }`}
                    onClick={() => handleClickPayment(huyit.id)}
                  >
                    <div className="subtitle">
                      {huyit.name}
                      {huyit.blade && (
                        <span className="pl-2">
                          <span className="css-lji1jg">
                            <div
                              type="caption"
                              color="white"
                              className="text-white text-xs"
                            >
                              Khuyên Dùng
                            </div>
                          </span>
                        </span>
                      )}
                    </div>

                    <div
                      type="body"
                      color="textSecondary"
                      className="css-ngriz3"
                    >
                      {huyit.desc}
                    </div>
                    <div type="body" className="css-9o8e5m"></div>
                    {activeItem === huyit.id ? (
                      <>
                        <div className="css-18wywdr"></div>
                        <span className="css-mpv07g text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            size={20}
                            className="css-1kpmq"
                            color="#ffffff"
                            height={20}
                            width={20}
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
              <div className="lg:col-span-4">
                <div className="mt-16 rounded-lg bg-gray-50 px-2 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Thông Tin Đơn Hàng
                    </h2>
                    <Link to={"/cart"} className="text-sm text-blue-500">
                      Chỉnh Sửa
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {carts && carts.length > 0 ? (
                      carts.map((item) => (
                        <li
                          className="flex py-2 border-b items-center justify-end"
                          key={item.id}
                        >
                          <div className="relative h-20 w-20 rounded-md overflow-hidden sm:h-15 sm:w-15">
                            <img
                              alt={item.name}
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover object-center"
                              sizes="50vw"
                              srcSet={
                                item.image ? item.image.split(",")[0] : null
                              }
                              style={{
                                position: "absolute",
                                paddingTop: "10px",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="relative flex flex-1 flex-col gap-4 sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6">
                              <div className="flex justify-between">
                                <p className="text-xs font-semibold text-black">
                                  {item.name}
                                </p>
                              </div>
                              <div className="flex text-sm">
                                <p className="text-gray-500">
                                  x {item.quantity}
                                </p>
                                <p className="text-gray-500 ml-2 uppercase border-l border-gray-200 pl-2">
                                  {item.color}
                                </p>
                              </div>
                              <div className="text-sm">
                                {(item.quantity * item.price).toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <p className="text-center">
                        <Empty />
                      </p>
                    )}
                  </div>

                  <div className="py-4 border-b text-center">
                    <Form
                      name="customized_form_controls"
                      className="justify-around"
                      layout="inline"
                      onFinish={discoutCode}
                      ref={formRef}
                    >
                      <Form.Item
                        name="discount_code"
                        style={{ margin: 0 }}
                        rules={[
                          {
                            required: true,
                            message: "* Vui Lòng Nhập Mã Giảm Giá",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          onBlur={handleDiscountCodeBlur}
                          placeholder="Nhập mã giảm giá"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          size="large"
                          className="bg-blue-500"
                          htmlType="submit"
                        >
                          Áp Dụng
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>

                  {appliedDiscounts.map((code) => (
                    <div
                      key={code}
                      className="flex py-4 border-b justify-between items-center"
                    >
                      <div className="mr-2">
                        Mã giảm giá đã được áp dụng: {code}
                      </div>
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => handleDiscountCodeDelete(code)}
                      >
                        Xóa
                      </button>
                    </div>
                  ))}

                  <div className="py-4 border-b text-center">
                    <div className="flex justify-between">
                      <div className="text-base font-light text-slate-400">
                        - Tạm Tính
                      </div>
                      <div className="text-base text-slate-500">
                        {totalAmount.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex justify-between pt-2">
                      <div className="text-base font-light text-slate-400">
                        - Phí Vận Chuyển
                      </div>
                      <div className="text-base text-slate-500">40000</div>
                    </div>
                  </div>

                  <div className="py-4 text-center">
                    <div className="flex justify-between">
                      <div className="text-lg text-slate-400 font-medium">
                        Tổng Cộng
                      </div>
                      <div className="text-lg font-semibold text-blue-400">
                        {`${(totalAmount - transport_fee).toLocaleString(
                          "vi-VN"
                        )}`}
                      </div>
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
}
