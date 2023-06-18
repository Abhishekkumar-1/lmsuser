
import styled from "styled-components";

const Maindiv=styled.div``

const StyledFirstul=styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;
 list-style: none;
`;

const PageItemActive=styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 2rem;
height: 2rem;
border: 1px solid #eaeaea;
border-radius: 0.5rem;
cursor: pointer;
background-color: black;
`

const PageLink=styled.button`
cursor: pointer;
border:0;
background-color:black;
color:white;
font-weight:700;
`


export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <Maindiv>
        <StyledFirstul >
          {pages.map((page) => (
            <PageItemActive
              key={page}
            >
              <PageLink 
               onClick={() => onPageChange(page)}>
                {page}
              </PageLink>
            </PageItemActive>
          ))}
        </StyledFirstul>
      </Maindiv>
    );
   };
   
   export default Pagination;