import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function FacultyLoginModal() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    // Here you would typically send a request to your backend API
    console.log("Faculty login attempt", { email, password })
    // For demo purposes, we'll just log the attempt
    alert("Login functionality would be implemented here")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Faculty Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Faculty Login</DialogTitle>
          <DialogDescription>Enter your credentials to access the faculty portal.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="faculty-email" className="text-right">
              Email
            </Label>
            <Input
              id="faculty-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="faculty-password" className="text-right">
              Password
            </Label>
            <Input
              id="faculty-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="ml-auto">
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

