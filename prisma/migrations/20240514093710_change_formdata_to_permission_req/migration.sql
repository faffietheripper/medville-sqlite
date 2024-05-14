/*
  Warnings:

  - You are about to drop the `FormData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FormData";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PermissionReq" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "userId" TEXT NOT NULL,
    CONSTRAINT "PermissionReq_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PermissionReq_userId_key" ON "PermissionReq"("userId");
