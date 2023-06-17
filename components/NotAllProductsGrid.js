import styled from "styled-components";
import AllProductBox from "@/components/NotAllProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function AllProductsGrid({products}) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 && products.map(product => (
        <AllProductBox key={product._id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}