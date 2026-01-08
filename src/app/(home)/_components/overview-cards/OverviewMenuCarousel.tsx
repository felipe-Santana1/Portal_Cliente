"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OverviewCard2 } from "./card2";
import {
  Calendar,
  HomeIcon,
  User,
} from "@/components/Layouts/sidebar/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function OverviewMenuCarousel() {
  const pathname = usePathname();

  const menuItems = [
    {
      key: "perfil",
      href: "/pages/settings",
      label: "Perfil",
      data: "Perfil",
      Icon: User,
    },
    {
      key: "agenda",
      href: "/calendar",
      label: "Agenda",
      data: "Agenda",
      Icon: Calendar,
    },
    {
      key: "historico",
      href: "/",
      label: "Histórico",
      data: "Histórico",
      Icon: HomeIcon,
    },
  ];

  return (
    <div className="mb-4 block xl:hidden">
      <Swiper spaceBetween={16} slidesPerView={3.5} grabCursor={true}>
        {menuItems.map(({ key, href, label, data, Icon }) => {
          const isActive = pathname.startsWith(href);

          return (
            <SwiperSlide key={key}>
              <Link href={href}>
                <OverviewCard2
                  label={label}
                  data={data}
                  Icon={Icon}
                  isActive={isActive}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
