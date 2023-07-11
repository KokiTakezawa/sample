//Helloページ
'use client';
import Pagetitle from '../components/pagetitle';
import Backbutton from '../components/backbutton';
import { useSearchParams } from 'next/navigation';

export default function Hello() {
  const params = useSearchParams();
  const name = params.get('name');
  console.log(name);

  return (
    <main className="h-80 text-center">
      <div className="my-20 text-center">
        <Pagetitle title="Hello!!"></Pagetitle>
      </div>
      <div className="mb-5">
        <p>こんにちは, {name}!</p>
      </div>
      <Backbutton></Backbutton>
    </main>
  );
}
