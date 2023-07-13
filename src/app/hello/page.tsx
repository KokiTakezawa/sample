//Helloページ
'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Pagetitle from '../components/pagetitle';
import Backbutton from '../components/backbutton';

export default function Hello() {
  const name = useSelector((state: RootState) => state.name);

  //入力した名前表示関数
  const helloMessage = (name: string) => {
    const nameRegex = /^[A-Za-z\u00C0-\u00FF\s]+$/;
    let errorMessage = '';

    // return `こんにちは, ${name}!`;
    if (!nameRegex.test(name)) {
      // throw new Error('nameは文字列である必要があります');
      errorMessage = '無効です。英字およびUTF-8文字のみを入力してください。';
    }

    if (typeof name !== 'string') {
      // throw new Error('nameは文字列である必要があります');
      errorMessage = 'nameは文字列である必要があります';
    }

    if (name.length > 32) {
      // throw new Error('nameは32文字以内である必要があります');
      errorMessage = 'nameは32文字以内である必要があります';
    }

    return errorMessage ? errorMessage : `${name}はじめまして！`;
  };

  return (
    <main className="h-80 text-center">
      <div className="my-20 text-center">
        {/* ページタイトル表示 */}
        <Pagetitle title="Hello!!"></Pagetitle>
      </div>
      <div className="mb-5">
        {/* helloMessage関数表示 */}
        {helloMessage(name)}
      </div>
      {/* 戻るボタン表示 */}
      <Backbutton></Backbutton>
    </main>
  );
}
