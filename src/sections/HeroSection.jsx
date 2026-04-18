import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";
import Skeleton from "../components/Skeleton";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading) return <Skeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero container">
      <h1 className="hero-title">
        {data.headlineLine1}
        <br />
        <span className="gradient">{data.headlineGradient}</span>
      </h1>

      <p className="hero-sub">{data.subheadline}</p>

      <button className="cta">{data.cta}</button>
    </section>
  );
};

export default HeroSection;