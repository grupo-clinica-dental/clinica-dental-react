import { Formik, Form, Field, FieldProps } from 'formik';
import { DatePicker, Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

interface FormCreateDateValues {
  doctor_id: number | null;
  paciente_id: number | null;
  date: Dayjs[];
  estado_id: number | null;
  descripcion: string;
  notas: string;
  mensajes: string[];
}

export default function CreateAppPage() {
  const { RangePicker } = DatePicker;

  const initialFormValues: FormCreateDateValues = {
    doctor_id: null,
    paciente_id: null,
    date: [],
    estado_id: null,
    descripcion: '',
    notas: '',
    mensajes: [],
  };

  return (
    <main>
      <header>
        <div className="p-10">
          <h1 className="text-2xl font-bold">Create Appointment</h1>
        </div>
      </header>
      <section className="px-10">
        <Formik
          initialValues={initialFormValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values.date[0].get);
          }}
        >
          {({ handleSubmit, isSubmitting, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
              <RangePicker name="date" showTime={{ format: 'HH:mm' }} format="DD-MM-YYYY HH:mm" onChange={(value) => setFieldValue('date', value)} />
              <button className="bg-maincolor-700 p-2 text-white" type="submit">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
}
