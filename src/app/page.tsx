import Repertoires from "@/components/repertuaresblock/repertoires/Repertoires";
import Premieres from "@/components/upcomingPremieres/premieres/Premieres";
import Gallery from "@/components/posterGallery/gallery/Gallery";
import News from "@/components/posterNews/news/News";
export default function Home() {
  return (
   <div>
   <Repertoires />
   <Premieres />
   <Gallery />
   <News />
   </div>
  );
}
