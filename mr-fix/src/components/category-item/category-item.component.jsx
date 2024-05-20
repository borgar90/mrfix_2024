import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imgUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Kjøp nå</p>
      </div>
    </div>
  );
};
export default CategoryItem;
