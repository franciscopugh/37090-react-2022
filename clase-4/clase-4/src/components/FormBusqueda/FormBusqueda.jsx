const FormBusqueda = ({busqueda}) => {
    return (
       
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={busqueda} aria-label="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
       
        
    );
}

export default FormBusqueda;
