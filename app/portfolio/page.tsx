import { Navigation } from "@/components/navigation"

const portfolioImages = [
  { id: 1, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_2736.jpg", alt: "Northern Lights Photography" },
  { id: 2, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1754734853/DSC08696_fwwga0.jpg", alt: "Football Photography" },
  { id: 3, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102074/IMG_4309.jpg", alt: "Nature Photography" },
  { id: 4, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102066/IMG_9312.jpg", alt: "Sunset Photography" },
  { id: 5, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102071/DSC02800.jpg", alt: "Forest Photography" },
  { id: 6, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757165262/FullSizeRender.jpg", alt: "Nature Photography" },
  { id: 7, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_6684.jpg", alt: "Blueberry Photography" },
  { id: 8, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1754734852/DSC08713_tjeuzo.jpg", alt: "Football Photography" },
  { id: 9, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102069/IMG_2734.jpg", alt: "Northern Lights Photography" },
  { id: 10, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143252/DSC01592.jpg", alt: "Football Photography" },
  { id: 11, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102070/DSC04546.jpg", alt: "Nature Photography" },
  { id: 12, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102068/IMG_3559.jpg", alt: "Nature Photography" },
  { id: 13, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102071/DSC08626.jpg", alt: "Football Photography" },
  { id: 14, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01531.jpg", alt: "Street Photography" },
  { id: 15, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01740.jpg", alt: "Football Photography" },
  { id: 16, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102073/IMG_6248.jpg", alt: "Street Photography" },
  { id: 17, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102072/DSC01883.jpg", alt: "Football Photography" },
  { id: 18, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102067/IMG_0075.jpg", alt: "Sunset Photography" },
  { id: 19, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757151374/DSC01635.jpg", alt: "Football Photography" },
  { id: 20, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143246/IMG_8481.jpg", alt: "Street Photography" },
  { id: 21, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143246/IMG_4808.jpg", alt: "Nature Photography" },
  { id: 22, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143248/DSC04601.jpg", alt: "Street Photography" },
  { id: 23, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143250/DSC00540.jpg", alt: "Football Photography" },
  { id: 24, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143249/DSC04705.jpg", alt: "Street Photography" },
  { id: 25, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143249/DSC05312.jpg", alt: "Football Photography" },
  { id: 26, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143250/DSC04626.jpg", alt: "Street Photography" },
  { id: 27, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143250/FullSizeRender.jpg", alt: "Street Photography" },
  { id: 28, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143251/DSC01415_SnapseedCopy.jpg", alt: "Nature Photography" },
  { id: 29, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757143251/DSC01241.jpg", alt: "Football Photography" },
  { id: 30, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102070/DSC04466.jpg", alt: "Architecture Photography" },
  { id: 31, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102074/DSC01477.jpg", alt: "Street Photography" },
  { id: 32, src: "https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757151375/DSC01941.jpg", alt: "Football Photography" },
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
            A collection of my best shots across various photography styles
          </p>
        </div>
      </div>

      {/* Portfolio Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {portfolioImages.map((image) => (
            <div key={image.id} className="mb-6 break-inside-avoid group hover:shadow-xl transition-all duration-300">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
