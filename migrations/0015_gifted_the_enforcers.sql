ALTER TABLE "booked_events" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "booked_events" CASCADE;--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "events_event_host_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "event_host" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "events" DROP COLUMN "event_host_id";