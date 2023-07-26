import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput: React.FC = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<IoSearch />} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
