//ウェルカムページ
'use client';
import Pagetitle from '../components/pagetitle';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/nameSlice';
import Link from 'next/link';

const WelcomePage = () => {
  //入力された名前の定数を設定
  const [inputName, setInputName] = useState('');
  //Action creatorsを実行するためにdispatchを設定
  const dispatch = useDispatch();

  const router = useRouter();

  //React.FormEvent<HTMLFormElement>　formイベントの型指定をしている
  //ないとtypescriptのチェッカーでエラーになる
  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Helloページへ
    //reduxで設定したsetNameに入力値をセット
    dispatch(setName(inputName));
    //helloページへ
    router.push('/hello');
  };
  // const handleLinkClick = (e: SyntheticEvent) => {
  const handleLinkClick = () => {
    dispatch(setName(inputName));
  };

  //文字列前後の空白を削除
  const isInputNameValid = inputName.trim() !== '';

  return (
    <main className="h-80">
      <div className="my-20 text-center">
        {/* ページタイトルコンポーネントからタイトルを取得 */}
        <Pagetitle title="WELCOME!!"></Pagetitle>
      </div>
      <div className="text-center">
        <p>名前を入力してください。</p>
        <form onSubmit={handleNameSubmit}>
          <input
            type="text"
            className="mx-2 border border-current"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          {/* isInputNameValid(名前)が入力されていたら */}
          {isInputNameValid && (
            <button
              className="rounded bg-blue-400 px-2 py-1 text-lg font-semibold text-black shadow-lg transition hover:translate-y-0.5 hover:bg-blue-500 hover:shadow-sm"
              type="submit"
            >
              Submit
            </button>
          )}
          {isInputNameValid && (
            <Link
              href="/hello"
              onClick={handleLinkClick}
              className="rounded bg-blue-400 px-2 py-1 text-lg font-semibold text-black shadow-lg transition hover:translate-y-0.5 hover:bg-blue-500 hover:shadow-sm"
            >
              ボタン
            </Link>
          )}
        </form>
      </div>
    </main>
  );
};

export default WelcomePage;
