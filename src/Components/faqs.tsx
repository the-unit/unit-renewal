import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface FAQ {
  title: string;
  description1: string;
  description2: string;
}

interface FAQS {
  faqs: FAQ[];
}

const FAQ_LIST = gql`
  {
    faqs {
      title
      description1
      description2
    }
  }
`;

export default function FAQS() {
  const { loading, error, data } = useQuery<FAQS>(FAQ_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.faqs.map(({ title, description1, description2 }) => (
        <div key={title} title={title}>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      ))}
    </div>
  );
}
