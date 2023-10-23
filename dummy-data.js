const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some other training event",
    eventType: "Training1",
    description: "Some other training event",
    location: "A street Tampere",
    startTime: "2022-06-21T14:30:00",
    endTime: "2022-06-21T16:00:00",
    image: "images/training1.webp",
    isFeatured: false,
  },
  {
    id: "2",
    title: "Away game at Turku",
    eventType: "Match",
    description: "Some match",
    location: "Some street, Turku",
    startTime: "2023-08-21T14:30:00",
    endTime: "2023-08-21T17:00:00",
    image: "images/match.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Some training event",
    eventType: "Training2",
    description: "Some match",
    location: "Some street, Turku",
    startTime: "2023-06-21T14:30:00",
    endTime: "2023-06-21T16:00:00",
    image: "images/training2.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.startTime);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getHumanReadableDate(dateString) {
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
