//Helloページ
'use client';
import React, { useState } from 'react';
import { setName } from '../redux/nameSlice';
import { increment } from '../redux/nameSlice';
import { setbeforeName } from '../redux/nameSlice';
import { decrement } from '../redux/nameSlice';
import { useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import Pagetitle from '../components/pagetitle';
import Backbutton from '../components/backbutton';
import HelloMessage from '../components/hellomessage';

export default function Hello() {
  //Action creatorsを実行するためにdispatchを設定
  const dispatch = useDispatch();
  //reduxからnameを取り出す
  const name = useSelector((state: RootState) => state.name.name);
  //reduxからcountを取り出す
  const count = useSelector((state: RootState) => state.name.count);
  //reduxからbeforenameを取り出す
  const beforename = useSelector((state: RootState) => state.name.beforename);

  //名前の変更・編集ボタンがクリックされているかの状態管理
  const [editing, setEditing] = useState(false);
  //新しく入力された値の状態管理
  const [newName, setNewName] = useState('');

  // helloMessage関数 入力チェック
  const HelloMessageResponse = HelloMessage(name);
  // 結果の取得
  const { status, errorCode, message } = HelloMessageResponse;

  //新しく名前が入力された場合呼び出される関数　入力された値を設定
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  //編集ボタンを押された場合にtrueにする関数
  const handleEditClick = () => {
    setEditing(true);
  };

  //登録時にreduxに登録、editingはflaseにする関数
  const handleSaveClick = () => {
    dispatch(setbeforeName(name));
    dispatch(setName(newName));
    dispatch(increment());
    setEditing(false);
    if (status === false) {
      dispatch(decrement());
    }
  };

  return (
    <main className="h-80 text-center">
      <div className="my-20 text-center">
        {/* ページタイトル表示 */}
        <Pagetitle title="Hello!!"></Pagetitle>
      </div>
      <div className="mb-5">
        {status === true ? <p>{message}</p> : <p className="text-red-500">{message}</p>}
        {count > 0 && status === true && (
          <p>
            名前を{beforename}変更前から{name}変更後に変更しました。これが{count}
            回目の変更になります。
          </p>
        )}
      </div>

      {/* 名前の登録・変更 */}
      <div className="mb-3">
        {!editing ? (
          <button className="rounded-lg bg-blue-400 px-4 py-2" onClick={handleEditClick}>
            名前の変更・編集
          </button>
        ) : (
          <>
            <input
              className="mr-2 border border-current"
              type="text"
              value={newName}
              onChange={handleNameChange}
            />
            <button className="rounded-lg bg-green-400 px-4 py-2" onClick={handleSaveClick}>
              登録
            </button>
          </>
        )}
      </div>

      {/* 戻るボタン */}
      <Backbutton></Backbutton>
    </main>
  );
}
