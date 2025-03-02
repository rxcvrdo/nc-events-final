ALTER TABLE "booked_events" ALTER COLUMN "eventDateTime" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "events" ALTER COLUMN "eventDateTime" DROP NOT NULL;