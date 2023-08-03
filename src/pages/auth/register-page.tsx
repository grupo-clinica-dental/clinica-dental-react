import './user.css';
const RegisterUser = () => {
  return <>
  <div className="form-container">
   <div id='container'>
            <form id="doctor-form">
            <h3>Registros de Doctores</h3>
            <br></br>
            <br></br>
            <label htmlFor="">Nombre:</label>
                <input type="text" id="name"  name="name"></input> 
                <br></br>
                <label htmlFor="">Apellido:</label>
                <input type="text" id="apellido"  name="apellido"></input> 
                <br></br>
                <label htmlFor="">Correo Electronico:</label>
               <input type="email" id="email"  name="email"></input>
               <br></br>
               
               <label htmlFor="">Especialidad:</label>
                 <input type="text" id="specialty"  name="specialty"></input>
                 <br></br>
                <label htmlFor="">Contraseña:</label>
                <input type="text" id="contra"  name="contra"></input> 
                <br></br>
                <br></br>
                <label htmlFor="">Confirmacion:</label>
                <input type="text" id="contra"  name="contra"></input> 
                <br></br>
                
                <button id="boton" type="submit">Registrar:</button>
            </form>
            <div className="doctor-info" id="doctor-ifo">
                <h2>Información Personal</h2>
                <img id="display-photo" src="https://st4.depositphotos.com/1325771/39154/i/450/depositphotos_391545206-stock-photo-happy-male-medical-doctor-portrait.jpg" alt="Foto del doctor" />
                <p>Nombre: <span id="display-name"></span></p>
                <p>Correo electrónico: <span id="display-email"></span></p>
                <p>Número de teléfono: <span id="display-phone"></span></p>
                <p>Especialidad: <span id="display-specialty"></span></p>
                
            </div>
            </div>
           
        </div>


</>
};

export default RegisterUser;
