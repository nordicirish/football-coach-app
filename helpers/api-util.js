export async function getAllEvents() {
  const response = await fetch(
    "https://football-coach-app-402512-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await response.json();
  const events = [];
  // create an array of objects from the data
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.startTime);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

// move to helpers/date-util.js
export async function getHumanReadableDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fi-Fi", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
}
