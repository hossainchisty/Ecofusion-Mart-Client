import Carousel from './Carousel';
import Product from './Product';
import Testimonials from "./Testimonials";

const Home = () => {
  const imageUrls = [
    'https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    'https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1507702553912-a15641e827c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'
  ];

  return (
    <>
      <Carousel imageUrls={imageUrls} />
      <Product />
      <Testimonials/>
    </>
  );
};

export default Home;
