import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  // Retrieves the error caught by the nearest React Router Error Boundary.
  const error = useRouteError();

  // Handles route/HTTP errors, such as a 404 thrown from a loader or action.
  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <h1>
          {error.status} {error.statusText}
        </h1>

        <p>{String(error.data)}</p>
      </main>
    );
  }

  // Handles standard JavaScript runtime errors (Error, TypeError, ReferenceError, etc.).
  if (error instanceof Error) {
    return (
      <main>
        <h1>Something went wrong</h1>

        <p>{import.meta.env.DEV ? error.message : "An unexpected error occurred."}</p>
      </main>
    );
  }

  // Fallback for any unknown value that doesn't match the cases above.
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred.</p>
    </main>
  );
}

export default ErrorPage;
