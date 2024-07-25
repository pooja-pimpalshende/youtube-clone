import Button from "./Button";
import { useRef } from "react";

const list = [
  "All",
  "Cricket",
  "Music",
  "Akshay Saini",
  "News",
  "Data Structure",
  "TMKOC",
  "JavaScript",
  "React",
  "Kapil Sharma",
  "Wion",
  "Gaming",
  "Live",
  "Sports",
  "Comedy",
  "Ranveer Allahbadia",
];
const ButtonList = () => {
  const containerRef = useRef(null);
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative flex items-center w-4/5">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 p-2 rounded-full"
      >
        &lt;
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden whitespace-nowrap scroll-smooth pl-6 pr-6"
        style={{
          scrollBehavior: "smooth",
          maxWidth: "100%",
          padding: "1rem 0",
        }}
      >
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className=" absolute right-0 z-10 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonList;
