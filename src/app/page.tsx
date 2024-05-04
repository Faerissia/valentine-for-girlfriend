"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="val-container bg-red-300">
      <text className="mt-[100px] mb-[100px]" style={{ fontSize: 35 }}>
        Website idea for couple
      </text>
      <div className="flex flex-col space-y-3">
        <Link
          href="/yes-or-no"
          className="button bg-blue-500 hover:bg-blue-700"
        >
          Yes or No?
        </Link>
        <Link
          href="/resolution"
          className="button bg-blue-500 hover:bg-blue-700"
        >
          Resolution
        </Link>
      </div>
    </div>
  );
}
