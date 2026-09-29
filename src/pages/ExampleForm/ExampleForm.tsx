import { Form, useActionData } from "react-router";
import type { ActionFunctionArgs } from "react-router";

type ActionData = {
  error?: string;
  success?: boolean;
};

function ExampleForm() {
  const actionData = useActionData() as ActionData | undefined;

  return (
    <main>
      <h1>Example Form</h1>

      <Form method="post">
        <label>
          Email
          <input type="email" name="email" />
        </label>

        <button type="submit">Submit</button>
      </Form>

      {actionData?.error && <p>{actionData.error}</p>}
      {actionData?.success && <p>Form submitted successfully</p>}
    </main>
  );
}

export async function exampleFormAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return {
      error: "Email is required.",
    };
  }

  return {
    success: true,
  };
}

export default ExampleForm;
