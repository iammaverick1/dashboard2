"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";
type Props = {};

import {
  UsersRound,
  LayoutDashboard,
  BarChart,
  ClipboardPenLine,
  ChevronRight,
  BellDot,
  ReceiptIndianRupee,
  Settings,
  ChevronLeft,
} from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";
import { useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowWidth(window.innerWidth);
  //   });
  // });

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "stats",
            href: "/stats",
            icon: BarChart,
            variant: "ghost",
          },
          {
            title: "onboard",
            href: "/onboard",
            icon: ClipboardPenLine,
            variant: "ghost",
          },
          {
            title: "Notification",
            href: "/Notification",
            icon: BellDot,
            variant: "ghost",
          },
          {
            title: "AuditLog",
            href: "/AuditLog",
            icon: ReceiptIndianRupee,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/Settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
