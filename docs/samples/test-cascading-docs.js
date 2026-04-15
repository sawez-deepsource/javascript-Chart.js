// docs/samples file: no-console is OFF here
// console.log should NOT trigger any issue

console.log('This is a sample');
console.warn('This is fine too');
console.error('No issues here');

// But eqeqeq should still fire (inherited from root)
const x = 1;
if (x == 2) {
  console.log('loose equality in docs');
}
