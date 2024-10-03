import React, { useState } from 'react'

export default function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://public.herotofu.com/v1/469dc240-819c-11ef-9cd5-83be6ab60c60', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setMessage('Your early access request has been submitted successfully!')
        form.reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setMessage('There was a problem submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name *</label>
        <input id="name" name="name" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div>
        <label htmlFor="company" className="block mb-1">Company *</label>
        <input id="company" name="company" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Business Email *</label>
        <input id="email" name="email" type="email" required className="w-full px-3 py-2 border rounded" />
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1">Phone Number (Optional)</label>
        <input id="phone" name="phone" type="tel" className="w-full px-3 py-2 border rounded" />
      </div>
      <div>
        <label htmlFor="package" className="block mb-1">Package *</label>
        <select id="package" name="package" required className="w-full px-3 py-2 border rounded">
          <option value="">Select a package</option>
          <option value="basic">Basic</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments" className="block mb-1">Comments (Optional)</label>
        <textarea id="comments" name="comments" className="w-full px-3 py-2 border rounded" rows={4}></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Request Early Access'}
      </button>
      {message && <p className={message.includes('successfully') ? 'text-green-600' : 'text-red-600'}>{message}</p>}
    </form>
  )
}
