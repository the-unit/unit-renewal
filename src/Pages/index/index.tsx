import React from 'react';
import Banner from './banner';
import Events from './events';
import WhiteDevider from '../../Components/WhiteDevider';
import Divider from '../../Components/Divider';
import Partners from './partners';
import Sponsors from './sponsors';

export default function Index() {
  return (
    <div>
      <Banner />
      <WhiteDevider />
      <Events />
      <Divider title={'Partner'} />
      <Partners />
      <Divider title={'Sponsor'} style={{ marginTop: 25 }} />
      <Sponsors />
    </div>
  );
}
