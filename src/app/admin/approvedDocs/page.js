//this is where all the doctors that have been approved by admin will be !

import ApprovedDoctors from "@/components/Admin/ApprovedDoctors";
import React from "react";

export default function page() {
  return (
    <>
      <main className="p-40">
        <ApprovedDoctors />
      </main>
    </>
  );
}
