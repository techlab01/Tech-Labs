"use client";
import React, { useState } from "react";
import MainLayout from "@/src/components/layout";
import {
  buttonText,
  services,
  servicesContent,
  servicesHeader,
} from "@/src/constants";
import Banner from "@/src/components/banner";
import MiddleSection from "@/src/section/middle";
import CommonSection from "@/src/section/common";
import Image from "next/image";
import FilterComponent from "@/src/components/filter";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("View All");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery) ||
      service.description.toLowerCase().includes(searchQuery);
    const matchesFilter =
      selectedFilter === "View All" || service.title.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <MainLayout>
      <MiddleSection
        className="nav-height"
        header={servicesHeader.expertise}
        content={servicesContent.services}
        buttonText={buttonText.explore}
        disableButton
        noImage
        showBg={true}
      />
      <Banner
        bannerImg={servicesContent.bannerImg}
        bannerText={servicesContent.bannerText}
      />
      <FilterComponent
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        selectedFilter={selectedFilter}
      />

      {filteredServices.length > 0 ? (
        filteredServices.map((item, index) => (
          <CommonSection
            key={item.id}
            header={item.title}
            disableButton={true}
            content={item.description}
            reverseRow={index % 2 !== 0}
          >
            <Image
              alt={`service-image-${index}`}
              src={item.img}
              height={800}
              width={800}
              className="w-full h-full object-cover rounded-3xl"
            />
          </CommonSection>
        ))
      ) : (
        <div className="text-center common-padding text-xl nav-height text-blue mt-10">
          No Data Found
        </div>
      )}
    </MainLayout>
  );
}
