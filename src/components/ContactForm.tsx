import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // Call EmailJS to send the email
    emailjs
      .send(
        'service_c6pg4vl',
        'template_ihzm108',
        {
          from_name: formData.name,
          to_name: 'Lukas',
          message: formData.message,
          email: formData.email,
        },
        'X2SzUFBbOCbZtqEpY'
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          setStatusMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setStatusMessage('There was an error sending your message. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
    >
      <TextField
        label="Your Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Your Email"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Your Message"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </Button>

      {/* Status message (success or error) */}
      {statusMessage && (
        <Typography
          variant="body2"
          sx={{
            color: statusMessage.includes('successfully') ? 'green' : 'red',
            marginTop: 2,
          }}
        >
          {statusMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;