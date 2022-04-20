import { Pagination } from "react-bootstrap";
import { PageType } from "../board.list";
import { useCallback, useEffect } from "react";

type ChildrenType = {
  pageInfo: PageType;
};

// TODO 페이지 반복 횟수 까지만 표시 되도록 수정 → loop count 구해야함
function Paging({ pageInfo }: ChildrenType) {
  return (
    <Pagination>
      <Pagination.Prev />
      {[...Array(10)].map((_n, index) => (
        <Pagination.Item key={index + 1}>{index + 1}</Pagination.Item>
      ))}
      <Pagination.Next />
    </Pagination>
  );
}

export default Paging;
