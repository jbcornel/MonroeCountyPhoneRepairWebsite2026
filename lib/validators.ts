export function isValidPhone(input: string) {
  const digits = input.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export function isValidEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
}

export function safeTrim(input: unknown, max = 5000) {
  const s = typeof input === 'string' ? input : '';
  return s.trim().slice(0, max);
}

export function safeEnum<T extends string>(
  input: unknown,
  allowed: readonly T[],
  fallback: T
) {
  const v = typeof input === 'string' ? (input as T) : fallback;
  return allowed.includes(v) ? v : fallback;
}
