import {Container} from './styles';

export function TextButton({icon: Icon, title, to}) {
  return(
    <Container to={to}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
};