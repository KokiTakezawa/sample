//ホームページ

'use client';
import Pagetitle from './components/pagetitle';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Welcomepage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setName(enteredName);
    setIsNameEntered(enteredName !== '');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/hello?name=${encodeURIComponent(name)}`);
  };

  return (
    <main className="h-80">
      <div className="my-20 text-center">
        <Pagetitle title="WELCOME!!"></Pagetitle>
      </div>
      <div className="text-center">
        <p>名前を入力してください。</p>
        <form onSubmit={handleSubmit}>
          <label className="mx-2">
            Name:
            <input
              type="text"
              className="border border-current"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <button
            type="submit"
            disabled={!isNameEntered}
            className={`bg-transparent py-1 ${
              isNameEntered ? 'opacity-100' : 'opacity-0'
            } rounded bg-blue-400 px-2 py-1 text-lg font-semibold text-black shadow-lg transition hover:translate-y-0.5 hover:bg-blue-500 hover:shadow-sm`}
          >
            Helloページへ
          </button>
        </form>
      </div>
    </main>
  );
}
