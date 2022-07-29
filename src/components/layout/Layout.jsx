import React from 'react';
import * as S from './styled';
import Header from '../header';

const Layout = ({ children }) => {
  return (

    <S.WrapperLayout>
      <Header></Header>
      {children}
    </S.WrapperLayout >

  )
}


export default Layout