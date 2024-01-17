import Review from "@/components/Review/Review";
import Count from "@/components/shared/count/Count";
import Logo from "@/components/shared/logo/Logo";


import PostSection from "@/components/ui/PostSection/PostSection";

const HomePage = () => {
  return (
    <div>
      this is home.
      we will create our dream here
     
      <PostSection />
      <Review></Review>
       <Count></Count>
       <Logo></Logo>
    </div>
  );
};

export default HomePage;
