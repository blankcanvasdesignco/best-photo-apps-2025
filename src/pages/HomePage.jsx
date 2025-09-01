import React from "react";
import { useState } from "react";
import apple_dl from "../assets/apple_dl.png";
import google_dl from "../assets/google_dl.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import screen7 from "../assets/screen7.png";
import panoslice1 from "../assets/panoslice/panoslice1.webp";
import panoslice2 from "../assets/panoslice/panoslice2.webp";
import panoslice3 from "../assets/panoslice/panoslice3.webp";
import panoslice4 from "../assets/panoslice/panoslice4.webp";
import panoslice5 from "../assets/panoslice/panoslice5.webp";
import panoslice6 from "../assets/panoslice/panoslice6.webp";
import panoslice7 from "../assets/panoslice/panoslice7.webp";
import panoslice8 from "../assets/panoslice/panoslice8.webp";
import swipekit1 from "../assets/swipekit/swipekit1.webp";
import swipekit2 from "../assets/swipekit/swipekit2.webp";
import swipekit3 from "../assets/swipekit/swipekit3.webp";
import swipekit4 from "../assets/swipekit/swipekit4.webp";
import swipekit5 from "../assets/swipekit/swipekit5.webp";
import lono1 from "../assets/lono/lono1.webp";
import lono2 from "../assets/lono/lono2.webp";
import lono3 from "../assets/lono/lono3.webp";
import lono4 from "../assets/lono/lono4.webp";
import lono5 from "../assets/lono/lono5.webp";
import lono6 from "../assets/lono/lono6.webp";
import lono7 from "../assets/lono/lono7.webp";
import rene1 from "../assets/rene/rene1.webp";
import rene2 from "../assets/rene/rene2.webp";
import rene3 from "../assets/rene/rene3.webp";
import rene4 from "../assets/rene/rene4.webp";
import rene5 from "../assets/rene/rene5.webp";
import lek1 from "../assets/lek/lek1.webp";
import lek2 from "../assets/lek/lek2.webp";
import lek3 from "../assets/lek/lek3.webp";
import lek4 from "../assets/lek/lek4.webp";
import lek5 from "../assets/lek/lek5.webp";
import lek6 from "../assets/lek/lek6.webp";
import lek7 from "../assets/lek/lek7.webp";
import mural1 from "../assets/mural/mural1.webp";
import mural2 from "../assets/mural/mural2.webp";
import mural3 from "../assets/mural/mural3.webp";
import mural4 from "../assets/mural/mural4.webp";
import mural5 from "../assets/mural/mural5.webp";
import mural6 from "../assets/mural/mural6.webp";
import mural7 from "../assets/mural/mural7.webp";
import panaroid1 from "../assets/panaroid/panaroid1.webp";
import panaroid2 from "../assets/panaroid/panaroid2.webp";
import panaroid3 from "../assets/panaroid/panaroid3.webp";
import panaroid4 from "../assets/panaroid/panaroid4.webp";
import panaroid5 from "../assets/panaroid/panaroid5.webp";
import panaroid6 from "../assets/panaroid/panaroid6.webp";
import panaroid7 from "../assets/panaroid/panaroid7.webp";
import panaroid8 from "../assets/panaroid/panaroid8.webp";
import panoslice_icon from "../assets/icons/panoslice_icon.png";
import swipekit_icon from "../assets/icons/swipekit_icon.png";
import lono_icon from "../assets/icons/lono_icon.png";
import rene_icon from "../assets/icons/rene_icon.png";
import lek_icon from "../assets/icons/lek_icon.png";
import mural_icon from "../assets/icons/mural_icon.png";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black px-4 md:px-16 py-8">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          BEST PHOTO APPS 2025
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Looking for the best photo apps of 2025? This site is a hand-curated
          collection of iOS and android apps that are fast, aesthetic, and
          actually useful. From minimalist photo editors like Rene to powerful
          note-taking tools and productivity gems — this list is for creators,
          tech lovers, and anyone tired of cluttered app stores. No ads. No
          fluff. Just clean, beautiful editing apps that work.
        </p>

        {/* Preview Gallery */}

        <div className="flex justify-center relative mb-12">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 rounded-l-xl" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 rounded-r-xl" />
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                {
                  src: screen1,
                  alt: "Feature 1",
                  link: "https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810",
                },
                {
                  src: screen2,
                  alt: "Feature 2",
                  link: "https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550",
                },
                {
                  src: screen3,
                  alt: "Feature 3",
                  link: "https://apps.apple.com/app/lono-collage-reels-maker/id1632742723",
                },
                {
                  src: screen4,
                  alt: "Feature 4",
                  link: "https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951",
                },
                {
                  src: screen5,
                  alt: "Feature 5",
                  link: "https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680",
                },
                {
                  src: screen6,
                  alt: "Feature 6",
                  link: "https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share",
                },
                {
                  src: screen7,
                  alt: "Feature 7",
                  link: "https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share",
                },
                // Add more images here as needed
              ].map((img, idx) => (
                <a
                  key={img.src + idx}
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-gray-100 flex-shrink-0"
                  style={{
                    width: "200px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain block"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center md:mt-24">
          TRENDING IPHONE APPS 2025
        </h2>

        <div>
          <hr className="mt-8 md:my-12 border-gray-300" />
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #1 */}
                <span className="text-2xl font-bold">#1</span>
                {/* App Icon as link */}
                <a
                  href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={panoslice_icon}
                    alt="Panoslice App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                {/* Title as link */}
                <a
                  href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold"
                  tabIndex={0}
                >
                  Panoslice: Photo Swipe Collage
                </a>
                {/* Ratings and Category as combined link */}
                <a
                  href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-1 focus:outline-none"
                  tabIndex={0}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.5</span>
                  <span className="text-lg">(1.9k+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: panoslice1, alt: "Feature 1" },
                  { src: panoslice2, alt: "Feature 2" },
                  { src: panoslice3, alt: "Feature 3" },
                  { src: panoslice4, alt: "Feature 4" },
                  { src: panoslice5, alt: "Feature 5" },
                  { src: panoslice6, alt: "Feature 6" },
                  { src: panoslice7, alt: "Feature 7" },
                  { src: panoslice8, alt: "Feature 8" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Panoslice is a unique collage & story maker for instagram. Photo
            dump your camera roll using seamless carousels! Create aesthetics
            like Polaroid, Film, Digital Scrapbooks in minutes on 10+ slides.
            Create post layouts like an influencer!
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #2 */}
                <span className="text-2xl font-bold">#2</span>
                {/* App Icon as link */}
                <a
                  href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                  aria-label="Open SwipeKit App Store page"
                >
                  <img
                    src={swipekit_icon}
                    alt="Swipekit App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                {/* Title as link */}
                <a
                  href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold"
                  tabIndex={0}
                  aria-label="Open SwipeKit App Store page"
                >
                  SwipeKit : Photo Collage Maker
                </a>
                {/* Ratings and Category as link */}
                <a
                  href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-1 focus:outline-none"
                  tabIndex={0}
                  aria-label="Open SwipeKit App Store page"
                >
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: swipekit1, alt: "Feature 1" },
                  { src: swipekit2, alt: "Feature 2" },
                  { src: swipekit3, alt: "Feature 3" },
                  { src: swipekit4, alt: "Feature 4" },
                  { src: swipekit5, alt: "Feature 5" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            SwipeKit makes it fast and effortless to create photo collages,
            swipe-style slideshows, and stunning UGC content, right from your
            phone. Whether you're a content creator, brand, or just someone who
            loves sharing on socials, SwipeKit helps you post better visuals,
            faster.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #3 */}
                <span className="text-2xl font-bold">#3</span>
                {/* App Icon */}
                <a
                  href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={lono_icon}
                    alt="Lono App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <span className="text-2xl font-bold">
                    Lono : collage & reels maker
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-1 focus:outline-none"
                  tabIndex={0}
                >
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.4</span>
                  <span className="text-lg">(400+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: lono1, alt: "Feature 1" },
                  { src: lono2, alt: "Feature 2" },
                  { src: lono3, alt: "Feature 3" },
                  { src: lono4, alt: "Feature 4" },
                  { src: lono5, alt: "Feature 5" },
                  { src: lono6, alt: "Feature 6" },
                  { src: lono7, alt: "Feature 7" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Make Collage videos, Short videos, Tiktok videos & IG reels in
            seconds using AI. Upload multiple photos, Cutout reels, apply
            presets and get ready to post. An AI-Based photo and video editor
            application that allows you to create Aesthetic filters & Vintage
            effects as like vintage photography for social media with minimal
            effort.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #4 */}
                <span className="text-2xl font-bold">#4</span>
                {/* App Icon as link */}
                <a
                  href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={rene_icon}
                    alt="Rene App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                {/* Title as link */}
                <a
                  href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <span className="text-2xl font-bold">
                    Rene: AI Filters, Collage Edit
                  </span>
                </a>
                {/* Ratings and Category as combined link */}
                <a
                  href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-1 focus:outline-none"
                  tabIndex={0}
                >
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: rene1, alt: "Feature 1" },
                  { src: rene2, alt: "Feature 2" },
                  { src: rene3, alt: "Feature 3" },
                  { src: rene4, alt: "Feature 4" },
                  { src: rene5, alt: "Feature 5" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Most editing apps give you tools. Rene gives you the final look. No
            sliders, no layers, no stress. Just pick a vibe and it’s done. Built
            for creators, content lovers, and aesthetic girlies who want more
            than a filter.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #5 */}
                <span className="text-2xl font-bold">#5</span>
                {/* App Icon */}
                <a
                  href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={lek_icon}
                    alt="Lek App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-2xl font-bold">
                    Grow your Linkedin : Lek AI
                  </span>
                </a>
                <a
                  href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 text-xl ml-1">★</span>
                    <span className="text-lg">4.2</span>
                    <span className="text-lg">(10+)</span>
                    <span className="mx-2 text-lg">|</span>
                    <span className="text-lg">Productivity</span>
                  </div>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: lek1, alt: "Feature 1" },
                  { src: lek2, alt: "Feature 2" },
                  { src: lek3, alt: "Feature 3" },
                  { src: lek4, alt: "Feature 4" },
                  { src: lek5, alt: "Feature 5" },
                  { src: lek6, alt: "Feature 6" },
                  { src: lek7, alt: "Feature 7" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Lek is an AI-powered LinkedIn post writing assistant designed to
            help entrepreneurs, freelancers, founders, professionals, and
            startups build personal brands and achieve growth. Whether you're
            attracting talent, generating leads, looking for a job or
            establishing thought leadership, Lek empowers you to create engaging
            LinkedIn content easily.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #6 */}
                <span className="text-2xl font-bold">#6</span>
                {/* App Icon */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <img
                    src={mural_icon}
                    alt="Mural App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <span className="text-2xl font-bold">
                    Mural: Grids for Instagram
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                  tabIndex={0}
                >
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 text-xl ml-1">★</span>
                    <span className="text-lg">4.4</span>
                    <span className="text-lg">(50+)</span>
                    <span className="mx-2 text-lg">|</span>
                    <span className="text-lg">Photo & Video</span>
                  </div>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: mural1, alt: "Feature 1" },
                  { src: mural2, alt: "Feature 3" },
                  { src: mural3, alt: "Feature 2" },
                  { src: mural4, alt: "Feature 4" },
                  { src: mural5, alt: "Feature 5" },
                  { src: mural6, alt: "Feature 6" },
                  { src: mural7, alt: "Feature 7" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Mural is a grid image crop for Insta feed. It also comes with photo
            grid editor & pic collage maker to make your post stand out. Create
            giant grid pic with mural, resizing image for insta, or image crop.
            The app will crop your grid in to 9square and save to device, ready
            to post on insta.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.muralgridforinstagram.squarecrop&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={google_dl}
                alt="Download on Play Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>
        </div>

        <div>
          <hr className="mt-8 md:my-12 border-gray-300" />
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #7 */}
                <span className="text-2xl font-bold">#7</span>
                {/* App Icon */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={panoslice_icon}
                    alt="Panoslice App Icon"
                    className="w-16 h-16 rounded-2xl border border-gray-300"
                  />
                </a>
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold"
                  style={{ textDecoration: "underline" }}
                >
                  Panoslice: Insta collage maker
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-1"
                  style={{ textDecoration: "none" }}
                >
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.5</span>
                  <span className="text-lg">(1.9k+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </a>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

          <div className="flex justify-center relative mb-12">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
                {[
                  { src: panaroid1, alt: "Feature 1" },
                  { src: panaroid2, alt: "Feature 2" },
                  { src: panaroid3, alt: "Feature 3" },
                  { src: panaroid4, alt: "Feature 4" },
                  { src: panaroid5, alt: "Feature 5" },
                  { src: panaroid6, alt: "Feature 6" },
                  { src: panaroid7, alt: "Feature 7" },
                  { src: panaroid8, alt: "Feature 8" },
                  // Add more images here as needed
                ].map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Panoslice is a unique collage and story maker for instagram. Layer
            images across a seamless canvas, edit pics, remove BG, add text on
            photo & much more. Make scroll-stopping designs from scratch or use
            any of the 400+ pre-made templates. Anyone can create with
            Panoslice.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://play.google.com/store/apps/details?id=com.panoslice.panoslicepro&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={google_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>
      </div>
      <footer className="w-full py-8 border-t border-gray-200 bg-black text-center text-gray-200 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div>
            &copy; {new Date().getFullYear()} Best Photo Apps. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
