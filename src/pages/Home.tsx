import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import useApi from "../hooks/useAPI";

const Home: React.FC = () => {
  const { searchData } = useApi();

  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("SEARCH", searchTerm);
  }, [searchTerm]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchTerm}
          debounce={300} //only trigger when we stop
          onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>

        <IonItem>
          <IonLabel>Select Searchtype</IonLabel>
          <IonSelect
            value={type}
            onIonChange={(e) => setSearchTerm(e.detail.value!)}
          ></IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
