import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetups-277ea-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        // transforming the data stored in firebase from object into an array as it expects an array with the map() method in MeetupList comp
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup); // pushing received value into the helper meetups array..
        }

        setIsLoading(false);
        setLoadedMeetups(meetups); // ..setting the helper meetups array as meetups data
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;