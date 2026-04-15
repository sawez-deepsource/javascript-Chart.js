// Test file: should get test/.eslintrc.yml rules
// jasmine env = true, Chart/moment/acquireChart are globals
// max-statements relaxed to 50

// These should NOT trigger no-undef because test/.eslintrc.yml has jasmine env + custom globals
describe('cascading test', function() {
  it('should work', function() {
    const chart = new Chart();
    expect(chart).toBeDefined();
    expect(moment()).toBeDefined();
    acquireChart();
    waitForResize();
  });
});

// Intentional violation: eqeqeq (from root, should cascade into test/)
const a = 1;
if (a == 2) {
  console.log('loose equality');
}
