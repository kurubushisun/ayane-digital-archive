/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev 中に Segment Explorer が RSC バンドラと喧嘩して壊れた .next と ENOENT を誘発することがあるためオフ
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
