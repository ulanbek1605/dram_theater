"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Cards = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [isClickDown, setIsClickDown] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      setIsDown(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;

    // Update scrollBar position based on scrollContainer position
    updateScrollBar();
  };

  const updateScrollBar = () => {
    if (scrollBarRef.current && scrollContainerRef.current) {
      const parentElementWidth =
        scrollBarRef.current?.parentElement?.offsetWidth ?? 0;
      const scrollContainerWidth = scrollContainerRef.current.scrollWidth;
      const scrollContainerScrollLeft = scrollContainerRef.current.scrollLeft;

      const scrollBarLeft =
        (scrollContainerScrollLeft /
          (scrollContainerWidth - parentElementWidth)) *
        parentElementWidth;

      scrollBarRef.current.style.left = `${scrollBarLeft}px`;
    }
  };

  useEffect(() => {
    updateScrollBar();

    const handleMouseMoveScrollBar = (e: MouseEvent) => {
      if (isClickDown && scrollBarRef.current && scrollContainerRef.current) {
        const parentElementWidth =
          scrollBarRef.current?.parentElement?.offsetWidth ?? 0;
        const x =
          e.clientX - scrollContainerRef.current.getBoundingClientRect().left;

        if (x < 0) {
          scrollBarRef.current.style.left = `0px`;
        } else if (x > parentElementWidth) {
          scrollBarRef.current.style.left = `${parentElementWidth}px`;
        } else {
          scrollBarRef.current.style.left = `${x}px`;
        }

        const percentage = (x / parentElementWidth) * 100;
        scrollContainerRef.current.scrollLeft =
          (percentage / 100) *
          (scrollContainerRef.current.scrollWidth - parentElementWidth);
      }
    };

    const handleMouseUpScrollBar = () => {
      setIsClickDown(false);
    };

    document.addEventListener("mousemove", handleMouseMoveScrollBar);
    document.addEventListener("mouseup", handleMouseUpScrollBar);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveScrollBar);
      document.removeEventListener("mouseup", handleMouseUpScrollBar);
    };
  }, [isClickDown]);

  return (
    <div className="aboutAnimations relative min-h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="h-10 w-full max-w-[1920px] mx-auto relative">
          <div
            ref={scrollBarRef}
            className="absolute red-element left-0 top-0 w-10 h-full bg-red-500 cursor-pointer"
            onMouseDown={() => setIsClickDown(true)}
          ></div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="px-4 flex gap-[136px] py-[66px] max-w-[1920px] w-full mx-auto overflow-x-auto"
      >
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
        <div className="card flex min-w-[366px] w-[366px] flex-col gap-[148px]">
          <div className="img w-full">
            <img className="w-full aspect-square" src="/img/img.png" alt="" />
          </div>
          <div className="content">
            <h4 className="text-[30px] font-mySerif pb-[11px] font-semibold text-[#515151]">
              Название
            </h4>
            <p className="text-[25px] font- font-normal text-[#515151]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cards;
