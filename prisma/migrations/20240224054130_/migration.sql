/*
  Warnings:

  - You are about to drop the column `formDataId` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_FormDataToSession" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_FormDataToSession_A_fkey" FOREIGN KEY ("A") REFERENCES "FormData" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_FormDataToSession_B_fkey" FOREIGN KEY ("B") REFERENCES "Session" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "role" TEXT
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name", "role") SELECT "email", "emailVerified", "id", "image", "name", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "message" TEXT NOT NULL DEFAULT '',
    "userId" TEXT,
    CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_FormData" ("email", "id", "message", "name", "userId") SELECT "email", "id", "message", "name", "userId" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_FormDataToSession_AB_unique" ON "_FormDataToSession"("A", "B");

-- CreateIndex
CREATE INDEX "_FormDataToSession_B_index" ON "_FormDataToSession"("B");
