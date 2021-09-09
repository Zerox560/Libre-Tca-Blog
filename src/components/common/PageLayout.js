import { Header } from "./Header";
import styled from "styled-components";

const Content = styled.main`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Open Sans';
`;

export const PageLayout = ({children}) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
        </>
    )
};