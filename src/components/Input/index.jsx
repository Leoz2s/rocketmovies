import {Container} from './styles';

export function Input({icon : Icon, placeholder, ...rest}) {
  return(
    <Container>
      {/* {console.log(icon)} */}
      {/* {console.log(Icon)} */}
      {Icon && <Icon size={20} />}
      <input 
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};