import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import { NavLink, useParams } from 'react-router-dom';

function TopNavBar() {
  const { username } = useParams();
  const { projectId } = useParams();

  return (
    <Container fluid>
      <Nav 
        // sticky="top" 
        className="flex-row TopNavBar"
        variant="tabs"
        defaultActiveKey="/kanban"
        // activeKey={location.pathname}
      >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/kanban">KANBAN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/estimating_worksheet">Estimating Worksheet</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/work_breakdown_structure">Work Breakdown Structure</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/gantt">Gantt</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default TopNavBar;
