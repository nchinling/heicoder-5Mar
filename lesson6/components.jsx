// Instead of 
root.render(
	<div>
		<p>This is a header</p>
		<p>Hello World</p>
		<p>This is a footer</p>
	</div>
)

// Use components
function Header() {
    return <p>This is a header</p>
}

function Paragraph() {
    return <p>Hello World</p>
}

function Footer() {
    return <p>This is a footer</p>
}


function App() {
    return <div>
        <Header />
        <Paragraph />
        <Footer />
    </div>
}


root.render(<App />)