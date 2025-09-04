import { Navigation } from "@/components/navigation"

const portfolioImages = [
  { id: 1, 
    src: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", 
    alt: "Portrait Photography" 
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1371281596/sample.jpg",
    alt: "Landscape Photography",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1312461204/sample.jpg",
    alt: "Street Photography",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1371281596/sample.jpg",
    alt: "Wedding Photography",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1312461204/sample.jpg",
    alt: "Fashion Photography",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1371281596/sample.jpg",
    alt: "Architecture Photography",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1312461204/sample.jpg",
    alt: "Event Photography",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_800/v1371281596/sample.jpg",
    alt: "Nature Photography",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold my-5 text-balance">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of my best shots across various photography styles
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-muted aspect-[4/3] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
