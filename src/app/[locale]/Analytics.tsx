"use client";
import React from "react";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    ReactGA.initialize("G-KDX66YQ35T");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "PortfolioKaboreLandry",
    });
  }, []);

  return <div></div>;
}
