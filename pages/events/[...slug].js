import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/ErrorAlert";

function FilteredEventsPage(props) {
  if (props.hasError) {
    return (
      <ErrorAlert className="center">
        Invalid Filter Criteria. Please check...
      </ErrorAlert>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <ErrorAlert>No Events Found!!</ErrorAlert>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
    },
  };
}

export default FilteredEventsPage;
