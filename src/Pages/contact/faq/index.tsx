import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const FaqContainer = styled.div`
  height: 136px;
`

const FaqTitleContainer = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin: 20px 48px 4px 48px; 
`

const FaqDescContainer = styled.div`
  margin: 0 48px 0 48px;
  font-size: 16px; 
`

type IFAQ = {
  title: string;
  description1: string;
  description2: string;
  isLoading?: boolean;
}

const FAQ: React.FC<IFAQ> = ({title, description1, description2, isLoading = false}) => {
  return (
    <FaqContainer>
      <FaqTitleContainer>
        {
          (isLoading)? <div style={{fontSize: '30px', width: '300px'}}><Skeleton/></div>: <div>{title}</div>
        }
      </FaqTitleContainer>
      <FaqDescContainer>
        {
          (isLoading)? <div style={{fontSize: '20px', width: '270px'}}><Skeleton/></div>: <div>{description1}</div>
        }
        {
          (isLoading)? <div style={{fontSize: '20px', width: '270px'}}><Skeleton/></div>: <div>{description2}</div>
        }
      </FaqDescContainer>
    </FaqContainer>
  );
}


export default FAQ;