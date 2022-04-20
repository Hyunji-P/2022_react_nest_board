import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { BoardDto } from "./../../../backend/src/dto/board.dto";
import moment from "moment";
import Paging from "./pagination/paging";
import { useSearchParams } from "react-router-dom";

/**
 * @brief 게시판 목록 컴포넌트
 * @author Hyunji Park
 * @date 2022.04.19
 */

// 자식 컴포넌트로 넘겨주기 위해 export
export type PageType = {
  page: number;
  size: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

function BoardList(): React.ReactElement {
  const [list, setList] = useState([]);
  const [pageInfo, setPageInfo] = useState<PageType>({
    page: 0,
    size: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    axios.get("api/board", { params: params }).then((res) => {
      setList(res.data.list);
      setPageInfo(res.data.pageInfo);
    });
  }, [searchParams]);

  return (
    <Container className="content">
      <h2>게시판</h2>
      <Button variant="outline-primary">등록</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board: BoardDto) => (
            <tr key={board.uuid}>
              <td width="10%">{board.uuid}</td>
              <td>{board.title}</td>
              <td width="10%">{board.views}</td>
              <td width="15%">{moment(board.regDate).format("YYYY-MM-DD")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paging pageInfo={pageInfo} />
    </Container>
  );
}

export default BoardList;
