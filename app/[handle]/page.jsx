// "use client";
import Navbar from "../components/Navbar";
import ThemeSetter from "../context/ThemeSetter";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  // If the handle is already claimed, you cannot create the bittree
  const obj = await collection.findOne({ handle: handle });
  if (!obj) {
    return notFound();
  }
  return (
    <>
      <Navbar />
      <ThemeSetter color="#E9C0E9" />
      <div className="bg-[#E9C0E9] flex h-fit justify-center items-center">
        {obj && (
          <div className="flex flex-col justify-center items-center">
            <div className="photo mt-10 w-40 h-40 rounded-full content-center overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={obj.pic}
                alt=""
              />
            </div>
            <span className="font-bold text-xl">@{obj.handle}</span>
            <span className="desc w-full px-10 text-center mt-5">{obj.desc}</span>
            <div className="links">
              {obj.links.map((obj, index) => {
                return (
                  <Link key={index} target="_blank" href={obj.link}>
                    <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                      {obj.linktext}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
