'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('package', selectedPackage) // Add the selected package to formData

    try {
      const response = await fetch('https://public.herotofu.com/v1/469dc240-819c-11ef-9cd5-83be6ab60c60', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your early access request has been submitted.",
        })
        form.reset()
        setSelectedPackage("")
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company *</Label>
        <Input id="company" name="company" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Business Email *</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="package">Package *</Label>
        <Select
          value={selectedPackage}
          onValueChange={setSelectedPackage}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="comments">Comments (Optional)</Label>
        <Textarea id="comments" name="comments" />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Early Access'}
      </Button>
    </form>
  )
}
