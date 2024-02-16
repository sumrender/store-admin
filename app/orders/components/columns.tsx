"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-actions";

export type OrderColumn = {
  id: string;
  userEmail: string;
  // phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
  orderStatus: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "userEmail",
    header: "User",
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
