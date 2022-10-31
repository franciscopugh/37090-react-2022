import './navbar.css'
import Dropdown from './Dropdown/Dropdown';
const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <Dropdown/>
      </ul>
      
    </div>
    
      <ul className='navbar-nav me-auto'>
        <li className="nav-item">
          <a className="nav-link" href="#"><button className='btn btn-dark'>Cart</button></a>
        </li>
      </ul>
  </div>
</nav>
        
    );
}

export default Navbar;
