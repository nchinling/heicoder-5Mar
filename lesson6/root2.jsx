const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const Header = () => (
    <p>
        <b>Header</b>
        <b>Header</b>
    </p>


)


const Body = () => <p>Boy</p>
const Footer = () => {
    var counter = 1;
    return <p>Footer {counter}</p>

}


const App = () => (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>


)

root.render(<App />)