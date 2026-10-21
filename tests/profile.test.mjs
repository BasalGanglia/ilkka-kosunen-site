import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const profile = JSON.parse(readFileSync(new URL('../src/data/profile.json', import.meta.url), 'utf8'));
test('profile has required copy and contact details', () => {
  for (const field of ['name', 'role', 'headline', 'intro', 'availability', 'email']) assert.ok(profile[field]?.trim(), field);
  assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  assert.equal(profile.services.length, 3);
});
test('a configured CV is a real local asset', () => {
  if (!profile.cvPath) return;
  assert.ok(profile.cvPath.startsWith('/docs/'));
  assert.ok(!profile.cvPath.includes('..'));
  assert.ok(existsSync(new URL(`../public${profile.cvPath}`, import.meta.url)));
});
