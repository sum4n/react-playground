import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">Click here to go to home page!</Link>
    </div>
  );
};

export default ErrorPage;
