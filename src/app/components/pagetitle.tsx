//ページタイトルコンポーネント
import React from 'react';
import styled from 'styled-components';

//styled-componentsを使ってみた
const MyStyledComponent = styled.div`
  text-decoration: underline;
`;

//ページタイトルを返す
type Props = {
  title: string;
};

const Pagetitle = ({ title }: Props) => {
  return (
    <MyStyledComponent>
      <h1 className="text-lg font-bold">{title}</h1>
    </MyStyledComponent>
  );
};

export default Pagetitle;
