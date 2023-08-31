import { AutoComplete, DatePicker, Input, Select } from 'antd';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AppointmentById() {
  const { RangePicker } = DatePicker;
  const { id } = useParams();

  const [formInitialValues, setformInitialValues] = useState({
    doctor_id: null,
    paciente_id: null,
    date: [],
    descripcion: '',
    notas: '',
  });

  return (
    <section>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form className="flex flex-col" onSubmit={handleSubmit}>
            <RangePicker name="date" showTime={{ format: 'HH:mm' }} format="DD-MM-YYYY HH:mm" onChange={(value) => setFieldValue('date', value)} />

            <Select
              disabled
              showSearch
              style={{ width: 200 }}
              placeholder="Seleccione Doctor"
              optionFilterProp="children"
              onSelect={(val) => setFieldValue('doctor_id', val)}
              // filterOption={(input, option) => (option?.label ?? '').includes(input)}
              // filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
              // options={options}
            />

            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Seleccione Paciente"
              optionFilterProp="children"
              onSelect={(val) => setFieldValue('paciente_id', val)}
              // filterOption={(input, option) => (option?.label ?? '').includes(input)}
              // filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
              // options={optionsPatients}
            />

            <Field name="mensajeConfirmacion">
              {({ field }: FieldProps) => (
                <AutoComplete
                  // options={confirmation}
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
                  // options={reminder}
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
                  // options={reminderTemplates.map((template) => ({ value: template }))}
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
                  // options={thankYouTemplates.map((template) => ({ value: template }))}
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
  );
}
