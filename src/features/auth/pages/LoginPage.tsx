import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import type { LoginFormValues } from "../schemas/login-schema";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (values: LoginFormValues) => {
    console.log("Login values:", values);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1e3a8a] px-4">
      <div className="mb-8 flex items-center gap-3">
        <img src="/logo2.png" alt="Logo" className="h-16" />
        <div className="text-white">
          <h1 className="text-3xl font-bold leading-tight">Innovation</h1>
          <p className="text-lg italic text-blue-200">Platform</p>
        </div>
      </div>

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <LoginForm onSubmit={handleLogin} />
      </div>

      <p className="mt-8 text-sm text-blue-200">
        Copyright &copy; 2025 PT IDSurvey (Persero)
      </p>
    </div>
  );
}
