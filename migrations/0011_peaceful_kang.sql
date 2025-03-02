ALTER TABLE "booked_events" ALTER COLUMN "eventDateTime" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "event_host" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "eventDateTime" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_event_host_users_id_fk" FOREIGN KEY ("event_host") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;