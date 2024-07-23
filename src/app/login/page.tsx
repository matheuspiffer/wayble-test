import { AuthForm } from "@/components/auth/auth";

interface LoginPageProps {
  opened: boolean;
  onClose?: () => void;
}
export default function Page(props: LoginPageProps) {
  return <AuthForm></AuthForm>;
}
