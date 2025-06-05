import { LoginForm } from "../components/login-form";


export default function LoginPage() {
  return (
    <div className="w-screen flex items-center justify-center min-h-screen bg-muted px-4">
    <div className="w-full max-w-md">
      <LoginForm />
    </div>
  </div>
  );
}