import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Registration schema for the event
export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  company: text("company"),
  jobTitle: text("job_title"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Schema for validating registration data
export const registrationSchema = createInsertSchema(registrations)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email("Format d'email invalide"),
    firstName: z.string().min(1, "Le prénom est requis"),
    lastName: z.string().min(1, "Le nom est requis"),
  });

export type InsertRegistration = z.infer<typeof registrationSchema>;
export type Registration = typeof registrations.$inferSelect;

// Extension of storage interface for registrations
declare module "./storage" {
  interface IStorage {
    createRegistration(data: InsertRegistration): Promise<Registration>;
    getAllRegistrations(): Promise<Registration[]>;
    getRegistrationByEmail(email: string): Promise<Registration | undefined>;
  }
}

// Users schema (from base project)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
