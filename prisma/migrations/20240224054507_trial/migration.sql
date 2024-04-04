/*
  Warnings:

  - You are about to drop the `_FormDataToSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_FormDataToSession_B_index";

-- DropIndex
DROP INDEX "_FormDataToSession_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_FormDataToSession";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "message" TEXT NOT NULL DEFAULT '',
    "userId" TEXT,
    CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Session" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_FormData" ("email", "id", "message", "name", "userId") SELECT "email", "id", "message", "name", "userId" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
