import Features from "./ui/features";
import Header from "./ui/header";
import Hero from "./ui/hero";

export default function Home() {
  return (
    <div className="w-[90%] 2xl:w-[70%] m-auto">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
