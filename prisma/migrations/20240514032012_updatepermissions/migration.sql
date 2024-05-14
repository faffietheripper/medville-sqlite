/*
  Warnings:

  - Made the column `userId` on table `FormData` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "userId" TEXT NOT NULL,
    CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FormData" ("email", "id", "message", "name", "userId") SELECT "email", "id", "message", "name", "userId" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
CREATE UNIQUE INDEX "FormData_userId_key" ON "FormData"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
