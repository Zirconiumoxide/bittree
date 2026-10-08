"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ThemeSetter from "./context/ThemeSetter";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();
  const PREFIX = "bitr.ee/";

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  
  return (
    <main>
      <Navbar />
      <ThemeSetter color="#d2e822" /> 
      <section className="min-h-[100vh] grid grid-cols-2 bg-[#d2e822]">
        <div className="flex flex-col justify-start align-center ml-10 gap-5 px-10 py-[15vh]  text-[#254F1A]">
          <p className="text-8xl font-black tracking-tighter scale-y-[0.95]">
            A link in bio built for you.
          </p>
          <p className="text-xl mt-5 font-medium tracking-tight">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-3 mt-5">
            <input
              className="bg-white rounded-lg py-5 pl-5 pr-10 text-[#757575] font-bold focus:outline-2 focus:outline-offset-2 focus:outline-white text-lg"
              value={`${PREFIX}${text}`}

              type="text"
              placeholder="bitr.ee/"
              onChange={(e) => {
                          const value = e.target.value;

                          if (value.startsWith(PREFIX)) {
                            setText(value.slice(PREFIX.length));
                          } else {
                            setText("");
                          }
                        }}
            />
            
            <button
              onClick={() => createTree()}
              className=" inline-flex 
                          items-center
                          justify-center
                          rounded-full
                          bg-[#254F1A]
                          px-20
                          py-3
                          text-base
                          font-medium
                          text-white
                          transition
                          hover:-translate-y-px
                          hover:brightness-[1.02]
                          active:scale-[0.97]
                          cursor-pointer"
            >
              Get Started for free
            </button>
          </div>
        </div>
        <div className=" mr-10">
          <img src="/image.png" alt="" />
        </div>
      </section>
      <section className="min-h-[100vh] bg-[#2665D6]"></section>
    </main>
  );
}
