"use client";
import { updateDocRequest } from "@/lib/actions";

export default function EditDocRequestForm({ request }) {
  //taking a break - working on dispatch action for updating the request form

  // pass id to the Server Action using JS bind. This will ensure that any values passed to the Server Action are encoded.
  const updateDocRequestWithId = updateDocRequest.bind(null, request.userId);

  console.log("passed down", request);
  return (
    <form action={updateDocRequestWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User ID */}
        <div className="mb-4">
          <label htmlFor="userId" className="mb-2 block text-sm font-medium">
            User ID
          </label>
          <input
            id="userId"
            name="userId"
            type="text"
            defaultValue={request.userId}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            disabled // Assuming user ID is not editable
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={request.name}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={request.email}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            defaultValue={request.message}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            rows={4}
          />
        </div>
      </div>

      {/* User Role */}
      <div className="mb-4">
        <label htmlFor="role" className="mb-2 block text-sm font-medium">
          User Role
        </label>
        <select
          id="role"
          name="role"
          defaultValue={request.user.role}
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button type="submit">Update Request</button>
      </div>
    </form>
  );
}
