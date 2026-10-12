import Features from "@/components/home/Features";
import HowItWork from "@/components/home/HowItWork";
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

        </div>
      </main>
    </div>
  );
}
