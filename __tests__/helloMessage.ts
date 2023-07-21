import { HelloMessage } from '../src/app/tests/hellomessage';

describe('HelloMessage', () => {
  it('正常処理', () => {
    const name = 'takezawa';
    const response = HelloMessage(name);

    expect(response.status).toBe(true);
    expect(response.errorCode).toBe(0);
    expect(response.message).toBe(`こんにちは、${name}`);
  });

  it('未入力の場合', () => {
    const name = '';
    const response = HelloMessage(name);

    expect(response.status).toBe(false);
    expect(response.errorCode).toBe(1);
    expect(response.message).toBe('名前を入力してください。');
  });

  it('英字およびUTF-8文字以外の文字が含まれる場合', () => {
    const name = 'takezawa123';
    const response = HelloMessage(name);

    expect(response.status).toBe(false);
    expect(response.errorCode).toBe(1);
    expect(response.message).toBe('英字およびUTF-8文字のみを入力してください。');
  });

  it('32文字以上ある場合', () => {
    const name = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttest';
    const response = HelloMessage(name);

    expect(response.status).toBe(false);
    expect(response.errorCode).toBe(1);
    expect(response.message).toBe('名前は32文字以下で入力してください。');
  });
});
