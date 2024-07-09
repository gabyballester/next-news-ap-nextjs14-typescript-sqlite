"use client";

interface Props {
  error: Error;
}

export default function FilterError({ error }: Props) {
  return (
    <main className="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </main>
  );
}
