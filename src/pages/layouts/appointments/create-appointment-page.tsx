import { Formik } from 'formik';

export default function CreateAppPage() {
  const initialFormValues = {
    doctor_id: 0,
    paciente_id: 0,
    fecha_inicio: '',
    fecha_final: '',
    estado_id: '',
    descripcion: '',
    notas: '',
    mensajes: '',
  };

  const handleSubmit = () => {
    console.log('submiteando');
  };

  return (
    <main>
      <header>
        <div className="p-10">
          <h1 className="text-2xl font-bold">Create Appointment</h1>
        </div>
      </header>
      <section className="px-10">
        <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <button className="rounded-full bg-maincolor-700 p-3 text-white" disabled={isSubmitting} type="submit">
                Enviar
              </button>
            </form>
          )}
        </Formik>
      </section>
    </main>
  );
}
