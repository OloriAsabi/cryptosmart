import React, { useEffect } from 'react'
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {Card, Col, Input, Row} from 'antd';

import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

interface Stats {
  simplified: any;
}

const Cryptocurrencies: React.FC<Stats> = ({ simplified }) => {
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
<IonContent>
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
       { uuid: React.Key | null | undefined , rank: any, name: any, iconUrl: string, price: string, marketCap: string, change: string}
       ) => ( 
     
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
          <Link to={`/cryptocurrencies/${currency.uuid}`}>
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
    )};
   </IonContent>

  )
}

export default Cryptocurrencies