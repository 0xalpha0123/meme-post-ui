import React from "react";

import { SearchIcon } from "./Icons";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "",
  value = "",
  onChange,
  name = "",
}) => {
  return (
    <div className="relative py-1 px-2.5 focus:transition-none">
      <SearchIcon className="absolute w-5 h-5 mt-2.5 pb-0.5 ml-2 text-primary_white-600 dark:text-primary_dark-600" />
      <input
        className="w-full py-2 pl-8 text-sm focus:transition-none text-primary_white-700 dark:text-primary_dark-700 bg-primary_white-50 dark:bg-primary_dark-50 border border-primary_white-200 dark:border-primary_dark-200 rounded focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:outline-none dark:focus:outline-none placeholder-primary_white-200 dark:placeholder-primary_dark-200"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default SearchInput;
