import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getOrderByCode } from "../../utils/api/orderApi";
import { Empty, Table } from "antd";
import Layout from "../../components/libs/Layout";

export default function DetailOrderPage() {
  const { code } = useParams();
  const { data, isLoading } = useQuery(
    ["detail-order", code],
    () => getOrderByCode(code),
    {
      staleTime: 500,
      enabled: !!code,
    }
  );
  console.log(data)

  // table

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "IMAGE",
      dataIndex: "image",
      render: (imageURL) => (
        <img src={imageURL} alt="Product" style={{ width: "100px" }} />
      ),
    },
    {
      title: "COLOR",
      dataIndex: "color",
      filters: [
        {
          text: "Black",
          value: "black",
        },
        {
          text: "Red",
          value: "red",
        },
      ],
      onFilter: (value, record) => record.color.indexOf(value) === 0,
      render: (color) => (
        <span
          style={{
            color: color === "black" ? "black" : "red",
            textTransform: "uppercase",
          }}
        >
          {color}
        </span>
      ),
    },
    {
      title: "QUANTITY",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "PRICE",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => <span>{price.toLocaleString()}</span>,
    },
  ];

  const getFirstImageURL = (images) => {
    const imageURLs = images.split(",");
    return imageURLs.length > 0 ? imageURLs[0] : "";
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">
              Detail Order <span className="text-blue-500">[ {code} ]</span>
            </h1>
            <div className="mt-8 lg:grid lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-12">
                <ul>
                  {data && data.length > 0 ? (
                    <Table
                      columns={columns}
                      dataSource={data.flatMap((item) =>
                        JSON.parse(item.productOrder).map((order) => ({
                          ...order,
                          key: order.id,
                          image: getFirstImageURL(order.image),
                        }))
                      )}
                      rowKey="id"
                      pagination={{
                        position: "bottom",
                        pageSize: 5,
                      }}
                    />
                  ) : (
                    <span className="text-center">
                      <Empty />
                    </span>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
