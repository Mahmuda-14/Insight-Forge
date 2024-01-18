import Review from "@/components/Review/Review";
import All from "@/components/Social/All";
import Banner from "@/components/banner/page";
import Count from "@/components/shared/count/Count";
import Logo from "@/components/shared/logo/Logo";
import PostSection from "@/components/ui/PostSection/PostSection";

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
