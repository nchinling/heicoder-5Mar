const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const Student = ({indexNumber, studentName, gender}) => 
    gender === "female" ? (
<div>
    <p style = {{ color: "pink" }}>Index {indexNumber}: {studentName}</p>
</div>

) : (
<div>
    <p style = {{ color: "blue" }}>Index {indexNumber}: {studentName}</p>
</div>

);

const ClassRoom = () => (


    <div>
        <Student indexNumber = "15" studentName = "john" gender = "male"/>
        <Student indexNumber = "16" studentName = "sarah" gender = "female" />
    </div>


)


root.render(<ClassRoom />)