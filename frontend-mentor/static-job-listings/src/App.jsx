import React from "react";
import Header from "./components/Header";
import useFetch from "./utils/useFetch";
import Card from "./components/Card";
import "./App.css";

function App() {
  const { data: posts, loading, error } = useFetch();
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!posts) return null;

  const clearFilterItem = () => {
    setSelectedCategory([]);
  };

  const addFilterItem = (item) => {
    if (selectedCategory.includes(item)) return;
    setSelectedCategory((prevState) => {
      return [...prevState, item];
    });
  };

  const removeFilterItem = (target) => {
    setSelectedCategory((prevState) => {
      prevState.filter((item) => item !== target);
    });
  };

  return (
    <div className="container">
      <Header
        selectedCategory={selectedCategory}
        removeFilterItem={removeFilterItem}
        clearFilterItem={clearFilterItem}
      />
      <main className="wrapper main">
        {posts
          .filter((post) => {
            if (selectedCategory?.length === 0) return true;

            const { role, level, languages, tools } = post;
            return selectedCategory.every((filter) => {
              if (role === filter || level === filter) {
                return true;
              }
              if (languages.includes(filter) || tools.includes(filter)) {
                return true;
              }
              return false;
            });
          })
          .map((post) => {
            return (
              <Card key={post.id} {...post} handleCategory={addFilterItem} />
            );
          })}
      </main>
    </div>
  );
}

export default App;
