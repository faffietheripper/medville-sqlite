import AcceptDocRequest from "@/components/docRequests/AcceptDocRequest";
import { notFound } from "next/navigation";
import { getDocRequestById } from "@/lib/data";
import React from "react";

export default async function Page({ id }) {
  const request = await getDocRequestById(id);
  console.log("source", request);

  if (!request) {
    notFound();
  }

  return (
    <div className="text-black p-40">
      <h1 className="mb-8 text-2xl font-bold">Request By Id</h1>
      <AcceptDocRequest request={request} />
    </div>
  );
}
