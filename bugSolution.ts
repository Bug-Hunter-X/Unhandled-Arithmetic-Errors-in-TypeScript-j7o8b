function add(a: number, b: number): number {
  const sum = a + b;
  if (!Number.isFinite(sum)) {
    throw new Error('Arithmetic overflow or underflow');
  }
  return sum;
}

function subtract(a: number, b: number): number {
  const diff = a - b;
  if (!Number.isFinite(diff)) {
    throw new Error('Arithmetic overflow or underflow');
  }
  return diff;
}

function multiply(a: number, b: number): number {
  const product = a * b;
  if (!Number.isFinite(product)) {
    throw new Error('Arithmetic overflow or underflow');
  }
  return product;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  const quotient = a / b;
  if (!Number.isFinite(quotient)) {
    throw new Error('Arithmetic overflow or underflow');
  }
  return quotient;
}

let result = add(Number.MAX_SAFE_INTEGER, 1); // throws an error
result = subtract(Number.MIN_SAFE_INTEGER, 1); // throws an error
result = multiply(Number.MAX_SAFE_INTEGER, 2); // throws an error
result = divide(15, 3); // 5

console.log(result);