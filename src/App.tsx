import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {onSnapshot, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHNzIu-SbJA-ENGDSM5ghi7E98lARWsl4",
  authDomain: "odds-on-8998a.firebaseapp.com",
  projectId: "odds-on-8998a",
  storageBucket: "odds-on-8998a.appspot.com",
  messagingSenderId: "233976774004",
  appId: "1:233976774004:web:524c2f82545fd3fd2e8021"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const colRef = collection(db, 'hitEvents');

interface Event {
  id: string,
  description: string,
  timeStamp: number,
  name: string,
}

const getEvents = () => {
  let events: Event[] = [];
  getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      events.push({ ...doc.data(), id: doc.id} as Event)
    })
  })
  return events;
}

const Eventslist = (events: Event[]) => {
  return (
    <div>
      {
        events && events.map((e) => {
          return (
            <div key={e.id}>
              <h2>{e.name}</h2>
              <p>{e.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

function App() {
  const [events, setEvents] = useState(getEvents())

//   const unsub = onSnapshot(doc(db, "hitEvents"), (doc) => {
//     setEvents([...events, {...doc.data()} as Event])
// });

  const onClick = async () => {
    const events = await getEvents();
    setEvents(events);
  }

  console.log(events)
  return (
    <div className="App">
      <header className="App-header">
      {/* <button onClick={() => onClick}>GET EVENTS</button> */}
      <div>
      {Eventslist(events)}
      </div>
      </header>
    </div>
  );
}

export default App;
