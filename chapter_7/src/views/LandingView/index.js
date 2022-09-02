import Page from "components/Page";
import Banner from "./Banner";
import Features from "./Features";
import DownloadButton from "./DownloadButton";
import FootBar from "./FootBar";


const LandingView = () => {
  return (
    <Page title="Kiki: Home">
      <Banner />
      <Features />
      <DownloadButton />
      <FootBar />
    </Page>
  );
};

export default LandingView;
