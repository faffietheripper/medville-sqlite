import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

const prisma = new PrismaClient();

// Function to fetch form data along with associated user data
export async function getPermissionsRequests() {
  try {
    const permissionRequest = await prisma.permissionReq.findMany({
      include: {
        user: true, // Include user data associated with each form data
      },
    });

    return permissionRequest;
  } catch (error) {
    console.error("Error fetching form data with user:", error);
    return null;
  }
}

export async function getPermissionsRequestById(permissionReqId) {
  // noStore();

  //  const permissionReqWithUser = await getpermissionReqWithUser();

  try {
    const permissionsRequest = await prisma.permissionReq.findFirst({
      where: {
        id: Number(permissionReqId),
      },
      include: {
        user: true, // Include user data associated with each form data
      },
    });

    return permissionsRequest;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Doc Request: " + error.message);
  }
}

//function to get list of users with the role of a doctor from database
export async function getApprovedDoctors() {
  try {
    const approvedDoctors = await prisma.user.findMany({
      where: {
        role: "doctor", // Enclose "doctor" in quotes
      },
    });

    console.log("docs", approvedDoctors);

    return approvedDoctors;
  } catch (error) {
    console.error("Error fetching form data with user:", error);
    return null;
  }
}
