import {Container} from './styles';

export function Textarea({placeholder, ...rest}) {
  return(
    <Container
      placeholder={placeholder}
      {...rest}
    >
    </Container>
  );
};