//戻るボタン
import { useRouter } from 'next/navigation';
import { reset } from '../redux/nameSlice';
import { useDispatch } from 'react-redux';

const BackButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // ここからrouterを使用して操作を行います
  const handleGoBack = () => {
    dispatch(reset());
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
