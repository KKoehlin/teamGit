import './App.css';

import GetLocation from './location/GetLocation';
import TicketMasterApp from './ticketmaster/TicketMasterApp';

function App() {
  return (
    <div className="App">
      <GetLocation />
      <TicketMasterApp />
    </div>
  );
}

export default App;
