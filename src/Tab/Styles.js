import styled from 'styled-components';

/* Style the tab */
export const Tab = styled.div`
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
`;

/* Style the buttons inside the tab */
export const TabButton = styled.button`
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
    }
    &.active {
        background-color: #ccc !important;
    }
`;

/* Style the tab content */
export const Tabcontent = styled.div`
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
`;

// tab title
export const Title = styled.h4``;

// tab description
export const Description = styled.p``;

// wrapper
export const Wrapper = styled.div``;