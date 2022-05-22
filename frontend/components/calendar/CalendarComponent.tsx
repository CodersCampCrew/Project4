import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
	{
		title: "New event",
		start: new Date(),
	},
	{
		title: "Uczeń 1",
		start: "2022-05-23T09:00:00",
		end: "2022-05-23T22:00:00",
	},
	{
		title: "Uczeń 2",
		start: "2022-05-23T10:00:00",
		end: "2022-05-23T22:00:00",
	},
];

const CalendarComponent = () => {

  useEffect(() => {
    
  
    
  }, [])
  

	const renderEventContent = (eventInfo: any) => {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	};

	return (
		<FullCalendar
			firstDay={1}
			locale={"pl"}
			editable={true}
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			// initialEvents={INITIAL_EVENTS}
			nowIndicator={true}
			initialView="dayGridMonth"
			selectable={true}
			selectMirror={true}
			dayMaxEvents={true}
			eventContent={renderEventContent}
      events={events}
		/>
	);
};

export default CalendarComponent;
