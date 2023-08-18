import RestartTimer from "./components/RestartTimer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RestartTimer
        duration={6121}
        onExpire={() => console.log("Timer expired")}
        onRestart={() => console.log("Timer restarted")}
      />
    </div>
  );
}
