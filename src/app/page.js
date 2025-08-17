import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Evan Levine Real Estate | Designing the Essence of Prestige",
  description: "Experience luxury real estate with Evan Levine. Specializing in prestigious properties and personalized service.",
  keywords: "real estate, luxury homes, Evan Levine, prestige properties",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
