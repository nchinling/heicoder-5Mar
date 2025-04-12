// root.js

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessage(props) {
    return (
    <div className="welcome-message">
        <li>Welcome {props.name} from {props.country}</li>
    </div>)
  }
  


  function WelcomeMessagesList() {
    return (
    <div className="message-list">
    <ul>
      <WelcomeMessage 
        name="Tom" 
        country="Singapore" 
      />
      <WelcomeMessage
        name="Jerry" 
        country="Malaysia" 
      />
        <WelcomeMessage
        name="Sarah" 
        country="Indonesia" 
      />
     </ul>
    </div>
  )}

  
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


  //Model answer
  