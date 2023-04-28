import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
//import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
//import portfolio from "./assets/portfolio.png";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "EID ALI"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+59165466523"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "eidalihuarachi@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />,<FaInstagram />, <FaNodeJs />, <FaLinkedin />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Desarrollador Web Junior",
    company: "empresa minera JANCHA LLAWI"
  },
  {
    di: 2,
    year: "2022",
    position: "Desarrollador Web Pasante",
    company: "empresa minera JANCHA LLAWI"
  },
  {
    id: 3,
    year: "2021",
    position: "Desarrollador Web Pasante",
    company: "empresa minera JANCHA LLAWI"
  }
]
export const finishes = [
  {
    id: 1,
    number: '3+',
    itemName: "Años de experiencia"
  },
  {
    id: 2,
    number: "12+",
    itemName: "Conexciones"
  },
  {
    id: 3,
    number: "200+",
    itemName: "Descarga de documentacion"
  },
  {
    id: 4,
    number: "25+",
    itemName: "Amigos en la comunidad"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "DISEÑOS"
  }
]


export const workNavs = [
  "All", "Web", "App", "DISEÑOS"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "21 de septiempre #50 Potosi/Bolivia"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "eidalihuarachi@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+591-65466523"
  }
]
