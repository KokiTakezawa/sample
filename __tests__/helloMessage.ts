import { helloMessage } from '../src/app/components/hellomessage';

describe('helloMessage関数のテスト', () => {
  test('正常な値が入ってきて正常にパスする', () => {
    const name = 'John Doe';
    const result = helloMessage(name);
    expect(result).toBe(`${name}はじめまして！`);
  });

  test('文字以外の値、数字が入ってきてエラーを返却する', () => {
    const name = '123';
    expect(() => {
      helloMessage(name);
    }).toThrowError('名前は文字で入力してください。');
  });

  test('文字数が32文字以上で入ってきてエラーを返却する', () => {
    const name = 'This is a very long name that exceeds the limit';
    expect(() => {
      helloMessage(name);
    }).toThrowError('名前は32文字以内で入力してください。');
  });
});
