"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "sending comment..." : "send comment"}
    </button>
  );
}
