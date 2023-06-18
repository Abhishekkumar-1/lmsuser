import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { usePagination } from '@mantine/hooks';
import { useState } from "react";

export default function ProductsPage({products}) {
  // const ITEMS_PER_PAGE=8;
  // const [visibleResults,setVisibleResults]=useState([])(
  //   {products.slice(0,ITEMS_PER_PAGE)}
  // )

  // const pagination=usePagination({
  //   total:Math.ceil({products?.length} / ITEMS_PER_PAGE),
  //   initialPage:1,
  //   onChange(page){
  //     const start=(page-1)* ITEMS_PER_PAGE
  //     const end= (start + ITEMS_PER_PAGE)
  //     setVisibleResults(products.slice(start,end))
  //   }
  // })

  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
        {/* <div>
          <button onClick={pagination.previous}>prev</button>
          <button onClick={pagination.next}>next</button>
        </div> */}
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}