const PatientsPage = () => {
  // simulacion de informacion 
  const patientData = [
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "123-456-7890",
      email: "juan@example.com",
      fechaNacimiento: "1990-05-15",
      estado: "Activo",
    },
    
  ];

  return (
    <main>
      <h1 className="text-5xl font-bold">This is Patients Page</h1>
      <p>Aquí va una tabla de los pacientes</p>
      
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">#</th>
            <th className="border border-gray-400 p-2">Nombre</th>
            <th className="border border-gray-400 p-2">Teléfono</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Fecha de Nacimiento</th>
            <th className="border border-gray-400 p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient) => (
            <tr key={patient.id} className="text-center">
              <td className="border border-gray-400 p-2">{patient.id}</td>
              <td className="border border-gray-400 p-2">{patient.nombre}</td>
              <td className="border border-gray-400 p-2">{patient.telefono}</td>
              <td className="border border-gray-400 p-2">{patient.email}</td>
              <td className="border border-gray-400 p-2">{patient.fechaNacimiento}</td>
              <td className="border border-gray-400 p-2">{patient.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default PatientsPage;
