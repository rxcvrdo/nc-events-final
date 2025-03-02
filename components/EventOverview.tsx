"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import EventCover from "./EventCover";
import { Button } from "./ui/button";

const EventOverview = ({
  title,
  eventHost,
  category,
  eventDateTime,
  coverUrl,
  description,
  id,
}: AllEvent) => {

  
  const addToGoogleCalendar = () => {
    const startTime = new Date(eventDateTime).toISOString();
    const endTime = new Date(new Date(eventDateTime).getTime() + 2 * 60 * 60 * 1000).toISOString(); // Assuming 2-hour event

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&details=${encodeURIComponent(
      description
    )}&dates=${startTime.replace(/-|:|\.\d\d\d/g, "")}/${endTime.replace(
      /-|:|\.\d\d\d/g,
      ""
    )}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section className="event-overview flex flex-col lg:flex-row gap-6">
      {/* Left Side */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-gray-700">
          Event by <span className="font-semibold">{eventHost}</span>
        </p>
        <p className="text-gray-700">
          Category: <span className="font-semibold">{category}</span>
        </p>
        <p className="text-gray-700">
          Date:{" "}
          <span className="font-semibold">
            {new Date(eventDateTime).toLocaleString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
        <p className="text-gray-700">{description}</p>

        <Button onClick={addToGoogleCalendar}>Book Event</Button>
      </div>

      {/* Right Side - Event Image */}
      <div className="flex-1 flex justify-center">
        <EventCover variant="wide" className="z-10" coverImage={coverUrl} />
      </div>
    </section>
  );
};

export default EventOverview;
