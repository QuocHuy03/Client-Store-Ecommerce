import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getOrderByCode } from "../../utils/api/orderApi";

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

  return <div>DetailOrderPage</div>;
}
