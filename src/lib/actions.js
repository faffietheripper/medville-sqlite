"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
// Function to retrieve the current user
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  console.log("sess2", session);

  if (session) {
    return session.user;
  } else {
    return null; // No user logged in
  }
}

export async function createRequest(permissionReq) {
  // Assuming you have a function getCurrentUser() to retrieve the current user
  const currentUser = await getCurrentUser();
  console.log("user", currentUser);

  if (!currentUser) {
    // Handle case where there's no logged-in user
    console.error("No user logged in.");
    return;
  }

  // Get user object properties
  const { name, email, role } = currentUser;
  const rawpermissionReq = {
    name: permissionReq.get("name"),
    email: permissionReq.get("email"),
    message: permissionReq.get("message"),
    user: {
      connect: { email: currentUser.email },
    },
  };
  // Test it out:
  console.log("rawpermissionReq", rawpermissionReq);

  try {
    // Save form data to the database using Prisma Client
    const savedData = await prisma.permissionReq.create({
      data: rawpermissionReq,
    });

    console.log("Saved form data:", savedData);
  } catch (error) {
    console.error("Error saving form data:", error);
  }
}

export async function updatePermissionsRequest(permissionReqId, permissionReq) {
  try {
    let updatedPermissionsRequest;

    console.log("damage control", permissionReq);
    // If permissionReqId is provided, update the existing data
    updatedPermissionsRequest = await prisma.permissionReq.update({
      where: {
        id: Number(permissionReqId),
      },
      data: {
        name: permissionReq.name,
        email: permissionReq.email,
        message: permissionReq.message,
        role: permissionReq.role,
      },
      include: {
        user: true,
      },
    });

    console.log("Updated permissions request:", updatedPermissionsRequest);

    return updatedPermissionsRequest;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update permissions request");
  }
}
