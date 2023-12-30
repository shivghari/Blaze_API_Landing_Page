"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "100",
    description: "Learning Courses",
  },
  {
    title: "500+",
    description: "Expert Instructors",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 text-center"
        placeholder={""}
      >
        Mobile Convenience
      </Typography>
      <Typography
        variant="lead"
        className="mb-5 px-4 text-center text-xl !text-gray-500 lg:px-0"
        placeholder={""}
      >
        Access your learning materials on the go.
      </Typography>

      <div className="md:w-[80%] w-full mt-10 m-auto flex flex-wrap justify-evenly">
        {OPTIONS.map(({ title, description }) => (
          <InfoCard key={title} title={title}>
            {description}
          </InfoCard>
        ))}
      </div>
    </section>
  );
}
export default MobileConvenience;
