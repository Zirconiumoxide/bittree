"use client";

import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSetter({ color }) {
  const { setBgColor } = useTheme();

  useEffect(() => {
    setBgColor(color);
  }, [color, setBgColor]);

  return null;
}