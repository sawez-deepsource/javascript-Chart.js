
// Diff test: only this new line should be flagged
export function diffTestHelper(x, y) {
  if (x == y) return true;
  return false;
}
