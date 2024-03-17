// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean | string;
  notToBe: (val: any) => boolean | string;
};

export function expect(val: any): ToBeOrNotToBe {
  const toBe = (asertVal: any): boolean | string => {
    if (asertVal !== val) {
      throw new Error('Not Equal');
    } else {
      return true;
    }
  };
  const notToBe = (asertVal: any): boolean | string => {
    if (asertVal === val) {
      throw new Error('Equal');
    } else {
      return true;
    }
  };

  return { toBe, notToBe };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

try {
  // console.log(expect(5).toBe(5));
  // console.log(expect(5).notToBe(5));
  console.log(expect(5).notToBe(4));
  console.log(expect(5).toBe(4));
} catch (error) {
  console.log('error message:', error.message);
}
