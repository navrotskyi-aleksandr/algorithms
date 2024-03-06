export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  while (lo < hi) {
    const midPoint = Math.floor((lo + hi) / 2);
    const value = haystack[midPoint];
    if (value === needle) {
      return true;
    } else if (needle > value) {
      lo = midPoint + 1;
    } else {
      hi = midPoint;
    }
  }
  return false;
}
