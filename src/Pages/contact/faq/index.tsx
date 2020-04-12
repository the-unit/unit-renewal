import React from 'react';
import styled from 'styled-components';

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
}

const FAQ: React.FC<IFAQ> = ({children, title, description1, description2}) => {
  return (
    <FaqContainer>
      <FaqTitleContainer>
        {title}
      </FaqTitleContainer>
      <FaqDescContainer>
        {description1} <br/>
        {description2}
      </FaqDescContainer>
    </FaqContainer>
  );
}


export default FAQ;