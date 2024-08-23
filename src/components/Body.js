import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import TopNavBar from './TopNavBar';

function Body({topNavNar, children}) {
  return (
    <Container fluid>
      <Stack direction="horizontal" className="Body">
        {topNavNar && <TopNavBar />}
        <Container className="Content">
          {children}
        </Container>
      </Stack>
    </Container>
  )
}

export default Body

