import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector: React.FC = () => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
