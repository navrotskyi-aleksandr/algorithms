export default function two_crystal_balls(breaks: boolean[]): number {
  // o[_f_f_|_f_f_|_t_t_|_____|_____ ]n
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  while (i < breaks.length) {
    if (breaks[i]) {
      break;
    }
    i = i + jmpAmount > breaks.length ? ++i : i + jmpAmount;
  }

  if (!breaks[i]) {
    return -1;
  }

  for (let j = i - (jmpAmount - 1); j <= i; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
