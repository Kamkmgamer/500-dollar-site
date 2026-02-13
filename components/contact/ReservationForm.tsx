'use client';

import { useState, FormEvent } from 'react';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const timeSlots = [
    { value: '', label: 'Select time' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  const guestOptions = Array.from({ length: 10 }, (_, i) => ({
    value: String(i + 1),
    label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`,
  }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'reservation' }),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({
          name: '', email: '', phone: '', date: '', time: '',
          guests: '2', occasion: '', requests: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Your name"
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          placeholder="(555) 123-4567"
        />
      </div>

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        placeholder="your@email.com"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />

        <Select
          label="Time"
          name="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          options={timeSlots}
          required
        />

        <Select
          label="Guests"
          name="guests"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          options={guestOptions}
          required
        />
      </div>

      <Select
        label="Occasion (Optional)"
        name="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
        options={[
          { value: '', label: 'Select occasion' },
          { value: 'birthday', label: 'Birthday' },
          { value: 'anniversary', label: 'Anniversary' },
          { value: 'date', label: 'Date Night' },
          { value: 'business', label: 'Business Dinner' },
          { value: 'other', label: 'Other' },
        ]}
      />

      <Textarea
        label="Special Requests (Optional)"
        name="requests"
        value={formData.requests}
        onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
        placeholder="Dietary restrictions, seating preferences, etc."
        rows={3}
      />

      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? 'Submitting...' : status === 'sent' ? 'Request Submitted!' : 'Request Reservation'}
      </Button>

      {status === 'error' && (
        <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>
      )}
      {status === 'sent' && (
        <p className="text-green-600 text-center text-sm">
          Thank you! We&apos;ll confirm your reservation within 24 hours.
        </p>
      )}

      <p className="text-gray-500 text-xs text-center">
        This is a reservation request. We&apos;ll contact you to confirm availability.
      </p>
    </form>
  );
}
