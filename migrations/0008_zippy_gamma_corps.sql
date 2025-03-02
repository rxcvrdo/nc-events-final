ALTER TABLE "booked_events" DROP CONSTRAINT "booked_events_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "booked_events" DROP CONSTRAINT "booked_events_event_id_events_id_fk";
--> statement-breakpoint
ALTER TABLE "booked_events" ALTER COLUMN "event_date" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "booked_events" ALTER COLUMN "event_date" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "booked_events" ADD COLUMN "is_confirmed" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "booked_events" ADD CONSTRAINT "booked_events_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "booked_events" ADD CONSTRAINT "booked_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;