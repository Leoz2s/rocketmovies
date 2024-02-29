import {styled} from 'styled-components';

export const Container = styled.div`
  display: grid;

  > main {
    margin: 0 auto;

    display: grid;
    gap: 2rem;

    height: 70vh;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK_100} ${({theme}) => theme.COLORS.BACKGROUND_800};
    
    #section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    #movies-cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;  

      overflow-y: auto;
    }
  }

`;