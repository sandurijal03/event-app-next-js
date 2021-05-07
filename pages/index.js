import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

const Homepage = () => {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Homepage;
