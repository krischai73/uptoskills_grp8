import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SocialIcon } from "react-social-icons"
import type React from "react"
import { FacultyLoginModal } from "@/components/FacultyLoginModal"
import { CandidateLoginModal } from "@/components/CandidateLoginModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faculty Development Programs | UpToSkills",
  description: "Join our faculty development programs as a speaker or participant",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#1a1a1a] text-white text-sm py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <span>Palam, New Delhi, Delhi 110077</span>
              <span>info@uptoskills.com</span>
              <span>+91-9319772294</span>
            </div>
            <div className="flex gap-4">
              <FacultyLoginModal />
              <CandidateLoginModal />
            </div>
          </div>
        </header>
        <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">UpToSkills</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Internship
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Jobs
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Competitions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Discover
              </a>
            </div>
          </div>
        </nav>
        {children}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 p-2 bg-white rounded-l-lg shadow-lg">
          <SocialIcon
            url="https://twitter.com/uptoskills"
            target="_blank"
            rel="noopener noreferrer"
            className="!h-8 !w-8 hover:scale-110 transition-transform"
          />
          <SocialIcon
            url="https://www.facebook.com/uptoskills"
            target="_blank"
            rel="noopener noreferrer"
            className="!h-8 !w-8 hover:scale-110 transition-transform"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/uptoskills"
            target="_blank"
            rel="noopener noreferrer"
            className="!h-8 !w-8 hover:scale-110 transition-transform"
          />
          <SocialIcon
            url="https://www.instagram.com/uptoskills"
            target="_blank"
            rel="noopener noreferrer"
            className="!h-8 !w-8 hover:scale-110 transition-transform"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCYWzrQCnVHYNLhZbQNOYBNw"
            target="_blank"
            rel="noopener noreferrer"
            className="!h-8 !w-8 hover:scale-110 transition-transform"
          />
        </div>
      </body>
    </html>
  )
}

