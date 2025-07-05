// app/routes/todos.tsx
import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";

export async function loader() {
  const todos = await getTodos();
  return json({ todos });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "create") {
    const title = formData.get("title");
    await createTodo({ title, completed: false });
  } else if (intent === "toggle") {
    const id = formData.get("id");
    await toggleTodo(id);
  } else if (intent === "delete") {
    const id = formData.get("id");
    await deleteTodo(id);
  }

  return json({ success: true });
}

export default function Todos() {
  const { todos } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Todo List</h1>

      {/* Add new todo */}
      <Form method="post">
        <input type="hidden" name="intent" value="create" />
        <input
          type="text"
          name="title"
          placeholder="Add a todo..."
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Todo"}
        </button>
      </Form>

      {/* Todo list */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Form method="post" style={{ display: "inline" }}>
              <input type="hidden" name="intent" value="toggle" />
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit">
                {todo.completed ? "✓" : "○"}
              </button>
            </Form>

            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>

            <Form method="post" style={{ display: "inline" }}>
              <input type="hidden" name="intent" value="delete" />
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit">Delete</button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
}
