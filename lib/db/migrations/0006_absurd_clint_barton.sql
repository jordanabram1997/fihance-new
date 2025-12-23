DROP INDEX "bills_assigned_user_idx";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "recurrence_frequency";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "recurrence_interval";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "assigned_user_id";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "paid_at";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "created_by_user_id";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "bills" DROP COLUMN "updated_at";