const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
];


function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
  }
  
  // This is the big difference in making it scalable. Note the use of a key. 
  function WelcomeMessagesList() {
    return (
      <ul>
        {users.map((user) => (
          <WelcomeMessage
            key={user.name}
            name={user.name}
            country={user.country}
          />
        ))}
      </ul>
    );
  }
  
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)