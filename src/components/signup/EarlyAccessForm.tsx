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

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const isFormValid = () => {
    return formData.name && formData.company && formData.email && formData.package
  }


  const FORM_URL = "https://script.google.com/macros/s/AKfycbypIQWKvFDiAVAQZZCWlFGdU61YdXr9WKLHrH7DJqnC7fURvKX4qBu0W4dzmaEu3Yx69g/exec"
  // const FORM_URL = "https://public.herotofu.com/v1/469dc240-819c-11ef-9cd5-83be6ab60c60"
  
  const handleSubmit = async (event:any) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
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
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    alignItems: 'flex-start'
  }

  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%'
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
    return React.createElement('div', { style: { marginTop: '2rem' } },
      React.createElement('h2', null, "Thank you for your request! We will be in touch soon!")
    )
  } 
  
  return React.createElement('form', { onSubmit: handleSubmit, style: formStyle },
    React.createElement('input', {
      type: 'text',
      name: 'name',
      placeholder: 'Full Name *',
      required: true,
      value: formData.name,
      onChange: handleChange,
      style: inputStyle
    }),
    React.createElement('input', {
      type: 'text',
      name: 'company',
      placeholder: 'Company *',
      required: true,
      value: formData.company,
      onChange: handleChange,
      style: inputStyle
    }),
    React.createElement('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Business Email *',
      required: true,
      value: formData.email,
      onChange: handleChange,
      style: inputStyle
    }),
    React.createElement('input', {
      type: 'tel',
      name: 'phone',
      placeholder: 'Phone Number (Optional)',
      value: formData.phone,
      onChange: handleChange,
      style: inputStyle
    }),
    React.createElement('select', {
      name: 'package',
      required: true,
      value: formData.package,
      onChange: handleChange,
      style: inputStyle
    },
      React.createElement('option', { value: '' }, 'Select a package *'),
      React.createElement('option', { value: 'basic' }, 'Trial Package'),
      React.createElement('option', { value: 'basic' }, 'Basic Package'),
      React.createElement('option', { value: 'medium' }, 'Medium Package'),
      React.createElement('option', { value: 'large' }, 'Large Package')
    ),
    React.createElement('textarea', {
      name: 'comments',
      placeholder: 'Comments (Optional)',
      value: formData.comments,
      onChange: handleChange,
      style: { ...inputStyle, minHeight: '100px' }
    }),
    React.createElement('button', {
      type: 'submit',
      disabled: isSubmitting || !isFormValid(),
      style: {
        ...buttonStyle,
        opacity: isSubmitting || !isFormValid() ? 0.5 : 1
      }
    }, isSubmitting ? 'Submitting...' : 'Request Early Access')
  )
}
