export function helloMessage(name: string): string {
  const nameRegex = /^[A-Za-z\u00C0-\u00FF\s]+$/;
  if (!nameRegex.test(name)) {
    throw new Error('nameは文字列である必要があります');
  }

  if (typeof name !== 'string') {
    throw new Error('nameは文字列である必要があります');
  }

  if (name.length > 32) {
    throw new Error('nameは32文字以内である必要があります');
  }

  return `${name}はじめまして！`;
}
