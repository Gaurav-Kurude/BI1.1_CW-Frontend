import "./App.css"
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";

const App = () => {
  return (
    <main>
      <Movies />
      <MovieByTitle title="PK"/>
    </main>
  )
}

export default App;