"use client";
import Curriculum from "@/components/cv/Curriculum";
import Layout from "@/components/layout/Layout";
import neumorphism from "../styles/Neumorphism/neumorphism.module.css";
import minimalist from "../styles/Minimalist/minimalist.module.css";
import CheckRadio from "@/components/checks/CheckRadio";
import { useState } from "react";
import { useStyle } from "@/src/context/styleContext";

export default function page() {

  return (
    <Layout>
      <Curriculum />
      <CheckRadio />
    </Layout>
  );
}
