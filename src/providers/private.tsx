"use client";
import React from "react";

export default function PrivateProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
