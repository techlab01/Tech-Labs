import React from "react";
import Image from "next/image";
import { searchIcon } from "../utils";
import { filterBy } from "../constants";

interface FilterComponentProps {
  onSearchChange: (query: string) => void;
  onFilterChange: (filter: string) => void;
  selectedFilter: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onSearchChange,
  onFilterChange,
  selectedFilter,
}) => {
  return (
    <section className="bg-white pt-20">
      <div className="screen-max-width flex justify-center gap-10 items-center sm:px-20 px-10 w-full flex-col lg:flex-row lg:w-[70%]">
        <div className="text-blue bg-blue-light flex w-full items-center gap-4 justify-between p-4 drop-shadow-md rounded-lg">
          <Image src={searchIcon} width={20} height={20} alt="search-icon" />
          <input
            type="search"
            placeholder="Search"
            className="w-full border bg-transparent border-none outline-none cursor-pointer"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="text-blue bg-blue-light flex w-full items-center justify-between p-2 drop-shadow-md rounded-lg px-6">
          {filterBy.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                selectedFilter === item
                  ? "text-white rounded-lg p-2 px-4 bg-blue"
                  : ""
              }`}
              onClick={() => onFilterChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterComponent;
