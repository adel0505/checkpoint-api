import "./App.css";
// Css primereact
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//components
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
