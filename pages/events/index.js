import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const EventPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default EventPage;
