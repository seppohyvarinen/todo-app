import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <p>Sorry, that page doesn't exist. Click here to return to home page:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Notfound;
