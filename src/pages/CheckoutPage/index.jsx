import Layout from "../../components/libs/Layout";
import { Button, Form, Input, message, Space } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { carts } = useContext(AppContext);
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">
              Thông Tin Thanh Toán
            </h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                <ul>
                  <li className="flex py-6 border-b items-center">
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Form.Item
                        name="fullname"
                        label="Họ Và Tên"
                        rules={[
                          {
                            required: true,
                          },
                          {
                            type: "string",
                            min: 6,
                          },
                        ]}
                      >
                        <Input size="large" placeholder="Họ Và Tên" />
                      </Form.Item>
                      <Form.Item>
                        <Space>
                          <Button type="primary" className="bg-blue-500"  htmlType="submit">
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
