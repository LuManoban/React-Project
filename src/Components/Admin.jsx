import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  const [registros, setRegistros] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevoRegistro, setNuevoRegistro] = useState({
    name: '',
    last_name: '',
    username: '',
    email: '',
    role_id: '',
    password: ''
  });
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [roles, setRoles] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    cargarRegistros();
    cargarRoles();
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const cargarRegistros = async () => {
    try {
      const response = await axios.get('https://node-restobar-project.onrender.com/users');
      setRegistros(response.data.results);
    } catch (error) {
      console.error('Error al cargar registros:', error);
    }
  };

  const cargarRoles = async () => {
    try {
      const response = await axios.get('https://node-restobar-project.onrender.com/roles');
      setRoles(response.data.results);
    } catch (error) {
      console.error('Error al cargar roles:', error);
    }
  };

  const handleChange = (e) => {
    setNuevoRegistro({
      ...nuevoRegistro,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registroSeleccionado) {
      modificarRegistro();
    } else {
      try {
        await axios.post('https://node-restobar-project.onrender.com/users', nuevoRegistro, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        cargarRegistros();
        setNuevoRegistro({
          name: '',
          last_name: '',
          username: '',
          email: '',
          role_id: '',
          password: ''
        });
        setShowModal(false);
      } catch (error) {
        console.error('Error al agregar el registro:', error);
      }
    }
  };

  const eliminarRegistro = async (id) => {
    try {
      await axios.delete(`https://node-restobar-project.onrender.com/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      cargarRegistros();
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
    }
  };

  const modificarRegistro = async () => {
    try {
      await axios.patch(`https://node-restobar-project.onrender.com/users/${registroSeleccionado.id}`, nuevoRegistro, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      cargarRegistros();
      setNuevoRegistro({
        name: '',
        last_name: '',
        username: '',
        email: '',
        role_id: '',
        password: ''
      });
      setShowModal(false);
      setRegistroSeleccionado(null);
    } catch (error) {
      console.error('Error al modificar el registro:', error);
    }
  };

  const handleModificar = (registro) => {
    setRegistroSeleccionado(registro);
    setNuevoRegistro({
      name: registro.name,
      last_name: registro.last_name,
      username: registro.username,
      email: registro.email,
      role_id: registro.role_id,
      password: registro.password
    });
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setRegistroSeleccionado(null);
    setNuevoRegistro({
      name: '',
      last_name: '',
      username: '',
      email: '',
      role_id: '',
      password: ''
    });
  };

  return (
    <main className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={toggleModal}>Agregar Usuario</button>
      {showModal && (
       <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
       <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" style={{color:'black'}} >{registroSeleccionado ? 'Modificar Usuario' : 'Agregar Usuario'}</h5>
             <button type="button" className="close" onClick={toggleModal}>
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div className="modal-body">
             <form onSubmit={handleSubmit}>
               <div className="form-group">
                 <label htmlFor="name" style={{color:'black'}} >Nombre:</label>
                 <input type="text" className="form-control" id="name" name="name" value={nuevoRegistro.name} onChange={handleChange} required />
     
                 <label htmlFor="last_name"  style={{color:'black'}}>Apellidos:</label>
                 <input type="text" className="form-control" id="last_name" name="last_name" value={nuevoRegistro.last_name} onChange={handleChange} required />
     
                 <label htmlFor="username"  style={{color:'black'}}>Nombre Usuario:</label>
                 <input type="text" className="form-control" id="username" name="username" value={nuevoRegistro.username} onChange={handleChange} required />
     
                 <label htmlFor="email"  style={{color:'black'}}>Email:</label>
                 <input type="text" className="form-control" id="email" name="email" value={nuevoRegistro.email} onChange={handleChange} required />
     
                 <label htmlFor="role_id"  style={{color:'black'}}> Rol:</label>
                 <select className="form-control" id="role_id" name="role_id" value={nuevoRegistro.role_id} onChange={handleChange} required>
                   <option value="">Seleccionar Rol</option>
                   {roles.map(role => (
                     <option key={role.id} value={role.id}>{role.name}</option>
                   ))}
                 </select>
     
                 {!registroSeleccionado && ( // Mostrar el campo de contraseña solo si no se está actualizando un registro
                   <>
                     <label  style={{color:'black'}} htmlFor="password">Password:</label>
                     <input type="password" className="form-control" id="password" name="password" value={nuevoRegistro.password} onChange={handleChange} />
                   </>
                 )}
               </div>
               <button type="submit" className="btn btn-primary">{registroSeleccionado ? 'Guardar Cambios' : 'Registrar'}</button>
             </form>
           </div>
         </div>
       </div>
     </div>
     
      )}
<table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Rol</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {registros.map((registro, index) => (
      <tr key={registro.id}>
        <td>{index + 1}</td> {/* Enumeración */}
        <td>{registro.name}</td>
        <td>{registro.last_name}</td>
        <td>{registro.username}</td>
        <td>{registro.email}</td>
        <td>{registro.role.name}</td>
        <td>
          <button className="btn btn-danger mr-2" onClick={() => eliminarRegistro(registro.id)}>Eliminar</button>
          <button className="btn btn-primary" onClick={() => handleModificar(registro)}>Modificar</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </main>
  );
};

export default Admin;
