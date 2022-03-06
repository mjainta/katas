import { tribonacci } from "./solution"; 

const tester = (sig: [number, number, number], n: number, exp: number[]) => {
  expect(tribonacci(sig, n)).toStrictEqual(exp)
}

test('tribonaccies', () => {
  tester([1, 1, 1], 3, [1, 1, 1])
  tester([1, 1, 1], 5, [1, 1, 1, 3, 5])
  tester([0, 0, 1], 9, [0, 0, 1, 1, 2, 4, 7, 13, 24])
  tester([1, 1, 1], 1, [1])
  tester([1, 1, 1], 0, [])
});
