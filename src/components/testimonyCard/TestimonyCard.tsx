import React from "react";

type Props = {
  person: string;
  children: string;
};

export default function TestimonyCard({ children, person }: Props) {
  return (
    <div className="bg-white w-96 min-w-96 ml-16 p-7 rounded-[30px]">
      <p className="font-barlow italic text-base leading-8 pb-6">{children}</p>
      <h6 className="font-poppins text-[1rem] font-medium leading-6">
        {person}
      </h6>
    </div>
  );
}
