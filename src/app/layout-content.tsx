"use client";

import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

export function LayoutContent({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  // Se é página de autenticação, não mostrar sidebar e header
  if (isAuthPage) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0e1a] dark:to-[#020d1a]">
        {children}
      </div>
    );
  }

  // Layout normal com sidebar e header
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
        <Header />

        <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
