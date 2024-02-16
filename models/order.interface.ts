export interface OrderItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderUser {
  email: string;
  address: string;
  user: string;
}

export interface Order {
  _id: string;
  createdAt: string;
  updatedAt: string;
  user: OrderUser;
  paymentMode: string;
  isPaid: boolean;
  orderStatus: string;
  orderItems: OrderItem[];
  finalPrice: number;
}

export enum OrderStatusEnum {
  PENDING = "pending",
  DELIVERED = "delivered",
  RETURNED = "returned",
  CANCELED = "canceled",
}

export const orderStatusArray = [
  OrderStatusEnum.PENDING,
  OrderStatusEnum.DELIVERED,
  OrderStatusEnum.RETURNED,
  OrderStatusEnum.CANCELED,
];
