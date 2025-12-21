CREATE TYPE "public"."bill_status" AS ENUM('upcoming', 'paid', 'overdue', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."recurrence_frequency" AS ENUM('daily', 'weekly', 'monthly', 'yearly');--> statement-breakpoint
CREATE TABLE "bills" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"payee_name" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"currency" char(3) DEFAULT 'GBP',
	"due_date" date NOT NULL,
	"status" "bill_status" NOT NULL,
	"recurrence_frequency" "recurrence_frequency",
	"recurrence_interval" integer DEFAULT 1,
	"organization_id" uuid NOT NULL,
	"assigned_user_id" uuid,
	"paid_at" timestamp,
	"created_by_user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX "bills_org_idx" ON "bills" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "bills_assigned_user_idx" ON "bills" USING btree ("assigned_user_id");--> statement-breakpoint
CREATE INDEX "bills_status_idx" ON "bills" USING btree ("status");--> statement-breakpoint
CREATE INDEX "bills_due_date_idx" ON "bills" USING btree ("due_date");