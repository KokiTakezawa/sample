//戻るボタン
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  // ここからrouterを使用して操作を行います
  const handleGoBack = () => {
    router.back();
  };

  return (
    // JSXを返すコンポーネントの内容
    <button
      onClick={handleGoBack}
      className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
    >
      前のページへ戻る
    </button>
  );
};

export default BackButton;
