
import im1 from "/Offerings/slide1/im1.png";
import im2 from "/Offerings/slide1/im2.png";
import tvbg from "/Offerings/tvbg.png";
import g from "/Offerings/Group.png";
import ell from "/Offerings/slide1/ellipse.png"

import slide2im1 from "/Offerings/slide2/slide2im1.png";
import slide2im2 from "/Offerings/slide2/slide2im2.png";
import slide2ell from "/Offerings/slide2/slide2ell.png"

import slide3im1 from "/Offerings/slide3/slide3im1.png";
import slide3im2 from "/Offerings/slide3/slide3im2.png";
import slide3ell from "/Offerings/slide3/slide3ell.png"


const offeringsData = [
  {
    id: 1,
    img1: im1,
    description: `As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances,
                    from high-performance LED TVs and smart displays to a variety of cutting-edge solutions,
                    all designed to deliver superior performance and an enhanced user experience.`,
    ell: ell,
    img2: im2,
    g: g,

    title: "Experience Brilliance in every pixel",
    titleColorStart: "#C1F0A2", 
    titleColorEnd: "#E2F9EF",
  },
  {
    id: 2,
    img1: slide2im1,
    description: `As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances,
                    from high-performance LED TVs and smart displays to a variety of cutting-edge solutions,
                    all designed to deliver superior performance and an enhanced user experience.`,
    ell: slide2ell,
    img2: slide2im2,
    g: g,
    title: "Innovating Entertainment One Screen at a time",
    titleColorStart:"#EA4865", 
    titleColorEnd: "#E2F9EF",
  },
  {
    id: 3,
    img1: slide3im1,
    description: `As a leading OEM, EKKAA offers a wide array of consumer electronics and appliances,
                    from high-performance LED TVs and smart displays to a variety of cutting-edge solutions,
                    all designed to deliver superior performance and an enhanced user experience.`,
    ell: slide3ell,
    img2: slide3im2,
    g: g,
    title: "Immersive Visuals, Unmatched Brilliance",
    titleColorStart: "#4E9E52", 
    titleColorEnd: "#E2F9EF",
  },

];

export default offeringsData;
