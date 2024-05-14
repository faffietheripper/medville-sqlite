import React from "react";
import { getPermissionsRequests } from "../../lib/data"; // Import the function to fetch form data with user
import { UpdateRequest } from "../buttons";

export async function PermissionReqs() {
  const permissionRequest = await getPermissionsRequests(); // Fetch form data with user

  return (
    <div className="text-black">
      <h1 className="mb-8 text-2xl font-bold">Permissions Requests</h1>
      <ul>
        {permissionRequest.map((permissionReq) => (
          <li key={permissionReq.id} className="mb-10">
            {/* <div>ID: {permissionReq.userId}</div> */}
            <div>ID: {permissionReq.id}</div>
            <div>Name: {permissionReq.user.name}</div>
            <div>Email: {permissionReq.user.email}</div>
            <div>Message: {permissionReq.message}</div>
            <div>Role: {permissionReq.user.role}</div>
            <UpdateRequest id={permissionReq.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PermissionReqs;
