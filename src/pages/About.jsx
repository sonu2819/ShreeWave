import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function About() {

return (
  <>
    <Helmet>
      <title>About WaveParty | Watch Together Platform</title>

      <meta
        name="description"
        content="Learn about WaveParty, the real-time watch together platform where friends can sync videos, chat live, and enjoy content together online."
      />

      <meta
        name="keywords"
        content="WaveParty, watch together, sync video, online watch party, realtime streaming"
      />

      <meta name="author" content="WaveParty" />

      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="About WaveParty | Watch Together Platform"
      />

      <meta
        property="og:description"
        content="Watch videos together with friends in real time using WaveParty."
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://waveparty.vercel.app/about"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="About WaveParty"
      />

      <meta
        name="twitter:description"
        content="Learn more about the WaveParty watch together platform."
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href="https://waveparty.vercel.app/about"
      />
    </Helmet>

    <div className="page">

      <h1>About WaveParty</h1>

      <p className="page-text">
        WaveParty is a real-time watch together platform
        where friends can sync YouTube videos and enjoy
        content together from anywhere in the world.
        Users can create private rooms instantly, share
        room links with friends, and experience synced
        video playback in real time.
      </p>

      <p className="page-text">
        WaveParty also includes live chat, online/offline
        user status, mobile-friendly support, fast room
        creation, and simple sharing features designed
        to make online watching more social and interactive.
        Whether you are watching with friends, study groups,
        communities, or online hangouts, WaveParty creates
        a smooth shared viewing experience directly inside
        the browser without requiring complicated setup.
      </p>

    </div>
  </>
);
}