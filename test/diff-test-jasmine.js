// Test scope: jasmine globals available, eqeqeq from root cascades
describe('diff test', function() {
  it('works', function() {
    const chart = new Chart();
    expect(chart).toBeDefined();
    if (1 == 2) { console.log('bad'); }
  });
});
