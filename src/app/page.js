"use client"
import Header from "@/components/Header"  
import Welcome from "@/components/Welcome"
import Counter from "@/components/Counter"
import { useState } from "react"

export default function Home() {
  return (
    <main > 
      <Header />
      <br />
      <Welcome />
      <br />
      <Counter />
    </main>
  )
}
