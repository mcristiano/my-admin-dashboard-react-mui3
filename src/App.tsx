import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './base/layout/Layout';
import TaskList from './TaskList'; // Importe o componente TaskList

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rota para a listagem de tarefas */}
          <Route path="/tarefas-listagem" element={<TaskList />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
