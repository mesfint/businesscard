import { useState } from "react";
import "./App.css";
import Inspx from "inspx";
import Text from "./components/Text";
import Icon from "./components/icons";
import user from "./assets/user-photo.png";

function App() {
  return (
    <>
      <Inspx>
        <div className="bg-light-green flex items-center justify-center py-[145px] h-[982px] pb-[195px]">
          <div className=" relative bg-white   mx-[195px] h-[667px]  rounded-[32px]  shadow-lg flex ">
            <div className="flex flex-col gap-3">
              <div className="bg-green px-[40px] rounded-tl-lg h-[780px] pt-[300px]">
                <span className="flex gap-1 space-y-[-3px]">
                  <Icon name="Email" />
                  <Text variant="body-two" className="text-white">
                    Email
                  </Text>
                </span>
                <Text variant="body-one" className="text-white">
                  zac.patrick@mail.com
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
                      (+33) 6 32 43 1290
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
            <div className="w-[347px] h-[549px]  mr-[200px] ">
              <img
                className="   absolute top-10 left-[230px]  "
                src={user}
                alt=""
              />
            </div>
            <div className="px-[32px] py-[40px]">
              <Text variant="heading-one" className="mt-[47px] uppercase">
                <span className="text-green ">Mesfin</span> Tegegne
              </Text>
              <Text variant="subheading-one">
                Front-end Developer * Helsinki
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
