import { useState } from "react";
import { useEffect } from "react";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export function useFetchUser(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(`${userApiUrl}/${userId}`, {
          signal: controller.signal
        });
        const data = await response.json();
        setUserData(data);
        setError(undefined);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        // Adding a slight delay before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [userId]); // Re-run effect when userId changes

  return { userData, loading, error };
}
