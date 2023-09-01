import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="YouTube Thumbnail Downloader - Download high-quality thumbnails"
        description="Download youtube thumbnail Images all quality (4K , HD, HQ, 1080p). in just a few seconds without registration."
        canonical="https://www.downloadytthumbnails.com/"
        openGraph={{
          url: "https://www.downloadytthumbnails.com/",
          title: "YouTube Thumbnail Downloader - Download high-quality thumbnails",
          description: "Download youtube thumbnail Images all quality (4K , HD, HQ, 1080p). in just a few seconds without registration.",
          site_name: "Youtube Thumbnail Downloader - Download high-quality thumbnails",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
