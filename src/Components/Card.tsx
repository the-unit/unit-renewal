import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

interface ILogo {
  url: string;
}

interface ICardContainer {
  logo?: ILogo;
}

const CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 15px;
  border: solid 1px #979797;

  &:not(:last-of-type) {
    margin-right: 4px;
  }
`;

const CardBtnTitle = styled.div`
  font-size: 10px;
  color: #323434;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`;

const CardBottomContainer = styled.div<ICardContainer>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => (props.logo ? '7px' : '15px')};
  margin-right: 16px;
`;

const CardContainer = styled.div`
  display: flex;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const CardInbox = styled.div<ICardContainer>`
  height: ${(props) => (props.logo ? '224px' : '159px')};
  width: 288px;
  object-fit: contain;
  border-radius: 8px;
  border: solid 1px #eeeeee;
`;

const CardTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 16px 0 16px;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 288px;
  height: 104px;
`;

const CardMiddleContainer = styled.div<ICardContainer>`
  margin: 7px 16px 0 16px;
  height: ${(props) => (props.logo ? '40px' : '60px')};
`;

type ICardDescriptionContainer = {
  ellipsisLineCount: number;
};

const CardDescriptionContainer = styled.div<ICardDescriptionContainer>`
  width: 256px;
  //height: 60px;
  color: #323434;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.ellipsisLineCount};
  -webkit-box-orient: vertical;
`;

const CardTitleContainer = styled.div`
  flex: 1;
  height: 27px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

const CardSinceContainer = styled.div`
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  color: rgba(0, 0, 0, 0.45);
`;

type ICard = {
  name: string;
  subName: string;
  logo?: ILogo;
  since?: string;
  slogan: string;
  introduction?: string;
  homepage?: string;
  facebook?: string;
  medium?: string;
};

function getYear(yearMonthDay: string) {
  if (yearMonthDay) {
    return yearMonthDay.split('-')[0];
  } else {
    return '';
  }
}

function renderBtn(title: string, value?: string) {
  if (value) {
    return (
      <CardBtnContainer>
        <a href={value} target="_blank noopener noreferrer">
          <CardBtnTitle>{title}</CardBtnTitle>
        </a>
      </CardBtnContainer>
    );
  } else {
    return null;
  }
}

const Card: React.FC<ICard> = ({
  name,
  logo,
  since,
  slogan,
  introduction,
  homepage,
  facebook,
  medium,
}) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} className={'p-0'}>
      <CardContainer>
        <CardInbox logo={logo}>
          {logo ? (
            <ImageContainer>
              <Image src={logo.url} alt={'logo'} />
            </ImageContainer>
          ) : null}
          <CardTopContainer>
            <CardTitleContainer>{name}</CardTitleContainer>
            <CardSinceContainer>
              {since ? `since ${getYear(since)}` : null}
            </CardSinceContainer>
          </CardTopContainer>
          <CardMiddleContainer logo={logo}>
            <CardDescriptionContainer ellipsisLineCount={logo ? 2 : 3}>
              {introduction}
            </CardDescriptionContainer>
          </CardMiddleContainer>
          <CardBottomContainer logo={logo}>
            {renderBtn('웹페이지', homepage)}
            {renderBtn('f', facebook)}
            {renderBtn('m', medium)}
          </CardBottomContainer>
        </CardInbox>
      </CardContainer>
    </Col>
  );
};

export default Card;
