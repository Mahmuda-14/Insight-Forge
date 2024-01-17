

// import Review from "@/components/Review/Review";
// import Banner from "@/components/banner/page";

import Review from "@/Components/Review/Review";
import All from "@/Components/Social/All";
import Banner from "@/Components/banner/page";
import PostSection from "@/Components/ui/PostSection/PostSection";

// import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PostSection />
      <Review></Review>
      <All></All>
      
    </div>
  );
};

export default HomePage;