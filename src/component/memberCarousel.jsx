import React from "react";
import Slider from "react-slick";

const members = [
  {
    id: 1,
    name: "John Doe",
    designation: "Director",
    img: "/img1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Manager",
    img: "/img1.png",
  },
  {
    id: 3,
    name: "Alex Johnson",
    designation: "Coordinator",
    img: "/img1.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Assistant",
    img: "/img1.png",
  },
  {
    id: 5,
    name: "Michael Lee",
    designation: "Advisor",
    img: "/img1.png",
  },
];

const MemberCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Our Team</h2>
      <Slider {...settings}>
        {members.map((member) => (
          <div key={member.id} className="px-3">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-[#0f398f]"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MemberCarousel;
