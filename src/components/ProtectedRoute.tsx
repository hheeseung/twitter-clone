import { Navigate } from "react-router-dom";
import { auth } from "../service/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(auth.currentUser);

  // 로그아웃 시 바로 redirect 될 수 있게 auth의 상태를 체크하도록 한다.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
