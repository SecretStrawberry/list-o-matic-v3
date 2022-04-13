import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

import { IoCloseSharp } from "react-icons/io5";

import { BsPatchQuestion } from "react-icons/bs";

const appear = keyframes`
0% {
    transform: scale(0);
}
100% {
    transform: scale(1);
}
`;

const About = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap");
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Istok Web", sans-serif;

  min-height: 100%;
  min-width: 100%;

  background-color: rgba(247, 245, 242, 0.5);

  animation: ${appear};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  z-index: 3;
`;

const AboutBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #203a43;

  padding: 0.5rem 1rem;

  & > h2 {
    text-align: center;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 4rem;
  width: fit-content;
  box-shadow: inset 0 0 4px rgba(247, 245, 242, 1);
`;

export const Information = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <BsPatchQuestion
        onClick={() => {
          setIsVisible(true);
        }}
      />
      {isVisible && (
        <About onClick={() => setIsVisible(false)}>
          <AboutBody onClick={(e) => e.stopPropagation()}>
            <Close
              onClick={() => {
                setIsVisible(false);
              }}
            >
              <IoCloseSharp />
            </Close>
            <h2>About</h2>
            <p>
              List-O-Matic is a simple shopping list application, designed for
              mobile devices as a web app for quick all-around lists.
            </p>
            <p>
              Using it is quite simple. Add a list, click on it and then add
              products to each list. Clicking again on the list title will close
              the additional products lists.
            </p>
            <p>
              If you delete a list from the X button, all the contents of the
              list will be deleted too.
            </p>
            <p>
              A product of a list can be deleted, also can be checked as
              completed, which will send it to a completed list just under the
              active products.
            </p>
            <p>
              ATTENTION: List-O-Matic uses the storage memory of the browser
              that is opened. For example, if you use the computer browser to
              make a list this WILL NOT be propagated on the mobile browser
              since there are different.
            </p>
            <p>
              BE CAREFUL: since all the data is saved on the device in use,
              avoid making hundreds of lists with hundreds of products. This
              will consume storage space on the user's device. But with the new
              modern devices storage capability, I do not think this will be an
              issue.
            </p>
          </AboutBody>
        </About>
      )}
    </>
  );
};
