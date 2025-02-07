import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

let product:Iproducts[] = [
    {
     title:"T-SHIRT WITH TAPE DETAILS",
     id:9,
     price:"$120",
     img_url:"/images/might1.png"
    },
    {
     title:"SKINNY FIT JEANS",
     id:10,
     price:"$120",
     img_url:"/images/might2.png",
     old_price:"$200"
    },
    {
     title:"CHECKERED SHIRT",
     id:11,
     price:"$120",
     img_url:"/images/might3.png"
    },
    {
     title:"SLEEVE STRIPED T-SHIRT",
     id:12,
     price:"$120",
     img_url:"/images/might4.png",
     old_price:"$200"

    }
]
// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];
  

export default function T_shirts(){
    return(  
        <div className="w-full h-full md:h-[500px] mt-10 max-w-screen-2xl  mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center">You might also like</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 pl-3 md:pl-0 mt-5 md:place-items-center">
                {
                    product.map((data,index)=>{
                        return(
                              <div key={index}>
                                 <Link href={`/product/${data.id}`}>
                                 <div className="w-[160px] h-[160px] md:w-[290px] mt-5 md:mt-0 md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={100} height={100}></Image>
                                 
                                  </div>
                                 </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold" key={index}>{data.title}</p>
                                {/* <p className="flex text-yellow-400" key={index}>{star}</p> */}
                                <div className="flex text-yellow-400">
                                 {/* Map stars correctly */}
                                 {star.map((icon, index) => (
                                   <span key={index}>{icon}</span>
                                 ))}
                               </div>
                                <p  className="font-bold mt-1" key={index}>{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}