

import Review from "@/Components/Review/Review";
import All from "@/Components/Social/All";
import PostSection from "@/Components/ui/PostSection/PostSection";


const HomePage = () => {
  return (
    <div>
      this is home.
      we will create our dream here
      <PostSection />
      <Review></Review>     
      <All></All>
      
    </div>
  );
};

export default HomePage;
