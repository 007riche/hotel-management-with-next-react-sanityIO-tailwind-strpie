import { getFeaturedRoom } from "@/libs/apis";
import FeaturedRoom from "../components/featured_room/FeaturedRoom";
import Gallery from "../components/gallery/gallery";
import HeroSection from "../components/hero_section/HeroSection";
import NewsLetter from "../components/news_letter/news_letter";
import PageSearch from "../components/page_search/page_search";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom);

  return (
    <>
    <HeroSection/>
    {/** Search section*/}
    <PageSearch />
    {/** Featured section*/}
    <FeaturedRoom featuredRoom={featuredRoom}/>
    {/** Gallery section*/}
    <Gallery />
    {/** News letter section*/}
    <NewsLetter />

    </>
  );
};


export default Home;