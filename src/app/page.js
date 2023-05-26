'use client';

import { Footer, Navbar } from "@/components"
import { Home, About, Product, Galery, Contact } from "@/sections"
import { ScrollUpButton } from "@/components";
import { useEffect, useState } from "react";


export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(false);
    };

    handleLoading();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="bg-black h-[100vh]">
            <div className="loader absolute mx-auto top-[50%]">
              <span className="loader-text">loading</span>
              <span className="load"></span>
            </div>
          </div>
      ) : (
        <>
          <div className="overflow-hidden">
            <Navbar />
            <ScrollUpButton />
            <Home />
            <About />
            <Product />
            <Galery />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}
