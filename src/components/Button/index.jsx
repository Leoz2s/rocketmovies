import {Container} from './styles';

export function Button({title, loading, icon, ...rest}) {
  return(
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? '' : icon}
      {loading ? "Loading..." : title}
    </Container>
  );
};