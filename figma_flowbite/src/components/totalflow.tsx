import { Card } from "flowbite-react";
const totalcard = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-light_grey dark:bg-white h-[474x] w-[410px] ",
    children: "flex h-full flex-col justify-center gap-4 p-6",
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

export function TotalFlow() {
  return (
    <div>
      <Card
        theme={totalcard}
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/public/First.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
}
