CREATE TABLE "booked_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"event_id" uuid NOT NULL,
	"booked_date" timestamp with time zone DEFAULT now() NOT NULL,
	"event_date" date,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "booked_events_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "booked_events" ADD CONSTRAINT "booked_events_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booked_events" ADD CONSTRAINT "booked_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;