"use client"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  function validateEmail(email: string) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    // Client-side validation
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("All fields are required.")
      return
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.")
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await res.json()
      if (!res.ok) {
        setError(result.error || "Something went wrong. Please try again.")
      } else {
        setSuccess("Message sent successfully!")
        setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" })
      }
    } catch {
      setError("Network error. Please try again later.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-16 pb-12 bg-[#18181b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold my-5 text-balance">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss your next photography project
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-white leading-relaxed mb-6">
                I primarily work with brands and companies to create impactful commercial photography and video. My focus is on helping businesses elevate their visual identity and tell their story through high-quality visual content.
                Available in Finnish, English, and Russian.
              </p>
              <p>
                If your brand or company has a photo or video project in mind, let’s connect and create something exceptional together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-muted-foreground">daniel.kurhinen.photo@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-muted-foreground">Kuopio, Finland</span>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/daniel.photogrphy" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@daniel.photogrphy" className="text-muted-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="Photography Inquiry" value={form.subject} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, preferred dates, and any specific requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ minHeight: '24px' }}>
                {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
              </div>

              <Button type="submit" className="w-full rounded-4xl" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
