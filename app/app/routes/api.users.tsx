// app/routes/api.users.tsx
import { json, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

// GET /api/users
export async function loader() {
  const users = await getUsers();
  return json({ users });
}

// POST /api/users
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  const newUser = await createUser({ name, email });
  return json({ user: newUser }, { status: 201 });
}

async function getUsers() {
  // Database query
  return [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ];
}

async function createUser(data: any) {
  // Database insertion
  return { id: 3, ...data };
}
