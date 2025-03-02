ALTER TABLE "events" RENAME COLUMN "event_host" TO "event_host_id";--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "events_event_host_users_id_fk";
--> statement-breakpoint
ALTER TABLE "booked_events" ALTER COLUMN "eventDateTime" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_event_host_id_users_id_fk" FOREIGN KEY ("event_host_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;