import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import HPC1 from "../images/HPC1.PNG";
import HPC2 from "../images/HPC1.PNG";
import HPC3 from "../images/HPC1.PNG";

const Gallery = (props) => {
  let carouselItems = [
    {
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
      src: HPC1,
    },
    {
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
      src: HPC2,
    },
    {
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
      src: HPC3,
    },
  ];
  return <UncontrolledCarousel items={carouselItems} />;
};

export default Gallery;
