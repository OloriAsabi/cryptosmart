import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

const Exchanges: React.FC= () => {
  return (
     <IonPage>
         <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Exchanges</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Exchanges</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
    </IonPage>
  )
}

export default Exchanges