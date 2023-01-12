// Packages
import { useEffect, useContext } from "react";

// Socket
import socketInstance from "../../socket/socket";

// Contexts
import { UserContext } from "../../contexts/UserContext";

export default function ChatPage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const socket = socketInstance;
    }
  }, []);
  return <div>Chat Page</div>;
}
