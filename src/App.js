import './App.scss';
import Button from './Components/Button'
import Textfield from './Components/Textfield'
import Checkbox from './Components/Checkbox';
import MultipleInput from './Components/MultipleInput';
function App() {
  return (
    <div className="App">
      <div className="card" title="This is a button">
       <Button/>
      </div>
      <div className="card">
      <Textfield/> 
      </div>
      <div className="card">
      <Checkbox/> 
      </div>
      <div className="card">
      <MultipleInput/> 
      </div>
      {/* This is a ushur checkbox <CheckBox/>
      This is an example of searchbox <Searchbox/>
      This is an example of react table <Table/>
      This is an example of modal <Modal/>  */}
    </div>
  );
}

export default App;
