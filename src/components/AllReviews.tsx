import { RiArrowDropDownLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa"; // Import FontAwesome icons
import { FaCircleCheck } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    feedback:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
    verified: true,
    date:"Posted on August 14, 2023"
  },
  {
    name: "John D.",
    feedback:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    rating: 5,
    verified: true,
    date:"Posted on August 14, 2023"
  },
  {
    name: "Emma L.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: false,
    date:"Posted on August 14, 2023"
  },
  {
    name: "Michael B.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date:"Posted on August 14, 2023"
  },
  {
    name: "Sophia K.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date:"Posted on August 14, 2023"
  },
  {
    name: "Khan K.",
    feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
    verified: true,
    date:"Posted on August 14, 2023"
  },
];

export default function CustomerTestimonials() {
  return (
    <main className="md:mt-14">
       <div className="flex justify-between items-center border-b-2 pb-3 p-2 md:px-10 max-w-screen-2xl  mx-auto">
        <span className="text-sm hover:font-bold cursor-pointer text-gray-400 hover:text-gray-700 hover:underline underline-offset-4">Product Details</span>
        <span className="text-sm hover:font-bold cursor-pointer text-gray-400 hover:text-gray-700 hover:underline underline-offset-4">Rating & Reviews</span>
        <span className="text-sm hover:font-bold cursor-pointer text-gray-400 hover:text-gray-700 hover:underline underline-offset-4">FAQs</span>
       </div>
      <div className="w-full flex justify-center items-center  mb-1 max-w-screen-xl mx-auto">
        {/* Container */}
        <div className="w-[95%]  p-3 md:p-0">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-black text-xl md:text-2xl  pt-4 ml-2 text-center md:text-left">
            All Reviews
            </h1>
           <div className="flex items-center space-x-2 mt-4 md:mr-4">
              <div className="hidden md:block">              
              <Button variant={"outline"} className="rounded-[16px]">Latest <RiArrowDropDownLine className="ml-2 text-xl"/></Button>
              </div>
              <Button className="rounded-[16px]">Write a Review</Button>

          
            </div>
        </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-start justify-center p-4">
                    {/* Testimonial Card */}
                    <div className="flex justify-start items-center space-x-1 mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <h2 className="flex items-center text-lg font-bold mb-2" key={index}>
                      {testimonial.name}
                      {testimonial.verified && (
                        <FaCircleCheck className="text-green-500 ml-2" />
                      )}
                    </h2>
                    <p className="text-sm" key={index}>{testimonial.feedback}</p>
                    <p className="text-sm text-gray-400 mt-5" key={index}>{testimonial.date}</p>
                  </CardContent>
                </Card>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-6">
      <Button variant={"outline"}>Load More Reviews</Button>
      </div>
    </main>
  );
}
