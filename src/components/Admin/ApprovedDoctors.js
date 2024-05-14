import React from "react";
import { getApprovedDoctors } from "../../lib/data"; // Import the function to fetch form data with user
import { UpdateRequest } from "../buttons";

export async function ApprovedDoctors() {
  const approvedDoctors = await getApprovedDoctors(); // Fetch form data with user

  return (
    <div className="text-black">
      <h1 className="mb-8 text-2xl font-bold">Approved Doctors</h1>
      <ul>
        {approvedDoctors.map((permissionReq) => (
          <li key={permissionReq.id} className="mb-10">
            {/* <div>ID: {permissionReq.userId}</div> */}
            <div>ID: {permissionReq.id}</div>
            <div>Name: {permissionReq.name}</div>
            <div>Email: {permissionReq.email}</div>
            <div>Role: {permissionReq.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApprovedDoctors;
