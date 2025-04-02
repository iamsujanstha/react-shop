import styled from "styled-components";
import ProductList from "../core/ProductList";


export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainLayout>
      <Content>{children}</Content>
      <Aside>
        <ProductList />
      </Aside>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Aside = styled.aside`
  width: 500px;
  border-left: 1px solid #ccc;
  overflow-y: auto;
  padding: 20px;
`;
