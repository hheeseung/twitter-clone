import { auth } from "../service/firebase";

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
