function UserInfo(props) {
    return (
      <div className="user-info">
        <h2>{props.name}</h2>
        <p>Email: {props.email}</p>
      </div>
    );
  }


// Example of how information is passed to UserInfo
function App() {
return (
    <div className="App">
    <UserInfo 
        name="John Doe" 
        email="john@example.com" 
    />
    <UserInfo 
        name="Jane Smith" 
        email="jane@example.com" 
    />
    </div>
);
}