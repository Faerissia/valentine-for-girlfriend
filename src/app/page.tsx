"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const phrases = [
  "ไม่",
  "ตะเล็กแน่ใจเหรอ?",
  "แน่ใจจริงๆใช่ไหมงับ?",
  "น้าาคับบตะเล็กกกกก",
  "แต่พี่รักตะเล็กนะงับ",
  "แต่พี่รักตะเล็กมากๆเลยนะงับบ",
  "ใจผมสลายฮะมุง",
  "หัวใจผมสลายเป็นล้านๆชิ้นเลย",
  "แล้วแต่ละชิ้นก็แตกออกเป็นเสี่ยงๆ",
  "แล้วในที่สุดใจที่แตกออกเป็นเสี่ยงๆก็ถูกบดละเอียดจนเป็นผุยผงหมดเลย",
  "ตอนนี้หัวใจผมได้กลายเป็นก้อนฝุ่นไปแล้วละฮะ",
  "งื้อออ ร้องไห้แล้วววว :(",
];

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="val-container">
      {" "}
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="yes-pic"
          />
          <div className="val-text">เย่ รักตะเล็กเหมือนกันงับบบบ</div>
        </>
      ) : (
        <>
          {noCount > 0 ? (
            <img
              src="https://media.tenor.com/WWiCzxfs-P8AAAAi/tkthao219-bubududu.gif"
              alt="bear-asking"
            />
          ) : (
            <img
              src="https://media.tenor.com/vknNeIAWurIAAAAi/tkthao219-bear.gif"
              alt="bear-asking"
            />
          )}

          {noCount > 0 ? (
            <div className="val-text">ตะเล็กไม่รักพี่จริงๆเหรออ?</div>
          ) : (
            <div className="val-text">ตะเล็กรักพี่ไหมงับ?</div>
          )}

          <div>
            <button
              className="button yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              ใช่
            </button>
            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button no-button"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
