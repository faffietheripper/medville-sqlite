import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/auth";
import FormDataPage from "@/components/formData";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-40">
      This is admin dashboard
      {JSON.stringify(session)}
    </div>
  );
};

export default AdminPage;
