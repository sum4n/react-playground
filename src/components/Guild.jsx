import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// this is a custom hook to fetch data
const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos",
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error("server error");
        }
        let actualData = await response.json();
        setImageURL(actualData[0].url);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
    // fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    //   .then((response) => {
    //     if (response.status >= 400) {
    //       throw new Error("server error");
    //     }
    //     return response.json();
    //   })
    //   .then((response) => setImageURL(response[0].url))
    //   .catch((error) => setError(error))
    //   .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Guild = () => {
  const { imageURL, error, loading } = useImageURL();
  return (
    <>
      <h1>This is guild page</h1>
      <Link to="/">Click here to go back</Link>
      {error && <p>{`A network error was encountered - ${error}`}</p>}
      {loading && <p>Loading...</p>}
      {imageURL && (
        <>
          <h1>An image</h1>
          <img src={imageURL} alt={"placeholder text"} />
        </>
      )}
    </>
  );
};

export default Guild;
