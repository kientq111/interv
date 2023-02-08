import logo from './logo.svg';
import './App.css';
import { Pagination } from './components/Pagination';
import { ListUserTable } from './components/ListUserTable';
function App() {
  return (
    <div className="App">
      <ListUserTable />
      <Pagination />
    </div>
  );
}

export default App;
