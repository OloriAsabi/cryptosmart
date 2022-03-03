import React, { useEffect, useState } from 'react'
import { IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';
import { Card, Col, Input, Row } from 'antd';
import Loading from '../Loading';
import { useGetCryptosQuery } from '../../services/cryptoApi';

interface Stats {
    simplified: any;
  }

const Cryptocurrency: React.FC<Stats>= ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
     const [searchItem, setSearchItem] = useState("");
  
    useEffect(() => {
      const filterData = cryptoList?.data?.coins.filter((coin: {name: string}) =>
        coin.name.toLowerCase().includes(searchItem.toLowerCase())
      );
  
      setCryptos(filterData);
    }, [cryptoList, searchItem]);
  
  console.log(cryptos)
  
  return (
     <IonPage>
         <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Cryptocurrencies</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Cryptocurrencies</IonTitle>
        </IonToolbar>
      </IonHeader>

   {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      )}

      { isFetching ? <Loading/> :
    (
    <IonGrid>
 <Row gutter={[32, 32]}  className='crypto-card-container'>
      {cryptos?.map((currency:
       { id: React.Key | null | undefined , rank: any, name: any, iconUrl: string, price: string, marketCap: string, change: string}
       ) => ( 
     
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/cryptocurrencies/${currency.id}`}>
          <Card
             title={`${currency.rank}. ${currency.name}`}
             hoverable
             extra={
               <img src={currency.iconUrl} className="crypto-image" alt="" />
             }
              >
                <p>Price: {currency.price}</p>
                <p>Market Cap: {currency.marketCap}</p>
                <p>Daily Change: {currency.change}</p>
        </Card>
          </Link>
        </Col>
      ))}
       </Row>
    </IonGrid>
    )}
    </IonContent>
    </IonPage>
  )
}


export default Cryptocurrency