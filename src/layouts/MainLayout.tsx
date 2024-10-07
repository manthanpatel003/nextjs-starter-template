"use client";

import { Footer, NavBar } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeLayout } from "./ThemeLayout";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const query = Object.fromEntries(searchParams);

    setLoading(true);

    if (pathname === "/viewbyjsbnno.php" && query?.Name) {
      router.push(`/${query.Name}`);
      setLoading(false);
    } else {
      router.push("/");
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeLayout>
      <NavBar />
      {children}
      <Footer />
    </ThemeLayout>
  );
};
