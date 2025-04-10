import {ReactNode} from 'react';
import styled from '@emotion/styled';

type AppWallProps = {
    children: ReactNode;
};

const StyledAppWall = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--calc-bg, #202020);
    border: 1px solid var(--calc-border-color, #1c1c1c);
    padding: 15px;
    margin: 30px auto;
    width: 90%;
    max-width: 350px;
    min-width: 280px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const AppWall = ({ children }: AppWallProps) => {
    return <StyledAppWall>{children}</StyledAppWall>;
};


export default AppWall;