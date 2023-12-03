import "./styles (1).css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are those chairs assembled?",
    text: "LoremIpsum Dolor Sit amet consecteur, adipsicing elit. Haha react sure is fun to be honest, atleast a whole lot better that the DOM manipulation I had to do way back then before learning React",
  },
  {
    title: "How long do I have to return my chair?",
    text: "LoremIpsum Dolor Sit amet consecteur, adipsicing elit. Haha react sure is fun to be honest, atleast a whole lot better that the DOM manipulation I had to do way back then before learning React",
  },
  {
    title: " Do you ship to countries outside EU?",
    text: "LoremIpsum Dolor Sit amet consecteur, adipsicing elit. Haha react sure is fun to be honest, atleast a whole lot better that the DOM manipulation I had to do way back then before learning React",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {

  const [curOpen, setCurOpen] = useState(null);
  return <div className="accordion">
    {data.map((el, i) => <AccordionItem curOpen={ curOpen} onOpen={setCurOpen} num={i} title={el.title} key={ i} >{el.text}</AccordionItem>)}
  </div>
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(num);
  }

  return <div className={`item ${isOpen ? "open" : ""}`}  onClick={handleToggle}>
    <p className="number">{num+1}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen ? "-" : "+" }</p>
    {isOpen ? <div className="content-box">{children}</div> : <div></div>}
  </div>
}