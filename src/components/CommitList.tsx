import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonList, IonItem, IonLabel, IonSpinner } from '@ionic/react';

export const CommitList: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/LeicHHH/github-commits/commits');
                setCommits(response.data);
                setLoading(false);
            }
            catch (e) {
                console.log(e)
            }
        };
        fetchData()
            ;
    }, []);

    if (loading) {
        return <div className="ion-text-center" style={{ margin: '35vh 0 0 0', justifyContent: 'center'}} >
            <IonSpinner name="lines" />
            <p>Loading commits...</p>
            </div>;
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