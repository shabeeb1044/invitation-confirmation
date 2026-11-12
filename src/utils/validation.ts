/**
 * Validates that a string contains only standard English (ASCII printable) characters:
 * English letters (A-Z, a-z), numbers (0-9), whitespace, and common punctuation.
 * Returns true for empty/whitespace-only strings so required-field validation handles emptiness.
 */
const ENGLISH_ONLY_REGEX = /^[A-Za-z0-9\s.,\-'&()/:+"!?@#%*;_]+$/;

export function isEnglishOnly(value: string): boolean {
  const trimmed = (value || '').trim();
  if (!trimmed) return true;
  return ENGLISH_ONLY_REGEX.test(trimmed);
}

