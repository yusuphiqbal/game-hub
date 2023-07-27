import {
  IoLogoWindows,
  IoLogoPlaystation,
  IoLogoTux,
  IoLogoApple,
  IoLogoAndroid,
  IoGlobe,
  IoLogoXbox,
} from "react-icons/io5";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { HStack, Icon } from "@chakra-ui/react";
import React from "react";

import { Platform } from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList: React.FC<Props> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: IoLogoWindows,
    playstation: IoLogoPlaystation,
    xbox: IoLogoXbox,
    nintendo: BsNintendoSwitch,
    mac: IoLogoApple,
    linux: IoLogoTux,
    ios: MdPhoneIphone,
    web: IoGlobe,
    android: IoLogoAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
