import { Fragment } from "react";
import Wrapper from "../src/components/Wrapper";
import Image from "next/image";
import Instagram from "../src/instagram";
import { theme } from "../tailwind.config";

const data = [
  {
    image: "/images/Capture.PNG",
    name: "Cnl Chevron",
  },
  {
    image: "/images/Capture1.PNG",
    name: "Cleo Bag",
  },
  {
    image: "/images/Capture2.PNG",
    name: "Russy Bag",
  },
  {
    image: "/images/Capture3.PNG",
    name: "Sharon Snake",
  },
  {
    image: "/images/Capture4.PNG",
    name: "Ysl Premium",
  },
  {
    image: "/images/Capture5.PNG",
    name: "Azura Bag",
  },
  {
    image: "/images/Capture6.PNG",
    name: "Ysl Sb",
  },
  {
    image: "/images/Capture7.PNG",
    name: "Sarah Bag",
  },
];

export default function Home() {
  return (
    <Fragment>
      <div className="bg-white flex justify-center fixed top-0 left-0 w-full z-20 shadow-md">
        <Wrapper className="h-16 flex items-center justify-between">
          <span className="logo">TamyShop</span>
          <a href="https://instagram.com/tamyshoop">
            <Instagram
              width={20}
              height={20}
              fill={theme.extend.colors.primary[100]}
            />
          </a>
        </Wrapper>
      </div>
      <div className="bg-primary-100 h-screen flex items-center justify-center">
        <div className="display text-2xl lg:text-5xl text-white text-center">
          Selamat Datang!
        </div>
      </div>
      <div className="flex justify-center relative pt-6 mb-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-primary-100"></div>
        <Wrapper className="bg-white rounded-lg shadow z-10 p-5">
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((item, index) => (
              <div
                className="border border-gray-300 rounded flex flex-col p-2"
                key={`${index}`}
              >
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded"
                />
                <div className="flex-1 p-5">
                  <div className="text-lg text-gray-800 font-bold text-center">
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
      <div className="h-16 flex justify-center items-center text-gray-600">
        <span>&copy;2021 TamyShop</span>
      </div>
    </Fragment>
  );
}
