const NotFound = () => (
  <div
    className="flex min-h-screen items-center justify-center"
    style={{ backgroundColor: "hsl(var(--muted))" }}
  >
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-4 text-xl opacity-70">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="underline transition-opacity hover:opacity-80"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default NotFound;
