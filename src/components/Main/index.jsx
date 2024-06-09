"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Main.module.scss";
import music from "../../../public/images/music.png";
import muz from "../../assets/muzik.mp3";

export default function Main() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(muz);
  }, []);

  function play() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <>
      <div className="flex bg-cover bg-center bg-no-repeat bg-[url('/images/wedding-2.jpeg')] h-screen w-full flex-col items-center relative">
        <div className="flex justify-center">
          <button
            className={`absolute bottom-[200px] right-0 h-[180px] w-[180px] ${
              isPlaying ? styles["animate-spin"] : ""
            }`}
            onClick={play}
          >
            <Image src={music} alt="musik" width={180} height={180} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-custom text-center text-black absolute bottom-0">
          <div className="w-screen flex flex-col gap-4 items-center py-5 justify-center">
            <h1 className="text-4xl font">Ғ & Ш</h1>
            <h2 className="text-3xl font">Ғалымжан Шынар</h2>
            <div className="flex flex-row items-center gap-10">
              <div className="border border-black rotate-90 h-12"></div>
              <h2 className="text-2xl m-0 font">02. 08. 2024</h2>
              <div className="border border-black rotate-90 h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
