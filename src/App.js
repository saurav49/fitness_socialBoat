import "./App.css";
import { Header, Videolist, ErrorFallback } from "./Component/index";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Header />
        <Videolist />
      </ErrorBoundary>
    </div>
  );
}

export default App;
