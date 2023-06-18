import Header from "@/components/Header";
// import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
// import { usePagination } from '@mantine/hooks';
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/Pagination";

export default function ProductsPage({products}) { 
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(products, currentPage, pageSize);
  // console.log(paginatedPosts)

  return ( 
    <>
      <Header />
      <Center>
        <Title>All books</Title>
        <ProductsGrid products={paginatedPosts} />
        <Pagination
          items={products.length} 
          currentPage={currentPage} // 1
          pageSize={pageSize} // 4
          onPageChange={onPageChange}
        /> 
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
  const products = await Product.find({}, null, {sort:{'title':1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}