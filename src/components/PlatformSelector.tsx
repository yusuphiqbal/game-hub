import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import React from "react";

import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector: React.FC<Props> = ({
  onSelectPlatform,
  selectedPlatformId,
}) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
