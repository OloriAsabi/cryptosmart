import React from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const CryptoDetails: React.FC = () => {

  return (
     <IonPage>
        <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Details</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Details</IonTitle>
        </IonToolbar>
      </IonHeader>
         <h1>  container</h1>
    </IonContent>
  </IonPage>
  )
}

export default CryptoDetails