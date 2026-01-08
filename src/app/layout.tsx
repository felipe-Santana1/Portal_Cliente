import "@/css/satoshi.css";
import "@/css/style.css";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { LayoutContent } from "./layout-content";

export const metadata: Metadata = {
  title: {
    template: "%s | Portal Cliente - Instituto Barros",
    default: "Portal Cliente - Instituto Barros",
  },
  description:
    "Portal do Cliente do Instituto Barros - Acesse suas informa\u00e7\u00f5es, agendamentos e hist\u00f3rico.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#18194d" showSpinner={false} />
          <LayoutContent>{children}</LayoutContent>
        </Providers>
      </body>
    </html>
  );
}
