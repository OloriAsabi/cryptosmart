import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonRouterOutlet  } from '@ionic/react';
import millify from 'millify';
import {Statistic} from "antd"
import { useGetCryptosQuery } from '../../services/cryptoApi';
import News from '../News/News';
import Title from 'antd/lib/typography/Title';

import './Home.css';
import { Link } from 'react-router-dom';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import { Space, Typography } from 'antd';
import { useEffect } from 'react';
interface Stats {
  value?: string | any;
  simplified: boolean
}


const Home: React.FC<Stats>= (Stats)   => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data);

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Global Crypto Stats</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Global Crypto Stats</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonGrid className='ion-padding'>
      <IonRow>
        <IonCol size="12" size-sm="6"><Statistic title='Total Cryptocurrencies' value={globalStats?.total}/></IonCol>
        <IonCol size="12" size-sm="6"><Statistic title='Total Exchanges' value={globalStats?.totalExchanges}/></IonCol>
        <IonCol size="12" size-sm="6"><Statistic title='Total Market Cap' value={globalStats?.totalMarketCap}/></IonCol>
        <IonCol size="12" size-sm="6"><Statistic title='Total 24 Volume' value={globalStats?.total24hVolume}/></IonCol>
        <IonCol size="12" size-sm="6"><Statistic title='Total Markets' value={globalStats?.totalMarkets}/></IonCol>
      </IonRow>
      </IonGrid>
      <div className="home-heading-container ion-padding">
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>  
      <Title level={3} className="show-more"><Link to="/cryptocurrency">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
      <Title level={2} className="home-title">Latest Crypto News</Title>  
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/> 
    </IonContent>
    {/* <IonContent>
    <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CoinCrypto <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
   </IonContent> */}
  </IonPage>
  )
}

export default Home