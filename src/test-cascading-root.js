// Root-level file: should get root .eslintrc.yml rules
// eqeqeq, complexity, no-use-before-define apply here

// Violation: no-use-before-define (error in root config)
console.log(myFunc());

function myFunc() {
  // Violation: complexity > 10 (warn in root config)
  const x = 1;
  if (x === 1) {
    if (x === 2) {
      if (x === 3) {
        if (x === 4) {
          if (x === 5) {
            if (x === 6) {
              if (x === 7) {
                if (x === 8) {
                  if (x === 9) {
                    if (x === 10) {
                      if (x === 11) {
                        return 'complex';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return x;
}

export default myFunc;
