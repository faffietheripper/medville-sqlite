import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/auth";
import PermissionsReqForm from "@/components/Patient/PermissionsReqForm";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  console.log("sessison", session);

  return (
    <div className="p-40 flex flex-col gap-y-10 items-center justify-center">
      <div className="bg-sky-700 text-slate-100 p-2 rounded shadow grid grid-cols-2 mt-9">
        <p>Name:</p>
        <p>{session?.user.name}</p>
        <p>Email:</p>
        <p>{session?.user.email}</p>
        <p>Role:</p>
        <p>{session?.user.role}</p>
      </div>
      <h1 className="text-2xl font-bold">Permissions Request Form</h1>
      <PermissionsReqForm />
    </div>
  );
};

export default ProfilePage;
