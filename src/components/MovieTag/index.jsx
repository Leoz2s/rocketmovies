import {Container} from './styles';

export function Tag({title, icon: Icon, isNew = ""}) {
  return(
    <Container>
      {isNew ? "New tag" : title}
      {Icon && <Icon size={20} />}
    </Container>
  );
};