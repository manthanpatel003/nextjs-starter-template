"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ViewByJSBN: React.FC = () => {
  const router = usePathname();

  return <div>{router}</div>;
};

export default ViewByJSBN;
