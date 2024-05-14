"use client";

import { createRequest } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function PermissionsReqForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createRequest, initialState);

  return (
    <form action={createRequest}>
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="text" placeholder="Message" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
}
