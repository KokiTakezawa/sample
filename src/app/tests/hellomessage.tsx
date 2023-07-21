// 関数の型定義
type ValidationResponse = {
  status: boolean;
  errorCode: number;
  message: string;
};

// 名前のチェックを行う関数
export const HelloMessage = (name: string): ValidationResponse => {
  //英字およびUTF-8文字のみ
  const nameRegex = /^[A-Za-z\u00C0-\u00FF\s]+$/;

  try {
    if (name.length === 0) {
      throw new Error('名前を入力してください。');
    } else if (!nameRegex.test(name)) {
      throw new Error('英字およびUTF-8文字のみを入力してください。');
    } else if (name.length > 32) {
      throw new Error('名前は32文字以下で入力してください。');
    } else {
      return {
        status: true,
        errorCode: 0,
        message: `こんにちは、${name}`,
      };
    }
  } catch (error: unknown) {
    //エラーオブジェクトがErrorクラスのインスタンスの場合
    if (error instanceof Error) {
      return {
        status: false,
        errorCode: 1,
        message: error.message,
      };
    } else {
      return {
        status: false,
        errorCode: 2,
        message: '例外エラー',
      };
    }
  }
};

export default HelloMessage;
