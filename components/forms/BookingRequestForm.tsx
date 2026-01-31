'use client';

import { useState } from 'react';

export default function BookingRequestForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredContact: 'Text',
    date: '',
    timeWindow: '',
    device: '',
    issue: '',
    notes: '',
    company: '', // honeypot
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus('error');
        setError(data?.error || 'Unable to submit. Please try again.');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setError('Unable to submit. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="mcpr-card bg-light">
        <h1 className="h4 fw-bold mb-2">Request received</h1>
        <p className="mb-0">
          We’ll confirm a time by your preferred contact method.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mcpr-card">
      <h1 className="h3 fw-bold mb-3">Request a Booking</h1>

      <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
        <label>Company</label>
        <input value={form.company} onChange={(e) => update('company', e.target.value)} />
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" value={form.name} onChange={(e) => update('name', e.target.value)} required />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Preferred Contact</label>
          <select className="form-select" value={form.preferredContact} onChange={(e) => update('preferredContact', e.target.value)}>
            <option>Text</option>
            <option>Call</option>
            <option>Email</option>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Phone (required unless email provided)</label>
          <input className="form-control" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="734-..." />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Email (required unless phone # provided)</label>
          <input className="form-control" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Preferred date (optional)</label>
          <input className="form-control" value={form.date} onChange={(e) => update('date', e.target.value)} placeholder="e.g., Jan 25" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Time window (optional)</label>
          <input className="form-control" value={form.timeWindow} onChange={(e) => update('timeWindow', e.target.value)} placeholder="e.g., 9–11am" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Device</label>
          <input className="form-control" value={form.device} onChange={(e) => update('device', e.target.value)} required placeholder="e.g., iPhone 13" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Issue</label>
          <input className="form-control" value={form.issue} onChange={(e) => update('issue', e.target.value)} required placeholder="e.g., screen cracked" />
        </div>

        <div className="col-12">
          <label className="form-label">Notes (optional)</label>
          <textarea className="form-control" rows={4} value={form.notes} onChange={(e) => update('notes', e.target.value)} />
        </div>

        {status === 'error' && (
          <div className="col-12">
            <div className="alert alert-danger mb-0">{error}</div>
          </div>
        )}

        <div className="col-12">
          <button className="btn btn-dark" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting…' : 'Submit booking request'}
          </button>
        </div>
      </div>
    </form>
  );
}
