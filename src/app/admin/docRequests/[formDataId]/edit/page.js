import AcceptDocRequest from "@/components/docRequests/AcceptDocRequest";
import { notFound } from "next/navigation";
import { getDocRequestById } from "@/lib/data";
import React from "react";

export default async function Page({ params }) {
  const DocRequestById = await getDocRequestById(params.id);
  console.log("source of id", DocRequestById);

  return (
    <div className="text-black p-40">
      <div>ID: {params.id}</div>
      <h1 className="mb-8 text-2xl font-bold">Request By Id</h1>
      <AcceptDocRequest DocRequestById={DocRequestById} />
    </div>
  );
}
