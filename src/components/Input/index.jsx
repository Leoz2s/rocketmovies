import {Container} from './styles';

export function Input({icon : Icon, placeholder, ...rest}) {
  return(
    <Container>
      <label htmlFor="input">
        {/* {console.log(icon)} */}
        {/* {console.log(Icon)} */}
        {Icon && <Icon size={20} />}
        <input 
          id="input"
          placeholder={placeholder}
          {...rest}
        />
      </label>
    </Container>
  );
};