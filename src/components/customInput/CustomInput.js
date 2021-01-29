import { useFormikContext } from 'formik';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './CustomInput.css';

const CustomInput = ({ required, ...props }) => {
  const { placeholder, name } = { ...props };
  const  { errors, touched, setFieldTouched, values, setFieldValue } = useFormikContext();

  const newPlaceholder = required ? `${placeholder}*` : placeholder;

  const showError = !!(errors[name] || touched[name]);

  const error = errors[name];

  return (
    <div className='custom-input'>
      <input {...props} placeholder={newPlaceholder} onBlur={() => setFieldTouched(name)}
             value={values[name]} onChange={e => setFieldValue(name, e.target.value)} />
      <ErrorMessage visible={showError} error={error} />
    </div>
  );
};

export default CustomInput;
