import React from "react";
import { useSession } from "next-auth/react";
import SignIn from "../../components/SignIn";
const Personal = () => {
  const { data: session } = useSession();
  return <>{!session ? <SignIn /> : <p>Hello</p>}</>;
};

export default Personal;
