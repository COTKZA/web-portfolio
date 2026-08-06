import { type ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#161616]">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
