import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Suspense } from "react";
import { OverviewMenuGroup } from "../(home)/_components/overview-cards/index-menu";
import { OverviewCardsSkeleton } from "../(home)/_components/overview-cards/skeleton";
import MenuMobile from "@/components/MenuMobile";
import { getTableDataServicos } from "@/components/Tables/fetch";
import { getTableDataSubServicos } from "@/components/Tables/fetch";
import ModalServicos from "@/components/ui-elements/modal-servicos";
import ModalSubServicos from "@/components/ui-elements/modal-subservicos";
import { TableFilterServicos } from "@/components/Tables/servicos";
import { TableFilterSubServicos } from "@/components/Tables/subservicos";

export default async function Servicos() {
  const data = await getTableDataServicos();
  const datasub = await getTableDataSubServicos();

  return (
    <div>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewMenuGroup />
      </Suspense>

      <div className="my-6 flex w-full items-start justify-between gap-6 xl:flex-col">
        <Breadcrumb pageName="Serviços" />

        <ModalServicos />
      </div>

      <div className="space-y-10 pb-24">
        <TableFilterServicos data={data} />
      </div>

      <div className="my-6 flex w-full items-start justify-between gap-6 xl:flex-col">
        <Breadcrumb pageName="Sub-serviços" />

        <ModalSubServicos />
      </div>

      <div className="space-y-10 pb-24">
        <TableFilterSubServicos data={datasub} />
      </div>

      <MenuMobile />
    </div>
  );
}
