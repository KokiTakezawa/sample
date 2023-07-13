//ウェルカムページ
'use client';
import Pagetitle from '../components/pagetitle';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/nameSlice';

const WelcomePage = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Helloページへ
    dispatch(setName(inputName));
    console.log(router);
    router.push('/hello');
  };

  const isInputNameValid = inputName.trim() !== '';

  return (
    <main className="h-80">
      <div className="my-20 text-center">
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
          {isInputNameValid && (
            <button
              className="rounded bg-blue-400 px-2 py-1 text-lg font-semibold text-black shadow-lg transition hover:translate-y-0.5 hover:bg-blue-500 hover:shadow-sm"
              type="submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default WelcomePage;
