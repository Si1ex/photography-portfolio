import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know the person behind the lens
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img src="/professional-photographer-portrait-studio.png" alt="Daniel Kurhinen" className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Daniel Kurhinen</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in photography, I specialize in capturing the essence of moments that
                matter most. My journey began with a simple fascination for light and shadow, which has evolved into a
                passionate pursuit of visual storytelling.
              </p>
              <p>
                I believe that every photograph should tell a story, evoke emotion, and preserve memories that last a
                lifetime. Whether it's the intimate moments of a wedding, the raw beauty of nature, or the dynamic
                energy of urban life, I strive to create images that resonate with authenticity and artistic vision.
              </p>
              <p>
                My approach combines technical expertise with creative intuition, ensuring that each shot captures not
                just what the eye sees, but what the heart feels. I work closely with my clients to understand their
                vision and bring it to life through my lens.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Specializations</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Portrait Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Wedding Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Landscape Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Event Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Commercial Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Street Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
