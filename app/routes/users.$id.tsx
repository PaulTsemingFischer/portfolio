// app/routes/users.$id.tsx
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Server-side data loading
export async function loader({ params }: LoaderFunctionArgs) {
  const userId = params.id;
  const user = await fetchUser(userId);

  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  return json({ user });
}

// Client-side component
export default function UserProfile() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Joined: {user.joinDate}</p>
    </div>
  );
}

// Helper function (could be in a separate file)
async function fetchUser(id: string) {
  const response = await fetch(`https://api.example.com/users/${id}`);
  return response.json();
}
