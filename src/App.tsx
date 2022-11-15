import EventComponent from "./events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
  return (
    <div className="App">
      <GuestList/><br/>
      <UserSearch/><br/>
      <EventComponent/><br/>
      
      
    </div>
  );
}

export default App;
