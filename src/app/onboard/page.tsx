"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export default function OnboardPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Onboard" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
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
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-01",
    method: "Credit card",
  },
  {
    order: "ORD002",
    status: "Pending",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    order: "ORD003",
    status: "Processing",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    order: "ORD004",
    status: "Processing",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    order: "ORD006",
    status: "Processing",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },

  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    order: "ORD008",
    status: "Processing",
    lastOrder: "2023-03-20",
    method: "Credit card",
  },
  {
    order: "ORD009",
    status: "Processing",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    order: "ORD010",
    status: "Pending",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  {
    order: "ORD011",
    status: "Processing",
    lastOrder: "2023-02-05",
    method: "PayPal",
  },
  // ...
];
