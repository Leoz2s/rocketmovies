import {Container} from './styles';

export function Input({placeholder, ...rest}) {
  return(
    <Container 
      placeholder={placeholder}
      {...rest} 
    >

    </Container>
  );
};