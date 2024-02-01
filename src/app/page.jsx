"use client";
import HeroSection from "@/components/hero";
import { Proker } from "@/components/proker";
import { Anggota } from "@/components/anggota";
import { Artikel } from "@/components/artikel";
import { NavBar } from "@/components/navbar";
export default function Home() {
  return (
    <main className="">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Proker></Proker>
      <Anggota></Anggota>
      <Artikel></Artikel>
    </main>
  );
}
