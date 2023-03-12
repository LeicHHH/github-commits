import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { CommitList } from '../components/CommitList';

export const CommitHistory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Commit History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CommitList />
      </IonContent>
    </IonPage>
  );
};