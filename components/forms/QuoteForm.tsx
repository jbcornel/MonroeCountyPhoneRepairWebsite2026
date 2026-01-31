'use client';

import { useState } from 'react';

const BRANDS = ['iPhone', 'Samsung', 'Android', 'Other'] as const;
const ISSUES = ['Screen', 'Battery', 'Charging Port', 'Back Glass', 'Water Damage', 'Other'] as const;
const CONTACT_METHODS = ['Text', 'Call', 'Email'] as const;

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    brand: 'iPhone',
    model: '',
    issue: 'Screen',
    contactMethod: 'Text',
    desiredTimeline: '',
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
      const res = await fetch('/api/quote', {
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
        <h2 className="h4 fw-bold mb-2">Request received</h2>
        <p className="mb-0">
          We’ll respond as soon as possible during business hours. If you need help urgently, call or text us.
        </p>
      </div>
    );
  }

  const showEmail = form.contactMethod === 'Email';

  return (
    <form onSubmit={onSubmit} className="mcpr-card">
      <h1 className="h3 fw-bold mb-3">Get a Quote</h1>

      {/* Honeypot: hide visually but keep in DOM */}
      <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
        <label>Company</label>
        <input value={form.company} onChange={(e) => update('company', e.target.value)} />
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            required
            maxLength={120}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Preferred Contact</label>
          <select
            className="form-select"
            value={form.contactMethod}
            onChange={(e) => update('contactMethod', e.target.value as any)}
          >
            {CONTACT_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {!showEmail ? (
          <div className="col-12 col-md-6">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="734-..."
              required
            />
          </div>
        ) : (
          <div className="col-12 col-md-6">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
        )}

        <div className="col-12 col-md-6">
          <label className="form-label">Brand</label>
          <select
            className="form-select"
            value={form.brand}
            onChange={(e) => update('brand', e.target.value as any)}
          >
            {BRANDS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Model</label>
          <input
            className="form-control"
            value={form.model}
            onChange={(e) => update('model', e.target.value)}
            placeholder="e.g., iPhone 13, Galaxy S22"
            required
            maxLength={120}
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Issue</label>
          <select
            className="form-select"
            value={form.issue}
            onChange={(e) => update('issue', e.target.value as any)}
          >
            {ISSUES.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Timeline (optional)</label>
          <input
            className="form-control"
            value={form.desiredTimeline}
            onChange={(e) => update('desiredTimeline', e.target.value)}
            placeholder="Today / This week / Not sure"
            maxLength={120}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Notes (optional)</label>
          <textarea
            className="form-control"
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            rows={4}
            maxLength={2000}
          />
        </div>

        {status === 'error' && (
          <div className="col-12">
            <div className="alert alert-danger mb-0">{error}</div>
          </div>
        )}

        <div className="col-12 d-flex gap-2">
          <button className="btn btn-dark" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting…' : 'Submit'}
          </button>
          
        </div>
      </div>
    </form>
  );
}
