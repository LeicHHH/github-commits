import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonList, IonItem, IonLabel, IonLoading } from '@ionic/react';

export const CommitList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.github.com/repos/<username>/<repo>/commits');
      setCommits(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <IonLoading isOpen={true} message={'Loading commits...'} />;
  }

  return (
    <IonList>
      {commits.map((commit: any) => (
        <IonItem key={commit.sha}>
          <IonLabel>
            <h2>{commit.commit.message}</h2>
            <p>{commit.commit.author.name}</p>
            <p>{commit.commit.author.date}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};