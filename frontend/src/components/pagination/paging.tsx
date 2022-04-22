import { Pagination } from "react-bootstrap";
import { PageType } from "../board.list";

type ChildrenPageType = {
  pageInfo: PageType;
};

function loopItem(startPage: number, endPage: number) {
  let itemArr = [];
  for (let i = startPage; i <= endPage; i++) {
    itemArr.push(
      <Pagination.Item key={i} onClick={(e) => onNumClick(i, e)}>
        {i}
      </Pagination.Item>
    );
  }
  return itemArr;
}

const onNumClick = (index: number, event: React.MouseEvent) => {
  event.preventDefault();
  console.log(index);
};

function Paging({ pageInfo }: ChildrenPageType) {
  return (
    <Pagination>
      <Pagination.Prev />
      {loopItem(pageInfo.startPage, pageInfo.endPage)}
      <Pagination.Next />
    </Pagination>
  );
}

export default Paging;
