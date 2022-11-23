import React, { useCallback, useEffect, useRef, useState } from "react";

import Spinner from "./Spinner";
import { ChevronIcon, CloseIcon } from "./Icons";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import SearchInput from "./SearchInput";
import Options from "./Options";
import { Option, Options as ListOption } from "./type";
import SelectProvider from "./SelectProvider";

interface SelectProps {
  options: ListOption;
  value: Option | Option[] | null;
  onChange: (value?: Option | Option[] | null) => void;
  placeholder?: string;
  isMultiple?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  loading?: boolean;
  menuIsOpen?: boolean;
  searchInputPlaceholder?: string;
  noOptionsMessage?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  value = null,
  onChange,
  placeholder = "Select...",
  searchInputPlaceholder = "Search...",
  isMultiple = false,
  isClearable = false,
  isSearchable = false,
  isDisabled = false,
  loading = false,
  menuIsOpen = false,
  noOptionsMessage = "No options found",
}) => {
  const [open, setOpen] = useState<boolean>(menuIsOpen);
  const [list, setList] = useState<ListOption>(options);
  const [inputValue, setInputValue] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formatItem = (item: Option) => {
      if ("disabled" in item) return item;
      return {
        ...item,
        disabled: false,
      };
    };

    setList(
      options.map((item) => {
        if ("options" in item) {
          return {
            label: item.label,
            options: item.options.map(formatItem),
          };
        } else {
          return formatItem(item);
        }
      })
    );
  }, [options]);

  const toggle = useCallback(() => {
    if (!isDisabled) {
      setOpen(!open);
    }
  }, [isDisabled, open]);

  const closeDropDown = useCallback(() => {
    if (open) setOpen(false);
  }, [open]);

  useOnClickOutside(ref, () => {
    closeDropDown();
  });

  const onPressEnterOrSpace = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      if ((e.code === "Enter" || e.code === "Space") && !isDisabled) {
        toggle();
      }
    },
    [isDisabled, toggle]
  );

  const handleValueChange = useCallback(
    (selected: Option) => {
      function update() {
        if (!isMultiple && !Array.isArray(value)) {
          closeDropDown();
          onChange(selected);
        }

        if (isMultiple && (Array.isArray(value) || value === null)) {
          onChange(value === null ? [selected] : [...value, selected]);
        }
      }

      if (selected !== value) {
        update();
      }
    },
    [closeDropDown, isMultiple, onChange, value]
  );

  const clearValue = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onChange(null);
    },
    [onChange]
  );

  const removeItem = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, item: Option) => {
      if (isMultiple && Array.isArray(value) && value.length) {
        e.stopPropagation();
        const result = value.filter((current) => item.value !== current.value);
        onChange(result.length ? result : null);
      }
    },
    [isMultiple, onChange, value]
  );

  const getSelectClass = useCallback(() => {
    // @ts-ignore
    // const ringColor = COLORS.includes(primaryColor)
    //   ? THEME_DATA.ring[primaryColor]
    //   : THEME_DATA.ring[DEFAULT_THEME];
    const ringColor = "";
    // @ts-ignore
    // const borderFocus = COLORS.includes(primaryColor)
    //   ? THEME_DATA.borderFocus[primaryColor]
    //   : THEME_DATA.borderFocus[DEFAULT_THEME];
    const borderFocus = "";
    const baseClass =
      "flex text-sm text-gray-500 border border-primary_white-200 dark:border-primary_dark-200 rounded shadow-sm transition-all duration-100 focus:outline-none dark:focus:outline-none focus:border-primary_white-300 dark:focus:border-primary_dark-300 focus:transition-none";
    return `${baseClass}${
      isDisabled
        ? " bg-primary_white-200 dark:bg-primary_dark-200 focus:border-primary_white-200 dark:focus:border-primary_dark-200 cursor-not-allowed"
        : ` bg-primary_white-50 dark:bg-primary_dark-50 ${borderFocus} ${ringColor}`
    }`;
  }, [isDisabled]);

  return (
    <SelectProvider value={value} handleValueChange={handleValueChange}>
      <div className="relative w-full" ref={ref}>
        <div
          tabIndex={0}
          aria-expanded={open}
          onKeyDown={onPressEnterOrSpace}
          onClick={toggle}
          className={getSelectClass()}
        >
          <div className="grow pl-2.5 py-2.5 pr-2 flex flex-wrap gap-1">
            {!isMultiple ? (
              <p className="truncate cursor-default select-none">
                {value && !Array.isArray(value) ? value.label : placeholder}
              </p>
            ) : (
              <>
                {value === null && placeholder}

                {Array.isArray(value) &&
                  value.map((item, index) => (
                    <div
                      className={`bg-primary_white-100 dark:bg-primary_dark-100 border border-primary_white-200 dark:border-primary_dark-200 rounded-sm flex space-x-1${
                        isDisabled ? " border-gray-500 px-1" : " pl-1"
                      }`}
                      key={index}
                    >
                      <p className="text-gray-600 truncate cursor-default select-none">
                        {item.label}
                      </p>
                      {!isDisabled && (
                        <div
                          onClick={(e) => removeItem(e, item)}
                          className={`flex items-center px-1 cursor-pointer rounded-r-sm hover:bg-primary_white-200 dark:hover:bg-primary_dark-200 hover:text-primary_white-700 dark:hover:text-primary_dark-700`}
                        >
                          <CloseIcon className="w-3 h-3 mt-0.5" />
                        </div>
                      )}
                    </div>
                  ))}
              </>
            )}
          </div>

          <div className="flex flex-none items-center py-1.5">
            {loading && (
              <div className="px-1.5">
                <Spinner />
              </div>
            )}

            {isClearable && !isDisabled && value !== null && (
              <div className="px-1.5 cursor-pointer" onClick={clearValue}>
                <CloseIcon className={"w-5 h-5 p-0.5"} />
              </div>
            )}

            <div className="h-full">
              <span className="w-px h-full inline-block text-primary_white-600 dark:text-primary_dark-600 bg-primary_white-200 dark:bg-primary_dark-200 text-opacity-0" />
            </div>

            <div className="px-1.5">
              <ChevronIcon
                className={`transition duration-100 w-6 h-6 p-0.5${
                  open
                    ? " transform rotate-90 text-primary_white-600 dark:text-primary_dark-600"
                    : " text-primary_white-600 dark:text-primary_dark-600"
                }`}
              />
            </div>
          </div>
        </div>

        {open && !isDisabled && (
          <div
            tabIndex={-1}
            className="absolute z-10 w-full bg-primary_white-100 dark:bg-primary_dark-100 shadow-lg border border-primary_white-200 dark:border-primary_dark-200 rounded py-1 mt-1.5 text-sm text-gray-700"
          >
            {isSearchable && (
              <SearchInput
                value={inputValue}
                placeholder={searchInputPlaceholder}
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}

            <Options
              list={list}
              noOptionsMessage={noOptionsMessage}
              text={inputValue}
              isMultiple={isMultiple}
              value={value}
            />
          </div>
        )}
      </div>
    </SelectProvider>
  );
};

export default Select;
