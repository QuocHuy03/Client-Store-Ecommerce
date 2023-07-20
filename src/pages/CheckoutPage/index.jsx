import Layout from "../../components/libs/Layout";
import { Button, Form, Input, message, Select, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CheckoutPage() {
  const { carts } = useContext(AppContext);
  const [form] = Form.useForm();

  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  useEffect(() => {
    axios
      .get("https://lofi-style.mysapo.net/checkout/addresses.json")
      .then((response) => {
        setProvinces(response.data.provinces);
        setDistricts(response.data.districts);
        setWards(response.data.wards);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSelectProvince = (provinceId) => {
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
  };

  const handleSelectDistrict = (districtId) => {
    setSelectedDistrict(districtId);
  };

  // Filter districts based on the selected province
  const filteredDistricts = districts.filter(
    (district) => district.province_id === selectedProvince
  );

  // Filter wards based on the selected district
  const filteredWards = wards.filter(
    (ward) => ward.district_id === selectedDistrict
  );

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Checkout</h1>
            <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7 border-r">
                <ul>
                  <li className="flex py-6 border-b items-center">
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <div className="py-4">
                        <h1 className="text-base font-bold text-black">
                          Thông Tin Người Nhận Hàng
                        </h1>
                      </div>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                            message: "Email is required",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          style={{ width: "100%" }}
                          placeholder="Họ Và Tên"
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
                            <Option key={province.id} value={province.id}>
                              {province.name}
                            </Option>
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
                            <Option key={district.id} value={district.id}>
                              {district.name}
                            </Option>
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
                            <Option key={ward.id} value={ward.id}>
                              {ward.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="address"
                        label="Địa chỉ cụ thể"
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
                        <Space>
                          <Button
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

              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Thông Tin Đơn Hàng
                  </h2>
                  <Link to={"/cart"} className="text-sm text-blue-500">
                    Chỉnh sửa
                  </Link>
                </div>
                <div className="space-y-4">
                  {carts && carts.length > 0 ? (
                    carts.map((item) => (
                      <li
                        className="flex py-2 border-b items-center"
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
                              <p className="text-gray-500 uppercase">
                                {item.color}
                              </p>
                              <p className="text-gray-500 ml-2 border-l border-gray-200 pl-2">
                                Small
                              </p>
                            </div>
                            <div className="text-sm">
                              {(item.quantity * item.price).toLocaleString()}đ
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
