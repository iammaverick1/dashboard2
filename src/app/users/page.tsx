"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          {" "}
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

export const data: Payment[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrder: "2023-01-01",
    method: "Credit card",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },

  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    name: "Alice Smith",
    email: "jalice@example.com",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  // ...
];
