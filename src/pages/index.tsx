// import BannerCard from "@components/common/banner-card";
// import Container from "@components/ui/container";
// import BrandGridBlock from "@containers/brand-grid-block";
// import CategoryBlock from "@containers/category-block";
// import { getLayout } from "@components/layout/layout";
// import BannerWithProducts from "@containers/banner-with-products";
// import BannerBlock from "@containers/banner-block";
// import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";
// import Instagram from "@components/common/instagram";
// import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
// import ProductsFeatured from "@containers/products-featured";
// import BannerSliderBlock from "@containers/banner-slider-block";
// import ExclusiveBlock from "@containers/exclusive-block";
// import Subscription from "@components/common/subscription";
// import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
// import { ROUTES } from "@lib/routes";
// import {
//   masonryBanner,
//   promotionBanner,
//   modernDemoBanner as banner,
//   modernDemoProductBanner as productBanner,
// } from "@data/static/banners";

// // export { getStaticProps } from "@framework/ssr/homepage/modern";

// export default function Home() {
//   return (
//     <>
//           <BannerSliderBlock data={promotionBanner} />

//       <BannerBlock data={masonryBanner} />
//       <Container>
//         <ProductsFlashSaleBlock />
//       </Container>
//       <Container>
//         <CategoryBlock sectionHeading="text-shop-by-category" variant="rounded" />
//         <ProductsFeatured sectionHeading="text-featured-products" />
//         <BannerCard
//           data={banner[0]}
//           href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
//           className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
//         />
//         <BannerCard
//           data={banner[1]}
//           href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
//           className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
//         />
       
//         <ExclusiveBlock />
//         <NewArrivalsProductFeed />
//         <DownloadApps />
//         <Support />
//         <Instagram />
//         <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
//       </Container>
//       <Divider className="mb-0" />
//     </>
//   );
// }

// Home.getLayout = getLayout;

import { useState , useEffect } from "react";
import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import BrandGridBlock from "@containers/brand-grid-block";
import CategoryBlock from "@containers/category-block";
import { getLayout } from "@components/layout/layout";
import BannerWithProducts from "@containers/banner-with-products";
import BannerBlock from "@containers/banner-block";
import Divider from "@components/ui/divider";
import DownloadApps from "@components/common/download-apps";
import Support from "@components/common/support";
import Instagram from "@components/common/instagram";
import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
import ProductsFeatured from "@containers/products-featured";
import BannerSliderBlock from "@containers/banner-slider-block";
import ExclusiveBlock from "@containers/exclusive-block";
import Subscription from "@components/common/subscription";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import ShowMoreBtn from '@components/show-more/show-more-button'
import { ROUTES } from "@lib/routes";
import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from "@data/static/banners";
import Banner from '@components/banner/banner'

export {getStaticProps} from '@framework/ssr/translation'

// export { getStaticProps } from "@framework/ssr/homepage/modern";

export default function Home() {
  
const [swiperKey, setSwiperKey] = useState(0);

useEffect(() => {
  setSwiperKey(1);
}, []);

  return (
    <>
          <BannerSliderBlock data={promotionBanner} />

      <BannerBlock data={masonryBanner} /> 
     {/* <Container>
        <ProductsFlashSaleBlock   variant="default"/>
      </Container> */}
      <Container>
        <CategoryBlock sectionHeading="text-shop-by-category" variant="rounded" />
        <ProductsFeatured sectionHeading="text-featured-products" title="Sản Phẩm Bán Chạy"/>
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
               <ProductsFeatured sectionHeading="text-featured-products" title="Sản Phẩm Mới"/>

        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
               <ProductsFeatured sectionHeading="text-featured-products" title="Trang Sức Kim Tiền"/>
               <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
               <ProductsFeatured sectionHeading="text-featured-products" title="Trang Sức Phong Thủy"/>
   <ShowMoreBtn/>
        {/* <ExclusiveBlock /> */}
        {/* <NewArrivalsProductFeed /> */}
        {/* <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" /> */}
      </Container>
      <Banner/>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;


