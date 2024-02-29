import {Container} from './styles';

import {GoX, GoPlus} from 'react-icons/go';

export function MovieTag({isNew, value, onClick, ...rest}) {
  return(
    <Container $isnew={isNew} >
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <GoPlus/> : <GoX/>}
      </button>
    </Container>
  );
};