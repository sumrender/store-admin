interface OrderItem {
  product: string;
  price: number;
  quantity: number;
  name: string;
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
}