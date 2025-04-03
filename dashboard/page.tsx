"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHeader from "@/components/dashboard-header"
import AnnouncementsList from "@/components/announcements-list"
import EventsList from "@/components/events-list"
import ChatInterface from "@/components/chat-interface"
import FeedbackForm from "@/components/feedback-form"
import AiAssistant from "@/components/ai-assistant"
import { getUserData } from "@/lib/auth"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserData() {
      try {
        const userData = await getUserData()
        if (!userData) {
          router.push("/login")
          return
        }
        setUser(userData)
      } catch (error) {
        console.error("Error loading user data:", error)
        router.push("/login")
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="announcements" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="announcements" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Announcements</CardTitle>
                    <CardDescription>Stay updated with the latest campus news and announcements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnnouncementsList user={user} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Events</CardTitle>
                    <CardDescription>Discover and participate in campus events and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EventsList user={user} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chat" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Chat</CardTitle>
                    <CardDescription>Connect with fellow students and faculty</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChatInterface user={user} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                    <CardDescription>Share your thoughts and suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FeedbackForm user={user} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Get quick answers to your questions</CardDescription>
              </CardHeader>
              <CardContent>
                <AiAssistant user={user} />
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://library.example.edu" target="_blank" rel="noopener noreferrer">
                      Library Resources
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://calendar.example.edu" target="_blank" rel="noopener noreferrer">
                      Academic Calendar
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://courses.example.edu" target="_blank" rel="noopener noreferrer">
                      Course Catalog
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://help.example.edu" target="_blank" rel="noopener noreferrer">
                      Help Center
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

