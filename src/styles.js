import styled from 'styled-components';

export const Row = styled.div`
    &::after{
        content: "";
        clear: both;
        display: table;
    }
`;

export const Column = styled.div`
    display: table-cell;
    float: left;
    width: 50%;
    background: #395C6B;
    veritcal-align:top;

    @media only screen and (max-width: 768px){
        width: 100%
    }
`;

export const AppContainer = styled.div`
    text-align: center;
`;