import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (<header className='App-header'>
    <nav>
      <img className="brand" src={require("./CropShield_logo.png")} alt="CropShield.AI Logo"></img>
    </nav>
  </header>)
};

export default NavBar;