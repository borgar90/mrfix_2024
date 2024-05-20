import Categories from "./components/categories/categories.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Såpe",
      imgUrl: "/products/2clean.png",
    },
    {
      id: 2,
      title: "Tilbehør",
      imgUrl: "/products/svamp.jpg",
    },
  ];

  return <Categories categories={categories} />;
};

export default App;
