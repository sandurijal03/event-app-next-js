import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
