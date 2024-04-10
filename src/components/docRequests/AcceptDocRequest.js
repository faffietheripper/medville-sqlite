import { updateDocRequest } from "@/lib/actions";
import { getDocRequestById } from "@/lib/data";

export default function EditDocRequestForm({ DocRequestById }) {
  async function submit(data) {
    "use server";
    console.log(data);

    const docRequestId = data.get("userId");
    const DocRequestById = await getDocRequestById(docRequestId);

    // Make the user attached to the DocRequest a "doctor"
    DocRequestById.user.role = "doctor";

    // Mark this DocRequest has having been completed
    DocRequestById.delete();

    // Notify the User
  }

  //change the name of your formdata to doc requests
  return (
    <form action={submit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* DocRequestId ID */}
        <div className="mb-4">
          <label htmlFor="userId" className="mb-2 block text-sm font-medium">
            Doc Request ID
          </label>
          <input
            id="userId"
            name="userId"
            type="text"
            // defaultValue={DocRequestById.userId}
            value={DocRequestById.userId}
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
            defaultValue={DocRequestById.name}
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
            defaultValue={DocRequestById.email}
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
            defaultValue={DocRequestById.message}
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
          defaultValue={DocRequestById.user.role}
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
