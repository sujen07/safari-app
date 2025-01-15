'use client';

import { useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export function VideoHeader() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video for a more relaxed feel
    }
  }, [])

  return (
    <section style={{ height: '800px' }} className="relative overflow-hidden">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
    >
      <source src="/lib/Tour-Video-Opt.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Safari Estate Vineyard</h1>
        <p className="text-xl md:text-2xl mb-8">Experience the beauty of wine country</p>
        <Button className="bg-white text-stone-800 hover:bg-stone-200">Book Your Stay</Button>
      </div>
    </section>
  )
}

