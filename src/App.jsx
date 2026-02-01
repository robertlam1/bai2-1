import Student from "./Student";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Demo Function Component + Props</h1>

      <Student name="Thuan Lam" age={20} className="CNTTK18" />
      <Student name="Nguyễn Văn A" age={22} className="CNTTK17" />
      <Student name="Lê Thị B" age={19} className="CNTTK19" />
    </div>
  );
}

export default App;
