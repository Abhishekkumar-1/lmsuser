// import styled from "styled-components";
// import ProductBox from "@/components/ProductBox";

// const StyledProductsGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 40px;
//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//   }
// `;

// export default function AllProductsGrid({products}) {
//   return (
//     <StyledProductsGrid>
//       {products?.length > 0 && products.map(product => (
//         <ProductBox key={product._id} {...product} />
//       ))}
//     </StyledProductsGrid>
//   );
// }

import styled from "styled-components";
import Button from "@/components/Button";
// import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
    zoom:1.9
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
  align-items: center;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
  align-items:center;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function AllProductBox({_id,title,author,publishedyear,genre,description,availability,price,image}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;

  function cantaddtoCart(){
    alert('Product out of stock');
  }
  // console.log(availability)

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={image} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            Rs.{price}
          </Price>
          <Button block 
          // onClick={() => addProduct(_id)} 
          onClick={()=> availability.toUpperCase()==='YES'? addProduct(_id):cantaddtoCart()} 
          primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}