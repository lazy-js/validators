export function flatErrors(errors: any[]): string[] {
  let result: string[] = [];

  for (const err of errors) {
    if (err.constraints && typeof err.constraints === 'object') {
      result.push(...(Object.values(err.constraints) as string[]));
    }

    if (err.children && err.children.length > 0) {
      result.push(...flatErrors(err.children));
    }
  }

  return result;
}
