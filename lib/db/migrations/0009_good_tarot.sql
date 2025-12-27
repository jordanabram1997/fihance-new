ALTER TABLE "bills" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "status" SET DEFAULT 'upcoming'::text;--> statement-breakpoint
DROP TYPE "public"."bill_status";--> statement-breakpoint
CREATE TYPE "public"."bill_status" AS ENUM('upcoming', 'paid', 'cancelled');--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "status" SET DEFAULT 'upcoming'::"public"."bill_status";--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "status" SET DATA TYPE "public"."bill_status" USING "status"::"public"."bill_status";--> statement-breakpoint
UPDATE "bills" SET "currency" = 'GBP' WHERE "currency" IS NULL;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "currency" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "assigned_user_id" text;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "created_by_user_id" text;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "paid_at" timestamp;--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "bills" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
UPDATE "bills" SET "created_at" = now() WHERE "created_at" IS NULL;--> statement-breakpoint
UPDATE "bills" SET "updated_at" = now() WHERE "updated_at" IS NULL;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bills" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
CREATE INDEX "bills_org_status_due_idx" ON "bills" USING btree ("organization_id","status","due_date");--> statement-breakpoint
DROP TYPE "public"."recurrence_frequency";