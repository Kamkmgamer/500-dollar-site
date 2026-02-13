'use client';

import { useState, FormEvent } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface ContactFormProps {
  onSubmit?: (data: Record<string, string>) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
        onSubmit?.(formData);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        placeholder="Your full name"
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        placeholder="your@email.com"
      />

      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="(555) 123-4567"
      />

      <Select
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'reservation', label: 'Reservation Question' },
          { value: 'catering', label: 'Catering Request' },
          { value: 'feedback', label: 'Feedback' },
          { value: 'other', label: 'Other' },
        ]}
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        placeholder="How can we help you?"
        rows={4}
      />

      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
      </Button>

      {status === 'error' && (
        <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>
      )}
      {status === 'sent' && (
        <p className="text-green-600 text-center text-sm">Thank you! We&apos;ll get back to you soon.</p>
      )}
    </form>
  );
}
