import React from "react";

import NavigationBar from "../components/NavBar";
import Social from "../components/Social";
import ChatButton from "../components/ChatButton";
import TTS from "../components/TTS";
import Products from "../components/Products";
import Footer from "../components/Footer";
import LongFooter from "../components/LongFooter";
import MusicPlayer from "../components/MusicPlayer";

export default function TextToSpeech() {
  return (
    <div>
      <NavigationBar />
      <Social />
      <ChatButton />
      <MusicPlayer />
      <TTS />
      <Products />
      <LongFooter />
      <Footer />
    </div>
  );
}
