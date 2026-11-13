import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const query = searchTerm.trim().toLowerCase();

  const filteredMeetups = loadedMeetups.filter((meetup) =>
    [meetup.title, meetup.description, meetup.address]
      .join(' ')
      .toLowerCase()
      .includes(query)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <input className="search-bar" type="search" placeholder="Search by city, country or description" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />

      {filteredMeetups.length === 0 ? (
        <div>
          <p>No meetups match your search :/</p>
          <p>Try out: "Paris", "Italy" or "Kiev" for example.</p>
        </div>
      ) : (
        <MeetupList meetups={filteredMeetups} />
      )}
    </section>
  );
}

export default AllMeetupsPage;