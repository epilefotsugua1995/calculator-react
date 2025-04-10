import styled from '@emotion/styled';

type DisplayProps = {
    currentDisplay: string;
}

const StyledDiv = styled.div`
    display: flex;
    background-color: var(--display-bg, #222222);
    color: var(--display-text, white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: right;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    justify-content: flex-end;
`;

const Display = (props: DisplayProps) => {
    return (
        
    <StyledDiv>{props.currentDisplay}</StyledDiv>
    );
}

export default Display;