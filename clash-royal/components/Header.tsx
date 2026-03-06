"use client";
 
import Link from "next/link";
import style from "@/components/header.module.css";
export default function Header() {
  return (
    <nav className={style.nav}  >
      <Link href="/clash" className={style.bouton}>Acceuil</Link>
      <Link href="/random" className={style.bouton}>random</Link>
      <Link href="/search" className={style.bouton}>rechercher</Link>
    </nav>
  );
}