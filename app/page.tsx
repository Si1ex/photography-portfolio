import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image with Tint */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dhjbxoyfw/image/upload/v1757102069/IMG_2734.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Daniel Kurhinen</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Freezing atmosphere, capturing emotions, and telling stories through my lens
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-4xl">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
