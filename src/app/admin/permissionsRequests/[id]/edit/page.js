import UpdatePermissionReq from "@/components/Admin/UpdatePermissionReq";
import { getPermissionsRequestById } from "@/lib/data";
import React from "react";

export default async function Page({ params }) {
  const PermissionsRequestById = await getPermissionsRequestById(params.id);
  console.log("source of id", PermissionsRequestById);

  return (
    <div className="text-black p-40">
      <div>ID: {params.id}</div>
      <h1 className="mb-8 text-2xl font-bold">Request By Id</h1>
      <UpdatePermissionReq PermissionsRequestById={PermissionsRequestById} />
    </div>
  );
}
