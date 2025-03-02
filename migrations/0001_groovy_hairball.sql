CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"host" varchar(255) NOT NULL,
	"category" text NOT NULL,
	"rating" integer NOT NULL,
	"cover_url" text NOT NULL,
	"cover_color" varchar(7) NOT NULL,
	"description" text NOT NULL,
	"total_spaces" integer DEFAULT 1 NOT NULL,
	"available_spaces" integer DEFAULT 0 NOT NULL,
	"summary" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "events_id_unique" UNIQUE("id")
);
