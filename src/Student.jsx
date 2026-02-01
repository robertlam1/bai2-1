function Student(props) {
  return (
    <div style={{ 
      border: "1px solid #ff8d8dff", 
      padding: "10px", 
      marginBottom: "10px", 
      borderRadius: "8px" 
    }}>
      <h3>Học sinh: {props.name}</h3>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

export default Student;
