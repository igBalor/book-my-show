import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
   // eslint-disable-next-line
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28 ],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 5953.989,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
    {
      adult: false,
      backdrop_path: "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
      genre_ids: [
        10752,
        18,
        28
      ],
      id: 49046,
      original_language: "de",
      original_title: "Im Westen nichts Neues",
      overview: "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
      popularity: 573.825,
      poster_path: "/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
      release_date: "2022-10-07",
      title: "All Quiet on the Western Front",
      video: false,
      vote_average: 7.8,
      vote_count: 1020
    },
    {
      adult: false,
      backdrop_path: "/fMymfWwgTfXh9RkBCFuaZrdn8Of.jpg",
      genre_ids: [
        28,
        27 ],
      id: 760204,
      original_language: "vi",
      original_title: "The Lair",
      overview: "Royal Air Force pilot Lt. Kate Sinclair is on her final flight mission when her jet is shot down over one of the most dangerous rebel strongholds in Afghanistan. She finds refuge in an abandoned underground bunker where deadly man-made creatures known as Ravagers — half-human, half-alien, and hungry for human flesh — are awakened.",
      popularity: 530.946,
      poster_path: "/ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg",
    release_date: "2022-10-28",
      title: "The Lair",
      video: false,
      vote_average: 6.3,
      vote_count: 34
    },
    {
      adult: false,
      backdrop_path: "/u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
      genre_ids: [
        9648,
        12,
        35,
        80
      ],
      id: 829280,
      original_language: "en",
      original_title: "Enola Holmes 2",
      overview: "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
      popularity: 570.117,
      poster_path: "/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
      release_date: "2022-11-04",
      title: "Enola Holmes 2",
      video: false,
      vote_average: 7.7,
      vote_count: 1259
    },
    {
      adult: false,
      backdrop_path: "/729a5iDNxr5l2Zbc8lcwndlJavN.jpg",
      genre_ids: [
        878,
        27
      ],
      id: 844396,
      original_language: "en",
      original_title: "The Friendship Game",
      overview: "A group of teens in a small town come across a strange object that tests their loyalties to each other with increasingly destructive consequences the deeper into the game they go.",
      popularity: 430.395,
      poster_path: "/qXaJkaVTNMhrOylFi6xrWnBQGE8.jpg",
      release_date: "2022-11-11",
      title: "The Friendship Game",
    video: false,
      vote_average: 5.5,
      vote_count: 13
    },
    {
      adult: false,
      backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      genre_ids: [
        28,
        12,
        878
      ],
      id: 505642,
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      popularity: 1625.367,
      poster_path: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      video: false,
      vote_average: 7.5,
      vote_count: 1227
    },
    
  {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    genre_ids: [
      28,
      14,
      878
    ],
    id: 436270,
    original_language: "en",
    original_title: "Black Adam",
    overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    popularity: 5735.977,
    poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    video: false,
    vote_average: 7.3,
    vote_count: 2542
  },
  {
    adult: false,
    backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    genre_ids: [
      28,
      18,
      36
    ],
    id: 724495,
    original_language: "en",
    original_title: "The Woman King",
    overview: "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
    popularity: 3396.412,
    poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    release_date: "2022-09-15",
    title: "The Woman King",
    video: false,
    vote_average: 7.9,
    vote_count: 628
  },
  {
    adult: false,
    backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
    genre_ids: [
      14,
      28,
      35,
      80
    ],
    id: 1013860,
    original_language: "en",
    original_title: "R.I.P.D. 2: Rise of the Damned",
    overview: "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
    popularity: 2315.476,
    poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    release_date: "2022-11-15",
    title: "R.I.P.D. 2: Rise of the Damned",
    video: false,
    vote_average: 6.7,
    vote_count: 208
  },
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
     // eslint-disable-next-line
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;