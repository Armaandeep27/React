import { useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return isOnline;
} 


// basic custom hook used to detect if user is online or not