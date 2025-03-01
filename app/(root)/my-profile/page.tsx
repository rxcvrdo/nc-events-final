import { signOut } from "@/app/api/auth/auth";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { sampleEvents } from "@/constants";
import React from "react";

const page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>logout</Button>
      </form>
      <EventList title="Booked events" events={sampleEvents} />
    </>
  );
};

export default page;
