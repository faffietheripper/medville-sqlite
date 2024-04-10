import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

const prisma = new PrismaClient();

// Function to fetch form data along with associated user data
export async function getFormDataWithUser() {
  try {
    const formDataWithUser = await prisma.formData.findMany({
      include: {
        user: true, // Include user data associated with each form data
      },
    });

    return formDataWithUser;
  } catch (error) {
    console.error("Error fetching form data with user:", error);
    return null;
  }
}

export async function getDocRequestById(formDataId) {
  // noStore();

  //  const formDataWithUser = await getFormDataWithUser();

  try {
    const docRequest = await prisma.formData.findFirst({
      where: {
        id: Number(formDataId),
      },
      include: {
        user: true, // Include user data associated with each form data
      },
    });

    console.log("trialid", docRequest);
    return docRequest;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Doc Request: " + error.message);
  }
}
