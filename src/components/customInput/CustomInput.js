import './CustomInput.css';

const CustomInput = ({ required, ...props }) => {
  const { placeholder } = { ...props };
  const newPlaceholder = required ? `${placeholder}*` : placeholder;

  return <input {...props} placeholder={newPlaceholder} className='custom-input' />;
};

export default CustomInput;
