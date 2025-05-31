import { IoLogoSlack } from "react-icons/io";
import { PiHandsClappingLight } from "react-icons/pi";
const IconsUI = {
  Logotype: ({ className }) => {
    return <IoLogoSlack className={className} />;
  },
  Clap: ({ className }) => {
    return <PiHandsClappingLight className={className} />;
  },
};

export default IconsUI;
