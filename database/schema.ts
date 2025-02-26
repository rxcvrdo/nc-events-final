import { varchar, integer, pgEnum, pgTable, serial, text, timestamp, uuid, date } from 'drizzle-orm/pg-core';

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED']);
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN']);
export const EVENT_ENUM = pgEnum('book_status', ['BOOKED', 'NOT_BOOKED']);

export const users = pgTable('users', {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  username: varchar("username", { length: 50 }).notNull().unique(), 
  password: text('password').notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: timestamp('last_activity_date', { withTimezone: true }).defaultNow(), // Changed to timestamp
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow()
});
