"use client";

import { getOrderById } from "@/actions/order-actions";
import { useParams } from "next/navigation";
import { OrderForm } from "./components/order-form";

export default async function Test() {
  const params = useParams();
  const order = await getOrderById(params.orderId);
  return <>
    <OrderForm defaultValues={order} />
  </>;
}
