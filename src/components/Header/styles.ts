import styled from 'styled-components';

export const Container = styled.header`
    background: var(--red);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button {
        font-size: 1rem;
        color: #fff;
        background: transparent;
        border: 0;
        padding: 0 2rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
`