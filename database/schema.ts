import { varchar, integer, pgEnum, pgTable, text, timestamp, uuid, boolean } from 'drizzle-orm/pg-core';

// Enums
export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED']);
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);
export const EVENT_ENUM = pgEnum('book_status', ['BOOKED', 'NOT_BOOKED']);

// Users Table
export const users = pgTable('users', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  username: varchar("username", { length: 50 }).notNull().unique(), 
  password: text('password').notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: timestamp('last_activity_date', { withTimezone: true }).defaultNow(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// Events Table
export const events = pgTable('events', {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  eventHost: varchar("event_host", { length: 255 }).notNull(),
  category: text("category").notNull(),
  rating: integer("rating").notNull(),
  coverUrl: text("cover_url").notNull(),
  description: text("description").notNull(),
  totalSpace: integer("total_spaces").notNull().default(1),
  availableSpaces: integer("available_spaces").notNull().default(0),
  eventDateTime: timestamp("eventDateTime", { withTimezone: true }), 
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Bookings Table
export const bookings = pgTable("booked_events", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" }) 
    .notNull(),
  eventId: uuid("event_id")
    .references(() => events.id, { onDelete: "cascade" }) 
    .notNull(),
  bookedDate: timestamp("booked_date", { withTimezone: true }).defaultNow().notNull(),
  eventDateTime: timestamp("eventDateTime", { withTimezone: true }), // ✅ Fixed to match `events`
  isConfirmed: boolean("is_confirmed").default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
