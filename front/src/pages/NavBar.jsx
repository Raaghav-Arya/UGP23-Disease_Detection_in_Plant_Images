import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='App-header'>
      <nav>
        <Link to="/">
          <img className="brand" src={require("./CropShield_logo.png")} alt="CropShield.AI Logo"></img>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;