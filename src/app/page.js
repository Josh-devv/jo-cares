'use client'
import Navbar from '@/components/Navbar'
import Homep from '@/components/Home'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-black">
      <Navbar />
      <Homep />
    </div>
  )
}
