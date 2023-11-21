import { useState } from "react";
import "./App.css";
import Inspx from "inspx";
import Text from "./components/Text";
import Icon from "./components/icons";
import user from "./assets/user-photo.png";
import intersect from "./assets/Intersect.png";
import eclipse from "./assets/Ellipse 2.png";
import rectangle from "./assets/Rectangle 8.png";
import rectangle2 from "./assets/Rectangle 5.png";

function App() {
  return (
    <>
      <Inspx>
        <div className="bg-light-green flex items-center justify-center py-[145px] h-[982px] pb-[195px]">
          <div className=" relative bg-white   mx-[195px] h-[667px]  rounded-[32px]  shadow-lg flex ">
            <img src={intersect} alt="" className="absolute top-15 -right-1" />
            <img
              src={eclipse}
              alt=""
              className="absolute bottom-[55px] right-[550px] w-12 h-12"
            />
            <img
              src={rectangle}
              alt=""
              className="absolute bottom-[60px] right-[860px] w-10 h-8 z-10"
            />
            <img
              src={rectangle}
              alt=""
              className="absolute top-[90px] right-[890px] w-10 h-8 z-10"
            />
            <img
              src={rectangle2}
              alt=""
              className="absolute top-[70px] right-[550px] z-10"
            />

            <div className="flex flex-col gap-3">
              <div className="bg-green px-[25px] rounded-tl-lg h-[780px] pt-[300px]">
                <span className="flex gap-1 space-y-[-3px]">
                  <Icon name="Email" />
                  <Text variant="body-two" className="text-white">
                    Email
                  </Text>
                </span>
                <Text variant="body-one" className="text-white">
                  mesfintdev@mail.com
                </Text>
                <div className="flex gap-1  flex-col my-10">
                  <span className="flex space-y-[-3px] gap-1">
                    <Icon name="Phone" />
                    <Text variant="body-two" className="text-white">
                      Phone
                    </Text>
                  </span>
                  <span>
                    <Text variant="body-one" className="text-white">
                      (+358) 6 32 43 1290
                    </Text>
                  </span>
                </div>
              </div>
              <div className="bg-green px-[40px] rounded-bl-lg h-[380px] ">
                <Text variant="body-two" className="py-[24px] text-white">
                  Find me on
                </Text>
                <div className="flex gap-4  ">
                  <span>
                    <Icon name="Github" className="hover:bg-white" />
                  </span>
                  <span>
                    <Icon name="Linkedin" />
                  </span>
                  <span>
                    <Icon name="Twitter" />
                  </span>
                </div>
              </div>
            </div>
            <div className="  w-[347px] h-[549px]  mr-[200px] ">
              <img
                className="   absolute top-10 left-[210px]  "
                src={user}
                alt=""
              />
            </div>
            <div className="px-[32px] py-[70px]">
              <Text variant="heading-one" className="mt-[47px] uppercase">
                <span className="text-green ">Mesfin</span> Tegegne
              </Text>
              <Text variant="subheading-one">
                Front-end Developer | Helsinki
              </Text>
              <Text variant="body-one" className="mt-[14px]">
                High accomplishment and user-focused Front-end Developer adept
                in collaborating with UX and design teams to plan the technical
                writing and execution of functional specifications for websites
                and applications.
              </Text>
              <Text variant="subheading-one" className="mt-[24px]">
                Working with technologies:
              </Text>
              <ul className="mt-[14px] leading-8 ml-5 list-disc">
                <li>JavaScript</li>
                <li>React</li>
                <li>Typescript</li>
                <li>NodeJs</li>
                <li>Zustand</li>
              </ul>
            </div>
          </div>
        </div>
      </Inspx>
    </>
  );
}

export default App;
