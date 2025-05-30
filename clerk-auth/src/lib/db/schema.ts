import { timeStamp } from "console";
import { relations } from "drizzle-orm";
import {
  integer,
  boolean,
  uuid,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const files = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  //basic folder
  name: text("name").notNull(),
  path: text("path").notNull(), // eg - doc/project/resume.pdf
  size: integer("size").notNull(),
  type: text("type").notNull(), // for folder

  // storage

  fileUrl: text("file_url").notNull(),
  thumbnailUrl: text("thumbnail_url"),

  // ownership

  ownerId: text("owner_id").notNull(),
  parentId: text("parent_folder_id"), // null for root folder

  // flags

  isFolder: boolean("is_folder").default(false).notNull(),
  isMarkedStar: boolean("is_star").default(false).notNull(),
  isTrash: boolean("is_trash").default(false).notNull(),

  //time

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
