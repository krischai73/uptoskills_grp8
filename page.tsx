import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheck, BookOpen, Trophy, Users } from "lucide-react"

export default function Home() {
  return (
    <main>
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Faculty Development Programs</h1>
            <div className="grid gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="w-full max-w-md mx-auto hover:scale-105 transition-transform"
              >
                Faculty Login
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full max-w-md mx-auto hover:scale-105 transition-transform"
              >
                Registration as a Speaker
              </Button>
              <div className="text-2xl font-semibold my-4">OR</div>
              <Button
                variant="secondary"
                size="lg"
                className="w-full max-w-md mx-auto hover:scale-105 transition-transform"
              >
                Registration as a Participant
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="https://uptoskills.com/faculty-development-programs/#"
          alt="Educational illustration"
          fill
          className="object-cover opacity-10"
          priority
        />
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">5000+</h3>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Expert Trainers</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">Courses Available</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BadgeCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">At UptoSkills, we are calling for</span>
            <h2 className="text-3xl font-bold mt-2">Volunteer Guest Speakers</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              We are dedicated to fostering excellence in education & skill development through our Faculty Development
              Program. We invite passionate educators and experts to join us as volunteer speakers to inspire and
              empower our faculty community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Share Your Expertise</h3>
                <p className="text-muted-foreground">
                  Connect with fellow educators and share your knowledge in your area of expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Make an Impact</h3>
                <p className="text-muted-foreground">
                  Help shape the future of education by contributing to faculty development.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Build Network</h3>
                <p className="text-muted-foreground">
                  Connect with a community of educators and expand your professional network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="mb-8">Join our community of educators and make a difference in the world of education.</p>
            <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                UpToSkills is dedicated to transforming education through innovative faculty development programs and
                professional training.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Faculty Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Professional Training
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Palam, New Delhi, Delhi 110077</li>
                <li>info@uptoskills.com</li>
                <li>+91-9319772294</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UpToSkills. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

