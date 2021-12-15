import { Link } from "react-router-dom";

/*
Notfound component is rendered if the user accidentally types something that doesn't exist after the base url,
for example /example. It contains the link to return to the Homepage of the app.
*/

const Notfound = () => {
  return (
    <div>
      <p>Sorry, that page doesn't exist. Click here to return to home page:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Notfound;
