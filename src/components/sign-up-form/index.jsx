import Input from "../inputField";

export default function SignUpForm() {
  return (
    <form className="flex flex-col p-2 border gap-1">
      <h1>Sign up form</h1>
      <Input inputName="firstName" />
      <Input inputName="lastName" />
      <Input inputName="email" />
      <Input inputName="password" />
      <Input inputName="confirmPassword" />
    </form>
  );
}
