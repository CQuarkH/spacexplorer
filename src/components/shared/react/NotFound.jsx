import { useLottie } from "lottie-react";
import notFoundAnimation from "../../../common/lottie/404-animation.json";

function NotFound() {
  const options = {
    animationData: notFoundAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <> {View} </>;
}

export default NotFound;
