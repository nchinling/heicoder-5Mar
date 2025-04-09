//map
//classRoomRoster is an array. 'student' is the first array. 

const ClassRoom = () =>{
    return classRoomRoster.map((student) => (
        <Student 
        
        indexNumber = {student.indexNumber}
        studentName = {student.studentName}
        gender = {student.gender}
        />
    )

    )




}