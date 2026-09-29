import { useRouteError } from "react-router";

function RootErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <h1>Application error</h1>

      <p>
        {import.meta.env.DEV && error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."}
      </p>
    </main>
  );
}

export default RootErrorPage;
