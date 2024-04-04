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

export async function createRequest(formData) {
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
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    user: {
      connect: { email: currentUser.email },
    },
  };
  // Test it out:
  console.log("rawformdata", rawFormData);

  try {
    // Save form data to the database using Prisma Client
    const savedData = await prisma.formData.create({
      data: rawFormData,
    });

    console.log("Saved form data:", savedData);
  } catch (error) {
    console.error("Error saving form data:", error);
  }
}

//function to update doc application request
export async function updateDocRequest(docRequestId, newData) {
  try {
    // Fetch the existing doc request by its ID
    const existingDocRequest = await prisma.formData.findUnique({
      where: {
        userId: docRequestId,
      },
    });

    if (!existingDocRequest) {
      throw new Error(`Document request with ID ${docRequestId} not found`);
    }

    // Update the existing doc request with the new data
    const updatedDocRequest = await prisma.formData.update({
      where: {
        userId: docRequestId,
      },
      data: {
        ...newData,
      },
      include: {
        user: true,
      },
    });

    return updatedDocRequest;
  } catch (error) {
    console.error("Error updating document request:", error);
    throw new Error("Failed to update document request: " + error.message);
  }
}
