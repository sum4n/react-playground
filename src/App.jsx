import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page from the app!</h1>
      <p>Here are some example of links to pages:</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="profile/popeye">Popeye</Link>
          </li>
          <li>
            <Link to="profile/spinach">Spinach</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="guild">Guild</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
