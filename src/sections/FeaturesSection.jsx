import { useContent } from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import { useCarousel } from "../hooks/useCarousel";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import Skeleton from "../components/Skeleton";

const FeaturesSection = () => {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  const { index, next, prev, itemsPerView } = useCarousel(
    data?.products?.length || 0
  );

  if (loading) return <Skeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="features container">
      <h2 className="features-title">
        {data.title}
        <br />
        <span className="gradient">{data.titleAccent}</span>
      </h2>

      <p className="features-sub">{data.subtitle}</p>

      <div className="divider"></div>

      <Carousel index={index} itemsPerView={itemsPerView}>
        {data.products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </Carousel>

      <div className="carousel-controls">
        <button onClick={prev} disabled={index === 0}>
          ←
        </button>
        <button
          onClick={next}
          disabled={index >= data.products.length - itemsPerView}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;