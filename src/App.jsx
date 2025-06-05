import { MovieProvider } from "./Contexts/MovieContext";

import Header from "./Components/Header";
import Main from "./Components/Main";

export default function App() {

  return (
    <MovieProvider>
      <Header />
      <Main />
    </MovieProvider>
  );
};