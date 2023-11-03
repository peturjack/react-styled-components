import { Normalbutton, Weirdbutton } from "../styles/button"
import { ButtonWrapper,CenterAll, } from "../styles/app.styles"
import { Flexd, Ahref, SpaceOutLinks, Sungod } from "../styles/nav.links";
import { SunGodWrapper } from "../styles/image";
import sun from "../images/sungod.svg"

/*
here i am using all the styled components and putting them inside a header components wich i would then call in the app.tsx
*/ 

export function Header() {
  return (
    <>
      <CenterAll>
        <SunGodWrapper>
        <Sungod src={sun} alt="Logo image" />
        </SunGodWrapper>
        <Flexd>
            <SpaceOutLinks><Ahref href="#">Home</Ahref></SpaceOutLinks>
            <SpaceOutLinks><Ahref href="#">About</Ahref></SpaceOutLinks>
            <SpaceOutLinks><Ahref href="#">Contact</Ahref></SpaceOutLinks>
        </Flexd>
        <ButtonWrapper>
          <Normalbutton>Sign in</Normalbutton>
          <Weirdbutton>Register</Weirdbutton>
        </ButtonWrapper>
      </CenterAll>
    </>
  );
}