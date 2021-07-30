import './App.css';
import NewTask from './components/NewTask';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className='row'>
        <div className='col-sm-4'>
          <NewTask />
        </div>
        <div className='col-sm-8 bd-l'>
          <ToDoList />
        </div>
      </div>
  );
}

export default App;
