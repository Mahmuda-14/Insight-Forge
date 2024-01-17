

import Review from "@/Components/Review/Review";
import All from "@/Components/Social/All";
import Banner from "@/Components/banner/page";
import Count from "@/Components/shared/count/Count";
import Logo from "@/Components/shared/logo/Logo";
import PostSection from "@/Components/ui/PostSection/PostSection";


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <PostSection />
      <Review></Review>
      <All></All>
      <Count></Count>
      <Logo></Logo>
      
    </div>
  );
};

export default HomePage;