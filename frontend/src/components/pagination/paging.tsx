import { Pagination } from "react-bootstrap";
import { PageType } from "../board.list";

type ChildrenType = {
  pageInfo: PageType;
};

function Paging({ pageInfo }: ChildrenType) {
  return (
    <Pagination>
      <Pagination.Prev />
      {[...Array(pageInfo.size)].map((_n, index) => (
        <Pagination.Item key={index + 1}>{index + 1}</Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
}

export default Paging;
