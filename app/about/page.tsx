import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold my-5 text-balance">About Me</h1>
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
                Hello. My name is Daniel Kurhinen, and I am a 25-year-old student from Kuopio, Finland. I have been interested in photography 
                since I was a kid, always trying to capture moments through a lens. As I grew older, my interest turned into a passion, and 
                in the spring of 2025 I finally decided to invest in my first camera. Until then, I photographed only with my phone. Getting 
                a real camera opened up a whole new way of capturing the world around me and became the next big step forward in my photography journey.
              </p>
              <p>
                What I enjoy most about photography is the freedom of creativity. It allows me to see things from different perspectives and 
                notice details I might otherwise overlook. With my photos, I try to convey the atmosphere and the story behind each moment. 
                For me, photography is not just about taking pictures — it’s about expressing emotions and sharing a piece of how I see the world.
              </p>
              <p>
                My goal is to continue developing as a photographer and to keep learning with every shoot. On this website, you can explore my portfolio,
                see some of my favorite works, and if you like what you see, don’t hesitate to get in touch. I’m always open to new projects and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
