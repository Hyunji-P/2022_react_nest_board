import { Container, Table, Button } from "react-bootstrap";

/**
 * @brief 게시판 목록 컴포넌트
 * @author Hyunji Park
 * @date 2022.04.19
 */
const BoardList = () => {
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
          <tr>
            <td width="10%">###</td>
            <td>###</td>
            <td width="10%">###</td>
            <td width="15%">###</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default BoardList;
