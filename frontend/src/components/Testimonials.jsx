import React, { useRef } from "react";
import Title from './Title';
import rightarrow from '../assets/right-arrow.png'
import leftarrow from '../assets/left-arrow.png'

const testimonials = [
  { name: "Samidha Patankar", remark: "Love the jewellery, so premium, elegant and affordable. Surely buying more from you" },
  { name: "Amit Kumar", remark: "I ordered earrings for my wife and it was very beautiful. Packaging and everything was perfect. Quality of earings is also good. Would highly recommend. Follow their website or instagram page. Thank you." },
  { name: "Raj Warose", remark: "I purchased a few earnings for my fiancé. She loved it. Very trendy and stylish designs. I loved their product and good quality." },
  { name: "Aarchie Kadam", remark: "Recently purchased a pair of earring with good quality and budget friendly. Not only the product was amazing but their interaction with the customer is just very polite and amazing." },
  { name: "Juilee Khadke", remark: "I had ordered a raksha bandhan gift box for my sister and I loved it. Packaging is so good and the items are of such good quality. I like how each box has a surprise sweet in it, that's so cute and thoughtful. I love it." },
  { name: "Yojana Bhoir", remark: "Recently purchased a bunch of earring, they have a wide variety of unique pieces to offer, great quality at affordable price. Do check out their other products as well." },
  { name : "Smritika Patil", remark : "They are very creative and keep coming up with new innovative and beautiful designs for all types of people. I absolutely love them. Highly recommended"}
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-10 my-12">
      <div className="text-center text-3xl py-2">
        <Title text1={"WHAT OUR"} text2={"CUSTOMERS SAY"} />
      </div>
      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        >
          <img src={leftarrow} alt="Left Arrow" className="w-5 h-5" />
        </button>

        {/* Testimonials List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">"{t.remark}"</p>
              <p className="text-gray-900 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        >
          <img src={rightarrow} alt="right Arrow" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
