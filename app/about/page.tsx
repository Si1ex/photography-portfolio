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
              <img
                src="https://res.cloudinary.com/dhjbxoyfw/image/upload/v1765831828/Min%C3%A4.jpg"
                alt="Daniel Kurhinen"
                className="rounded-4xl shadow-lg object-cover"
              />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Daniel Kurhinen</h2>
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                Hello. My name is Daniel Kurhinen, and I am a 25-year-old student from Kuopio, Finland. I have been interested in photography 
                since I was a child, always trying to capture moments through a lens. As I grew older, my interest turned into a passion, and 
                in the spring of 2025, I finally decided to buy my first camera. Before that, I photographed only with my phone. Getting
                a real camera was the next big step forward in my photography journey.
              </p>
              <p>
                In the summer of 2025, I expanded into cinematic aftermovies and highlight video work. I began producing dynamic visual stories
                for events and sports, and in December I gained access to film one of the world’s best footballers during the Crystal Palace - KuPS
                game in London. That experience pushed me to take cinematic video production more seriously and professionally, and turn it into valuable content for my clients.
              </p>
              <p>
                I film cinematic highlight videos for footballers, their agents, and football clubs. Three videos I made from the Crystal Palace vs KuPS game
                pulled 200,000 views combined for KuPS, demonstrating the reach and impact of quality visual content in the football industry.
              </p>
              <p>
                My goal is to continue developing as a videographer, photographer, and video editor. On this website, you can explore my portfolio,
                see some of my favorite works, and if you like what you see, don’t hesitate to get in touch. I’m always open to new projects and
                collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
