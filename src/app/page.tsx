import React from "react";
import { Button } from "./components/Button";
import { PDPHeroDesktop } from "@/components/PDPHero/PDPHeroDesktop";
import { PDPHeroMobile } from "@/components/PDPHero/PDPHeroMobile/PDPHeroMobile";
import { PDPHeroText } from "@/components/PDPHero/PDPHeroText/PDPHeroText";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-between p-4 bg-white dark:bg-black sm:items-start">
        {/* <PDPHeroMobile /> */}
        <PDPHeroDesktop />
      </main>
    </div>
  );
}
