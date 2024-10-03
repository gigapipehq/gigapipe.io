import React, { useState } from 'react'

export default function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const isFormValid = () => {
    return formData.name && formData.company && formData.email && formData.package
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://public.herotofu.com/v1/469dc240-819c-11ef-9cd5-83be6ab60c60', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      alert('There was a problem submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto'
  }

  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  }

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }

  if (isSubmitted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Thank you for your request!</h2>
        <p>We'll be in touch soon!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        name="name"
        placeholder="Name *"
        required
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="text"
        name="company"
        placeholder="Company *"
        required
        value={formData.company}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Business Email *"
        required
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number (Optional)"
        value={formData.phone}
        onChange={handleChange}
        style={inputStyle}
      />
      <select
        name="package"
        required
        value={formData.package}
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="">Select a package *</option>
        <option value="basic">Basic</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <textarea
        name="comments"
        placeholder="Comments (Optional)"
        value={formData.comments}
        onChange={handleChange}
        style={{ ...inputStyle, minHeight: '100px' }}
      ></textarea>
      <button
        type="submit"
        disabled={isSubmitting || !isFormValid()}
        style={{
          ...buttonStyle,
          opacity: isSubmitting || !isFormValid() ? 0.5 : 1
        }}
      >
        {isSubmitting ? 'Submitting...' : 'Request Early Access'}
      </button>
    </form>
  )
}
