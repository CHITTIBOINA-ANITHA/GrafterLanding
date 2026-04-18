const Carousel = ({ children, index, itemsPerView }) => {
  const percentage = 100 / itemsPerView;

  return (
    <div className="carousel">
      <div
        className="track"
        style={{
          transform: `translateX(-${index * percentage}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;