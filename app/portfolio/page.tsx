"use client"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Masonry from "react-masonry-css"


type MediaItem =
  | { id: number; type: 'image'; src: string; alt: string }
  | { id: number; type: 'video'; iframeSrc: string }

function normalizeInstagramEmbedUrl(url: string) {
  if (url.includes('/embed')) return url

  try {
    const parsed = new URL(url)
    const path = parsed.pathname.replace(/\/+$|\/embed$/g, '')

    if (path.startsWith('/reel/') || path.startsWith('/p/')) {
      return `https://www.instagram.com${path}/embed`
    }
  } catch {
    // If URL parsing fails, return the original value.
  }

  return url
}

const portfolioMedia: MediaItem[] = [
  { id: 1, type: 'video', iframeSrc: 'https://www.instagram.com/reel/DScdTshiAM2/embed'},
  { id: 2, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772111507/DSC05804.jpg", alt: "Sitting watching Northern Lights" },
  { id: 3, type: 'video', iframeSrc: 'https://www.instagram.com/reel/DQluGujjB8q/embed' },
  { id: 4, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772113376/DSC05810-1.jpg", alt: "Standing watching Northern Lights" },
  { id: 5, type: 'video', iframeSrc: 'https://www.instagram.com/reel/DQ4rZXBDCXY/embed' },
  { id: 6, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772197588/DSC07339-2.jpg", alt: "Ares watching left" },
  { id: 7, type: 'video', iframeSrc: 'https://www.instagram.com/p/DWMbkdXDKFY/embed' },
  { id: 8, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1758009541/2EC074F0-8BE0-4129-B437-A6059AEFC006.jpg", alt: "Girl at the end of an alley" },
  { id: 9, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996527/Aspen2.jpg", alt: "Aspen" },
  { id: 10, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757693600/1F9E0328-7F41-4593-831D-41C5421AF1ED.jpg", alt: "Woman smoking in an alley" },
  { id: 11, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1754734853/DSC08696_fwwga0.jpg", alt: "Footballer drinking water" },
  { id: 12, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772111452/DSC07265.jpg", alt: "Ares singing in red" },
  { id: 13, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996527/Usma1.jpg", alt: "Usma Puppy" },
  { id: 14, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772111452/DSC06794.jpg", alt: "Ares singing in blue" },
  { id: 15, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772112368/DSC05500.jpg", alt: "Woman wathing metro arriving" },
  { id: 16, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772111452/DSC06956.jpg", alt: "Ares singing in shadow" },
  { id: 17, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772112309/20260202-DSC06282.jpg", alt: "Puijo in winter" },
  { id: 18, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1772111453/DSC06868.jpg", alt: "Ares singing in BW" },
  { id: 19, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996230/Puijo_syksy.jpg", alt: "Puijo tower" },
  { id: 20, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996527/Rue1.jpg", alt: "Rue Puppy" },
  { id: 21, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_2736.jpg", alt: "Northern Lights Photography" },
  { id: 22, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996527/Usma2.jpg", alt: "Usma Puppy" },
  { id: 23, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996528/Maire1.jpg", alt: "Maire Puppy" },
  { id: 24, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102074/IMG_4309.jpg", alt: "Nature Photography" },
  { id: 25, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996528/Aspen1.jpg", alt: "Aspen Puppy" },
  { id: 26, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102066/IMG_9312.jpg", alt: "Sunset Photography" },
  { id: 27, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996653/Rue3.jpg", alt: "Rue Puppy" },
  { id: 28, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102071/DSC02800.jpg", alt: "Forest Photography" },
  { id: 29, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996653/Rue2.jpg", alt: "Rue Puppy" },
  { id: 30, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757166451/Bird.jpg", alt: "Nature Photography" },
  { id: 31, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996758/Usma4.jpg", alt: "Usma Puppy" },
  { id: 32, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1760996758/Usma3.jpg", alt: "Usma Puppy" },
  { id: 33, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_6684.jpg", alt: "Blueberry Photography" },
  { id: 34, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1754734852/DSC08713_tjeuzo.jpg", alt: "Football Photography" },
  { id: 35, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102069/IMG_2734.jpg", alt: "Northern Lights Photography" },
  { id: 36, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102070/DSC04546.jpg", alt: "Nature Photography" },
  { id: 37, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_3559.jpg", alt: "Nature Photography" },
  { id: 38, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102071/DSC08626.jpg", alt: "Football Photography" },
  { id: 39, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01531.jpg", alt: "Street Photography" },
  { id: 40, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01740.jpg", alt: "Football Photography" },
  { id: 41, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102073/IMG_6248.jpg", alt: "Street Photography" },
  { id: 42, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01883.jpg", alt: "Football Photography" },
  { id: 43, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102067/IMG_0075.jpg", alt: "Sunset Photography" },
  { id: 44, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757151374/DSC01635.jpg", alt: "Football Photography" },
  { id: 45, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143246/IMG_8481.jpg", alt: "Street Photography" },
  { id: 46, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143246/IMG_4808.jpg", alt: "Nature Photography" },
  { id: 47, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143248/DSC04601.jpg", alt: "Street Photography" },
  { id: 48, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143250/DSC00540.jpg", alt: "Football Photography" },
  { id: 49, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143249/DSC04705.jpg", alt: "Street Photography" },
  { id: 50, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143249/DSC05312.jpg", alt: "Football Photography" },
  { id: 51, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143250/DSC04626.jpg", alt: "Street Photography" },
  { id: 52, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757166679/Tram.jpg", alt: "Street Photography" },
  { id: 53, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143251/DSC01415_SnapseedCopy.jpg", alt: "Nature Photography" },
  { id: 54, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143251/DSC01241.jpg", alt: "Football Photography" },
  { id: 55, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102070/DSC04466.jpg", alt: "Architecture Photography" },
  { id: 56, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102074/DSC01477.jpg", alt: "Street Photography" },
  { id: 57, type: 'image', src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757151375/DSC01941.jpg", alt: "Football Photography" },
  // Example video entry - replace with your actual Instagram embed URL
  
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-mut">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold my-5 text-balance">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my photography and video work in one place
          </p>
        </div>
      </div>

      {/* Portfolio Masonry Grid with react-masonry-css */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Masonry
          breakpointCols={{ default: 3, 1200: 2, 768: 1 }}
          className="flex w-auto -ml-6"
          columnClassName="pl-6"
        >
          {portfolioMedia.map((media, index) => {
            if (media.type === 'image') {
              const optimizedSrc = media.src.includes('cloudinary.com')
                ? media.src.replace('/upload/', '/upload/w_800,q_auto,f_auto/')
                : media.src
              return (
                <div key={`portfolio-${index}`} className="mb-6 group hover:shadow-xl transition-all duration-300">
                  <Image
                    src={optimizedSrc}
                    alt={media.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ display: 'block' }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )
            } else if (media.type === 'video') {
              return (
                <div key={`portfolio-${index}`} className="mb-6 group hover:shadow-xl transition-all duration-300">
                  <div className="w-full rounded-lg overflow-hidden">
                    <iframe
                      src={normalizeInstagramEmbedUrl(media.iframeSrc)}
                      className="w-full h-[480px] sm:h-[560px] rounded-lg border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      scrolling="no"
                      title={`portfolio-video-${media.id}`}
                    />
                  </div>
                </div>
              )
            }
            return null
          })}
        </Masonry>
      </div>
    </div>
  )
}
