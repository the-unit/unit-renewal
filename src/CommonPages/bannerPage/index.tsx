import React from 'react';
import styled from 'styled-components';
import Banner from './banner';
import Search from './search';
import Btn from '../../Components/Btn';

type IBannerPage = {
  title: string;
  desc1: string;
  desc2: string;
  desc3?: string;
  isEdit?: boolean;
  hasSearch?: boolean;
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
  background-color: rgba(0, 163, 0, 0.15);
  margin-top: 348px;
`

const BannerPage: React.FC<IBannerPage> = ({children, title, desc1, desc2, desc3 = '', isEdit= false, hasSearch = false}) => {
  return (
    <BannerContainer>
      <Banner title={title} desc1={desc1} desc2={desc2} desc3={desc3}/>
      {
        hasSearch? <Search/> : null
      }
      {children}
      {
        isEdit? <SubFooter>
          <Btn>{title} 단체등록, 정보수정 요청</Btn>
        </SubFooter> : null
      }
    </BannerContainer>
  );
}

export default BannerPage;