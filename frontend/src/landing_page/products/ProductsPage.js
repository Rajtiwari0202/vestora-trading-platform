import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/images/kite.png"
        productName="Vestora Trade"
        productDesription="A fast and modern trading experience with live market data, advanced charts and portfolio tracking across devices."
        tryDemo="/signup"
        learnMore="/product"
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Vestora Console"
        productDesription="A central dashboard to track investments, positions, holdings and detailed portfolio insights."
        learnMore="/product"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Vestora Funds"
        productDesription="Invest in mutual funds with a clean investing experience and transparent portfolio tracking."
        tryDemo="/signup"
        learnMore="/product"
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Vestora API"
        productDesription="Developer-first APIs for trading workflows, portfolio systems and fintech integrations."
        learnMore="/product"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Vestora Learn"
        productDesription="Beginner-friendly investing lessons and market education built directly into the platform."
        tryDemo="/signup"
        learnMore="/product"
        googlePlay=""
        appStore=""
      />

      <p className="text-center text-muted mt-5 mb-5">
        Curious about the technology behind Vestora?
        Explore how the platform is being built.
      </p>

      <Universe />
    </>
  );
}

export default ProductsPage;