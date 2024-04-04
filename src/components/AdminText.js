import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function AdminText() {
  const { session } = await getServerSession(authOptions);
  console.log("adminsess", session);

  return (
    <main>
      <h1>this is admin{JSON.stringify(session)}</h1>
    </main>
  );
}
