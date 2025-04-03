import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Campus Connect</h1>
            <div className="space-x-2">
              <Link href="/login">
                <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Campus Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Enhancing communication between students, faculty, and administration for a better campus experience.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="Announcements"
                description="Stay updated with the latest campus news and announcements from faculty and administration."
                icon="Megaphone"
              />
              <FeatureCard
                title="Event Coordination"
                description="Discover and participate in campus events, workshops, and activities."
                icon="Calendar"
              />
              <FeatureCard
                title="Real-time Chat"
                description="Connect with fellow students, faculty, and staff through instant messaging."
                icon="MessageSquare"
              />
              <FeatureCard
                title="Feedback System"
                description="Share your thoughts and suggestions to improve campus services and facilities."
                icon="MessageCircle"
              />
              <FeatureCard
                title="Push Notifications"
                description="Receive instant alerts for important announcements and updates."
                icon="Bell"
              />
              <FeatureCard
                title="AI Assistant"
                description="Get quick answers to your questions about campus resources and services."
                icon="Bot"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 Campus Connect. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:text-blue-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-blue-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  const icons = {
    Megaphone: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <path d="m3 11 18-5v12L3 13"></path>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
      </svg>
    ),
    Calendar: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </svg>
    ),
    MessageSquare: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    MessageCircle: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    Bell: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
      </svg>
    ),
    Bot: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-blue-500 mb-4"
      >
        <rect width="18" height="10" x="3" y="11" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" x2="8" y1="16" y2="16"></line>
        <line x1="16" x2="16" y1="16" y2="16"></line>
      </svg>
    ),
  }

  const IconComponent = icons[icon]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <IconComponent />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

