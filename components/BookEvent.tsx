"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { bookEvent } from "@/lib/actions/event";

interface Props {
  userId: string;
  eventId: string;
  eventTitle: string;
  eventStartTime: string; // Ensure this is a valid ISO date string
  bookingElegibility: {
    isEligible: boolean;
    message: string;
  };
}

const BookEvent = ({
  userId,
  eventId,
  eventTitle,
  eventStartTime,
  bookingElegibility: { isEligible, message },
}: Props) => {
  const router = useRouter();
  const [booking, setBooking] = useState(false);

  const handleBooking = async () => {
    // ❌ Stop execution if not eligible
    if (!isEligible) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      return;
    }

    setBooking(true);

    try {
      const result = await bookEvent({ eventId, userId });

      if (result?.success) {
        toast({
          title: "Success",
          description: "You have successfully booked the event!",
        });

        // 🗓 Format event details for Google Calendar
        const eventDescription = encodeURIComponent(
          `You have successfully booked the event: ${eventTitle}`
        );
        const eventStart = new Date(eventStartTime)
          .toISOString()
          .replace(/-|:|\.\d+/g, "");
        const eventEnd = new Date(
          new Date(eventStartTime).getTime() + 60 * 60 * 1000
        ) // 1 hour event duration
          .toISOString()
          .replace(/-|:|\.\d+/g, "");

        const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          eventTitle
        )}&details=${eventDescription}&dates=${eventStart}/${eventEnd}`;

        window.open(googleCalendarURL, "_blank"); // Open Google Calendar

        router.push("/my-profile");
      } else {
        toast({
          title: "Error",
          description: result?.error || "Booking failed. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setBooking(false);
    }
  };

  return (
    <Button className="event-overview" onClick={handleBooking} disabled={booking}>
      <p className="font-bebas-neue text-cl text-dark-100">
        {booking ? "Booking..." : "Book Event"}
      </p>
    </Button>
  );
};

export default BookEvent;
