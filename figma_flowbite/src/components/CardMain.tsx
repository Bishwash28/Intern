import { Card } from "flowbite-react";
import { FaClock } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { Button } from "flowbite-react";

const customcard = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-light_grey dark:bg-white h-[474x] w-[410px] ",
    children: "flex h-[224px] flex-col justify-between gap-[16px] p-[20px]",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "h-[250px] w-[410px]",
    horizontal: {
      off: "rounded-tl-[20px] rounded-tr-[20px] relative",
      on: "h-96 w-full rounded-tl-[20px] rounded-tr-[20px] object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg relative",
    },
  },
};

// export function Card({
//   image,
//   by,
//   bypaxi,
//   bold,
//   weeks,
//   students,
//   pricebefore,
//   pricenow,
//   lastbutton,
// }) {
//   return (
//     <Card
//       theme={customcard}
//       className="max-w-sm m-5"
//       imgAlt="Meaningful alt text for an image that is not purely decorative"
//       imgSrc={image}
//     >
//       <div className="space-y-[16px]">
//         <div className="space-y-[12px]">
//           <div>
//             <p className="text-dark-grey">
//               {by}
//               <span className="text-black text-[16px]">&nbsp;{bypaxi}</span>
//             </p>
//           </div>
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-[20px] ">
//             {bold}
//           </h5>
//         </div>
//         <div className="flex  items-center text-dark-grey gap-[24px] ">
//           <p className="flex items-center gap-2 text-[16px]">
//             <FaClock className="text-sicons w-[16px] h-[16]" />
//             {weeks}
//           </p>
//           <p className="flex items-center gap-1.5 text-[16px]">
//             <RiGraduationCapFill className="text-sicons h-[16px] w-[16px]" />
//             {students}
//           </p>
//         </div>
//         <div>
//           <hr className="text-gray-300 h-[1px]" />
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="h-[27px] w-[46px] flex items-center">
//             <p className="line-through text-madhuro">{pricebefore}</p>
//             <p className="text-free font-bold">&nbsp;{pricenow}</p>
//           </div>
//           <div>
//             <Button color="dark:light" className="focus:ring-0">
//               {lastbutton}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }

// CardMain.tsx
// import React from "react";
// import { FaClock } from "react-icons/fa";
// import { RiGraduationCapFill } from "react-icons/ri";
// import { Button, Card } from "your-ui-library"; // Adjust this import to your actual UI lib

//biswo code

// interface CardProps {
//   image: string;
//   by: string;
//   bypaxi: string;
//   bold: string;
//   weeks: string;
//   students: string;
//   pricebefore: string;
//   pricenow: string;
//   lastbutton: string;
// }

// export function MyCard({
//   image,
//   by,
//   bypaxi,
//   bold,
//   weeks,
//   students,
//   pricebefore,
//   pricenow,
//   lastbutton,
// }: CardProps) {
//   return (
//     <Card
//       theme={customcard}
//       className="max-w-sm m-5"
//       imgAlt="Meaningful alt text for an image that is not purely decorative"
//       imgSrc={image}
//     >
//       <div className="space-y-[16px]">
//         <div className="space-y-[12px]">
//           <div>
//             <p className="text-dark-grey">
//               {by}
//               <span className="text-black text-[16px]">&nbsp;{bypaxi}</span>
//             </p>
//           </div>
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-[20px] ">
//             {bold}
//           </h5>
//         </div>
//         <div className="flex  items-center text-dark-grey gap-[24px] ">
//           <p className="flex items-center gap-2 text-[16px]">
//             <FaClock className="text-sicons w-[16px] h-[16]" />
//             {weeks}
//           </p>
//           <p className="flex items-center gap-1.5 text-[16px]">
//             <RiGraduationCapFill className="text-sicons h-[16px] w-[16px]" />
//             {students}
//           </p>
//         </div>
//         <div>
//           <hr className="text-gray-300 h-[1px]" />
//         </div>
//         <div className="flex items-center justify-between">
//           <div className="h-[27px] w-[46px] flex items-center">
//             <p className="line-through text-madhuro">{pricebefore}</p>
//             <p className="text-free font-bold">&nbsp;{pricenow}</p>
//           </div>
//           <div>
//             <Button color="dark:light" className="focus:ring-0">
//               {lastbutton}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }

export interface CardProps {
  image: string;
  by: string;
  bypaxi: string;
  bold: string;
  weeks: string;
  students: string;
  pricebefore: string;
  pricenow: string;
  lastbutton: string;
}

export function MyCard({
  image,
  by,
  bypaxi,
  bold,
  weeks,
  students,
  pricebefore,
  pricenow,
  lastbutton,
}: CardProps) {
  return (
    <div className="relative">
      <Card
        theme={customcard}
        className="max-w-sm relative group hover:shadow-2xl transition delay-80 duration-150 ease-in hover:-translate-y-3 hover:scale-101  rounded-l-[20px] rounded-r-[20px]"
        imgAlt="Course image"
        imgSrc={image}
      >
        {/* <div>
          <p className="dark:bg-black w-25 object-center text-white ml-1  absolute rounded-md p-1">
          Photography
          </p>
          <img src={image} alt="" className="h-[250px] w-[410px]" />
          </div> */}
        <div className="absolute top-0 mt-5 width-[114px] h-[40px]">
          <p className="bg-black text-white p-2 rounded-[8px]">Photography</p>
        </div>

        <div className="space-y-[16px]">
          <div className="space-y-[12px] h-[84px]">
            <p className="text-dark-grey">
              {by} <span className="text-black text-[16px]">{bypaxi}</span>
            </p>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-[20px] dark:group-hover:text-sicons">
              {bold}
            </h5>
          </div>

          <div className="flex items-center text-dark-grey gap-[24px]">
            <p className="flex items-center gap-[8px] text-[16px]">
              <FaClock className="text-sicons w-[16px] h-[16px]" />
              {weeks}
            </p>
            <p className="flex items-center gap-[8px] text-[16px]">
              <RiGraduationCapFill className="text-sicons h-[16px] w-[16px]" />
              {students}
            </p>
          </div>

          <div>
            <hr className="text-gray-300 h-[1px]" />
          </div>

          <div className="flex items-center justify-between h-[27px]">
            <div className=" w-[46px] flex items-center">
              <p className="line-through text-[18px] text-madhuro">
                {pricebefore}
              </p>
              <p
                className={`${
                  pricenow == "Free" ? "text-free" : "text-price"
                } font-bold text-[18px]`}
              >
                &nbsp;{pricenow}
              </p>
            </div>
            <Button color="dark:light" className="focus:ring-0">
              {lastbutton}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
