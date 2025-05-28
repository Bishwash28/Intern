// import { Card } from "flowbite-react";
// import type { CardProps } from "./CardMain";
import MydataCard from "./data";
import { MyCard } from "./CardMain";
//biswo code
// const MyDisplay = () => {
//   return (
//     <div>
//       {MydataCard.map((MydataCard: CardProps) => {
//         return (
//           <div>
//             <Card
//               //key={MydataCard.id}
//               imgSrc={MydataCard.image}
//               by={MydataCard.by}
//               bypaxi={MydataCard.bypaxi}
//               bold={MydataCard.bold}
//               weeks={MydataCard.weeks}
//               students={MydataCard.students}
//               pricebefore={MydataCard.pricebefore}
//               pricenow={MydataCard.pricenow}
//               lastbutton={MydataCard.lastbutton}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const MyDisplay = () => {
  return (
    // <div className="max-w-[1290px] border border-amber-800 md:m-30  lg:ml-50 flex justify-center">
    <div className="flex justify-center">
      <div className="max-w-[1290px]  border-0 mt-10 md:mt-10">
        <div className="flex justify-center flex-wrap lg:gap-[30px] md:gap-[30px] space-y-5 mt-10 md:mt-10">
          {/* // <div className="grid grid-cols-3 lg:gap-[30px] md:gap-[30px] space-y-3 mt-10 md:mt-10"> */}
          {MydataCard.map((item, index) => (
            <MyCard
              key={index}
              image={item.image}
              by={item.by}
              bypaxi={item.bypaxi}
              bold={item.bold}
              weeks={item.weeks}
              students={item.students}
              pricebefore={item.pricebefore}
              pricenow={item.pricenow}
              lastbutton={item.lastbutton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyDisplay;
