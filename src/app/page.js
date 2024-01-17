

import Review from "@/components/Review/Review";
import Banner from "@/components/banner/page";

import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PostSection />
      <Review></Review>
      
    </div>
  );
};

export default HomePage;

