import './CustomTextarea.css';

const CustomTextarea = ({ required, ...props }) => {
  const { placeholder } = { ...props };
  const newPlaceholder = required ? `${placeholder}*` : placeholder;

  return <textarea {...props} placeholder={newPlaceholder} className='custom-textarea' />;
};

export default CustomTextarea;
