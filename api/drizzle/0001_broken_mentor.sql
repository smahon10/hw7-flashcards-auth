PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_decks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`numberOfCards` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_decks`("id", "title", "numberOfCards") SELECT "id", "title", "numberOfCards" FROM `decks`;--> statement-breakpoint
DROP TABLE `decks`;--> statement-breakpoint
ALTER TABLE `__new_decks` RENAME TO `decks`;--> statement-breakpoint
PRAGMA foreign_keys=ON;