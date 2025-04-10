import styled from '@emotion/styled';

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    aspect-ratio: 5 / 4;

background-color: var(--btn-digit-bg, #3b3b3b);
    color: var(--btn-text, white);
    border: 1px solid var(--btn-border, #3b3b3b);
    border-radius: 4px;
    font-size: 1.3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
        background-color: var(--btn-digit-hover-bg, #4c4c4c);
    }

    &:active {
        background-color: var(--btn-digit-active-bg, #5d5d5d);
    }

    &.button-operator {
        background-color: var(--btn-op-bg, #505050);
         &:hover { background-color: var(--btn-op-hover-bg, #6a6a6a); }
         &:active { background-color: var(--btn-op-active-bg, #7a7a7a); }
    }

    &.button-equals {
        background-color: var(--btn-equals-bg, #005A9E);
        color: white;
         &:hover { background-color: var(--btn-equals-hover-bg, #0078D4); }
         &:active { background-color: var(--btn-equals-active-bg, #106EBE); }
    }

    &.button-control { // For C, CE
        background-color: var(--btn-ctrl-bg, #606060);
        &:hover { background-color: var(--btn-ctrl-hover-bg, #7a7a7a); }
        &:active { background-color: var(--btn-ctrl-active-bg, #8a8a8a); }
    }

     &.button-placeholder {
        background-color: transparent;
        border: none;
        cursor: default;
        &:hover, &:active { background-color: transparent; }
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export default ButtonStyle;