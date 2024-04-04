import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/auth";

const Doctor = async () => {
  const session = await getServerSession(authOptions);
  console.log("sessison", session);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-sky-700 text-slate-100 p-2 rounded shadow grid grid-cols-2 mt-9">
        <p>Name:</p>
        <p>{session?.user.name}</p>
        <p>Email:</p>
        <p>{session?.user.email}</p>
        <p>Role:</p>
        <p>{session?.user.role}</p>
        <p>Id:</p>
        <p>{session?.user.id}</p>
      </div>
    </div>
  );
};

export default Doctor;
