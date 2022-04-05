import categories from "./components/category item/categorymenu";
import Directory from "./components/directory/directory.component";
import "./components//directory/directory.styles.scss";

const App = () => {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
