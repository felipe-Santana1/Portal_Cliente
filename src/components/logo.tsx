import institutoBarrosLogo from "@/assets/logos/instituto-barros-logo-cinza.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src={institutoBarrosLogo}
        fill
        className="object-contain"
        alt="Portal Cliente - Instituto Barros"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
