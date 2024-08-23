import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import KanbanPage from './pages/KanbanPage';
import EstimatingWorksheetPagePage from './pages/EstimatingWorksheetPage';
import WorkBreakdownStructurePage from './pages/WorkBreakdownStructurePage';
import GanttPage from './pages/GanttPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <Container fluid className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<ProjectsPage />} /> */}
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/project/:projectId/kanban' element={<KanbanPage />} />
          <Route path='/project/:projectId/estimating_worksheet' element={<EstimatingWorksheetPagePage />} />
          <Route path='/project/:projectId/work_breakdown_structure' element={<WorkBreakdownStructurePage />} />
          <Route path='/project/:projectId/gantt' element={<GanttPage />} />
          <Route path="*" element={<Navigate to="/projects" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
