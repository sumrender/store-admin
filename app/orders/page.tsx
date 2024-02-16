import { format } from "date-fns";
import { formatter } from "@/lib/utils";

import { OrderColumn } from "./components/columns";
import { OrderClient } from "./components/client";
import { getAllOrders } from "@/actions/order-actions";

const OrdersPage = async () => {
  const orders = await getAllOrders();

  const formattedOrders: OrderColumn[] = orders.map((item) => ({
    id: item._id,
    // phone: item.phone,
    userEmail: item.user.email,
    orderStatus: item.orderStatus,
    address: item.user.address,
    products: item.orderItems
      .map((orderItem) => orderItem.name)
      .join(", "),
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        const curr = item.price*item.quantity;
        return total + curr;
      }, 0)
    ),
    isPaid: item.isPaid,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
