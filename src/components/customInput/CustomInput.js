import { useFormikContext } from 'formik';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './CustomInput.css';

const CustomInput = ({ required, ...props }) => {
  const { placeholder, name } = { ...props };
  const  { errors, touched, values, setFieldValue, handleBlur } = useFormikContext();

  const newPlaceholder = required ? `${placeholder}*` : placeholder;

  const showError = !!(errors[name] || touched[name]);

  const error = errors[name];

  return (
    <div className='custom-input'>
      <input {...props} placeholder={newPlaceholder} onBlur={handleBlur}
             value={values[name]} onChange={e => setFieldValue(name, e.target.value)} />
      <ErrorMessage visible={showError} error={error} />
    </div>
  );
};

export default CustomInput;
