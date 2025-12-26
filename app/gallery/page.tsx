import Breadcrumbs from "@/components /Breadcrumbs";
import Gallery from "@/components /gallary/gallery";

const GalleryPage = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Breadcrumbs title="Gallery" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
