

import Review from "@/Components/Review/Review";
import All from "@/Components/Social/All";
import Banner from "@/Components/banner/page";
import PostSection from "@/Components/ui/PostSection/PostSection";


const HomePage = () => {
  return (
    <div>
      this is home.
      we will create our dream here
      <Banner></Banner>
      <PostSection />
      <Review></Review>     
      <All></All>  
      <PostSection />
      <Review></Review>
      
    </div>
  );
};

export default HomePage;

