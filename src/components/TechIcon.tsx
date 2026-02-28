import React, { Component } from "react"

type Props = {
  component: React.ElementType;
};

export const TechIcon = ({ component: Icon }: Props) => {
  return (
    <Icon className="w-8 h-8 text-pink-300" />
  );
};