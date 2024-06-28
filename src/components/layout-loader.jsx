"use client";
import React from "react";
// import { ReactComponent as SiteLogo } from "@/components/svg/duel-tone/logo.svg";
import { Loader2, IceCream2Icon } from "lucide-react";
const LayoutLoader = () => {
  return (
    <div className=" h-screen flex items-center justify-center flex-col space-y-2">
      <IceCream2Icon className=" h-10 w-10 text-primary" />
      <span className=" inline-flex gap-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </span>
    </div>
  );
};

export default LayoutLoader;
