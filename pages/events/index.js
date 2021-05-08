import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventSearch';

const EventPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);
  };

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default EventPage;
