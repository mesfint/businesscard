import { useState } from "react";
import "./App.css";
import Inspx from "inspx";
import Text from "./components/Text";
import Icon from "./components/icons";

function App() {
  return (
    <>
      <Inspx>
        <div className="bg-light-green flex items-center justify-center py-[145px] h-[982px] pb-[195px]">
          <div className=" bg-white   mx-[195px] h-[667px]  rounded-[32px]  shadow-lg flex ">
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
              <div className="bg-green px-[40px] rounded-bl-lg h-[380px]">
                <Text variant="body-two" className="py-[24px] text-white">
                  Find me on
                </Text>
                <div className="flex gap-4  ">
                  <span>
                    <Icon name="Github" />
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
            <div>image</div>
            <div className="px-[40px] py-[40px]">Zac Patric</div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            quisquam praesentium accusamus nam eveniet necessitatibus error
            cupiditate veniam minima numquam, nulla recusandae ducimus sequi
            aperiam consectetur ad omnis sunt! Natus? Delectus, perspiciatis
            aperiam? Repellendus id ullam at nihil expedita, quas consequatur
            necessitatibus sint ab iure dolor ut laudantium quasi impedit,
            sapiente repellat illum, blanditiis totam maiores quisquam minus!
            Veritatis, sapiente? Totam sequi perferendis inventore blanditiis
            nostrum sunt voluptatum ullam delectus omnis ab saepe voluptatem
            possimus, accusantium, tempore maxime iure alias quo quasi corporis
            placeat. Deleniti labore rem incidunt perferendis odio? Aut
            aspernatur voluptatibus nisi itaque dolor eveniet laboriosam culpa
          </div>
        </div>
      </Inspx>
    </>
  );
}

export default App;
