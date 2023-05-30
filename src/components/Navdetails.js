import { Link } from "react-router-dom";

const NavDetails = () => (
  <>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <li>Mic</li>
      <li>Setting</li>
    </ul>
  </>
);

export default NavDetails;
