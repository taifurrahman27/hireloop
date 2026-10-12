import Features from "@/components/home/Features";
import HowItWork from "@/components/home/HowItWork";
import NeverDo from "@/components/home/NeverDo";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div>

          <StatsSection />
          <Features/>
          <HowItWork/>
          <NeverDo/>
          

        </div>
      </main>
    </div>
  );
}
