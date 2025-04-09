const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);


const Title = () => (
    <p>
        <b>Welcome Messages</b>
    </p>


)

const List = () => (
<ul>
  <li>Welcome Tom from Singapore</li>
  <li>Welcome Jerry from Malaysia</li>
  <li>Welcome Sarah from Indonesia</li>
</ul>
)


const App = () => (
    <div>
        <Title />
        <List />
    </div>
)
root.render(<App />)