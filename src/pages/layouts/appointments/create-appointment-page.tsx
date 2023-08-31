import { Formik, Form, Field, FieldProps } from 'formik';
import { AutoComplete, DatePicker } from 'antd';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { getDoctorsRequest } from '../../../services/doctors/doctors.service';
import { getPatientsRequest } from '../../../services/patients/patients.service';
import { getTemplatesByTypeRequest } from '../../../services/messages/templates/templates.service';
import { TemplatesByType } from '../../../types/messages/templates/templates.interface';
import { Doctor } from '../../../types/doctors/doctors.interface';

interface FormCreateDateValues {
  doctor_id: number | null;
  paciente_id: number | null;
  date: Dayjs[];
  descripcion: string;
  notas: string;
}

const reminderTemplates = ['Recordatorio 1', 'Recordatorio 2'];
const thankYouTemplates = ['Agradecimiento 1', 'Agradecimiento 2'];

export default function CreateAppPage() {
  const { RangePicker } = DatePicker;
  const [doctors, setdoctors] = useState<Doctor[]>([]);
  const [patients, setpatients] = useState<IPatient[]>([]);
  const [templates, settemplates] = useState<TemplatesByType>({});

  const loadDoctors = async () => {
    const response = await getDoctorsRequest();
    console.log(response);
    setdoctors(response.data.data);
  };

  const loadPatients = async () => {
    const response = await getPatientsRequest();
    setpatients(response.data.data);
  };

  const loadTemplates = async () => {
    const response = await getTemplatesByTypeRequest();
    settemplates(response.data.data);
  };

  useEffect(() => {
    loadDoctors();
    loadPatients();
    loadTemplates();
  }, []);

  const options = doctors?.map((doctor) => ({ value: doctor.id, label: doctor.nombre }));
  const optionsPatients = patients.map((patient) => ({ value: patient.id, label: patient.nombre }));
  const confirmation = templates?.Confirmación?.map((message) => ({ value: message.contenido }));
  const reminder = templates?.Recordatorio?.map((message) => ({ value: message.contenido }));
  // const templateOptions

  const initialFormValues: FormCreateDateValues = {
    doctor_id: null,
    paciente_id: null,
    date: [],
    descripcion: '',
    notas: '',
  };

  return (
    <main className="w-[80%] grow">
      <header>
        <div className="p-10">
          <h1 className="text-2xl font-bold">Create Appointment</h1>
        </div>
      </header>
      <section className="px-10">
        <Formik
          initialValues={initialFormValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form className="flex flex-col" onSubmit={handleSubmit}>
              <RangePicker name="date" showTime={{ format: 'HH:mm' }} format="DD-MM-YYYY HH:mm" onChange={(value) => setFieldValue('date', value)} />

              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Seleccione Doctor"
                optionFilterProp="children"
                onSelect={(val) => setFieldValue('doctor_id', val)}
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                options={options}
              />

              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Seleccione Paciente"
                optionFilterProp="children"
                onSelect={(val) => setFieldValue('paciente_id', val)}
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                options={optionsPatients}
              />

              <Field name="mensajeConfirmacion">
                {({ field }: FieldProps) => (
                  <AutoComplete
                    options={confirmation}
                    onSelect={(value) => setFieldValue('mensajeConfirmacion', value)}
                    // ...otros props
                  >
                    <Input.TextArea {...field} placeholder="Mensaje de confirmación" />
                  </AutoComplete>
                )}
              </Field>

              <Field name="mensajeRecordatorio">
                {({ field }: FieldProps) => (
                  <AutoComplete
                    options={reminder}
                    onSelect={(value) => setFieldValue('mensajeRecordatorio', value)}
                    // ...otros props
                  >
                    <Input.TextArea {...field} placeholder="Mensaje de recordatorio" />
                  </AutoComplete>
                )}
              </Field>

              <Field name="mensajeRecordatorio2">
                {({ field }: FieldProps) => (
                  <AutoComplete
                    options={reminderTemplates.map((template) => ({ value: template }))}
                    onSelect={(value) => setFieldValue('mensajeRecordatorio', value)}
                    // ...otros props
                  >
                    <Input.TextArea {...field} placeholder="Mensaje de recordatorio" />
                  </AutoComplete>
                )}
              </Field>

              <Field name="mensajeAgradecimiento">
                {({ field }: FieldProps) => (
                  <AutoComplete
                    options={thankYouTemplates.map((template) => ({ value: template }))}
                    onSelect={(value) => setFieldValue('mensajeAgradecimiento', value)}
                    // ...otros props
                  >
                    <Input.TextArea {...field} placeholder="Mensaje de agradecimiento" />
                  </AutoComplete>
                )}
              </Field>

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
