import {Container} from './styles';

export function Input({icon : Icon, placeholder, ...rest}) {
  return(
    <Container>
      <label htmlFor={placeholder}>
        {/* {console.log(icon)} */}
        {/* {console.log(Icon)} */}
        {Icon && <Icon size={20} />}
        <input 
          id={placeholder}
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </Container>
  );
};