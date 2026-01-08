import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Suspense } from "react";
import { OverviewMenuGroup } from "../(home)/_components/overview-cards/index-menu";
import { OverviewCardsSkeleton } from "../(home)/_components/overview-cards/skeleton";
import MenuMobile from "@/components/MenuMobile";
import { getTableDataCargo } from "@/components/Tables/fetch";
import ModalCargo from "@/components/ui-elements/modal-cargo";
import { TableFilterCargo } from "@/components/Tables/cargo";

export default async function Cargo() {
  const data = await getTableDataCargo();

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <div className="my-6 flex w-full items-start justify-between gap-6 xl:flex-col">
        <Breadcrumb pageName="Cargo" />

        <ModalCargo />
      </div>

      <div className="space-y-10 pb-24">
        <TableFilterCargo data={data} />
      </div>

      <MenuMobile />
    </>
  );
}
