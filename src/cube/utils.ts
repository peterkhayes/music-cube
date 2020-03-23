export function enumValues<T extends string>(input: Record<T, T>): Array<T> {
  return Object.values(input) as Array<T>;
}

export function createRecord<X extends string, Y>(
  input: Array<X>,
  fn: (input: X) => Y,
): Record<X, Y> {
  const output: unknown = {};
  for (const key of input) {
    output[key] = fn(key);
  }
  return output as Record<X, Y>;
}

type Parser<T> = (input: string) => T | null;
export function createEnumParser<T extends string>(enm: Record<T, T>): Parser<T> {
  return (input) => {
    const trimmed = input.trim();
    return trimmed in enm ? enm[trimmed] : null;
  };
}
