import React from "react";
import { getFormDataWithUser } from "../lib/data"; // Import the function to fetch form data with user
import { UpdateRequest } from "./buttons";

export async function FormDataPage() {
  const formDataWithUser = await getFormDataWithUser(); // Fetch form data with user

  return (
    <div className="text-black">
      <h1 className="mb-8 text-2xl font-bold">Form Data</h1>
      <ul>
        {formDataWithUser.map((formData) => (
          <li key={formData.id} className="mb-10">
            {/* <div>ID: {formData.userId}</div> */}
            <div>ID: {formData.id}</div>
            <div>Name: {formData.user.name}</div>
            <div>Email: {formData.user.email}</div>
            <div>Message: {formData.message}</div>
            <div>Role: {formData.user.role}</div>
            <UpdateRequest id={formData.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormDataPage;
