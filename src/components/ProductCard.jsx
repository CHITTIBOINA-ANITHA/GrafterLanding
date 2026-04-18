const ProductCard = ({ title, image }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProductCard;