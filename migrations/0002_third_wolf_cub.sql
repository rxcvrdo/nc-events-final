ALTER TABLE "events" ADD COLUMN "event_host" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "events" DROP COLUMN "host";