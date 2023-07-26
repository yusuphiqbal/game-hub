import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}>
      <InputGroup>
        <InputLeftElement children={<IoSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
