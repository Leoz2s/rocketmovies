import {styled} from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'Header'
    'Content';

  > main {
    margin: 0 auto;

    display: grid;
    gap: 2rem;

    
    #section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    #movies-cards {
      display: grid;
      gap: 1rem;
      
      overflow-y: auto;
    }
  }

`;