import Repertoires from "@/components/repertuaresblock/repertoires/Repertoires";
import Premieres from "@/components/upcomingPremieres/premieres/Premieres";
import Gallery from "@/components/posterGallery/gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Repertoires />
      <Premieres />
      <Gallery />
    </div>
  );
}
