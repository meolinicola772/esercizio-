import { useRef, FormEvent } from "react";

function UncontrolledForm() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log({
      username: usernameRef.current?.value,
      email: emailRef.current?.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" ref={usernameRef} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" ref={emailRef} />

      <button type="submit">Invia</button>
    </form>
  );
}

export default UncontrolledForm;