import { useEffect, useState } from "react";

export default function useCollections() {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/v1/collections/get-collections");
        const data = await response.json();
        console.log(data.data.collections);
        setCollections(data.data.collections);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCollections();
  }, []);

  return { loading, collections };
}
