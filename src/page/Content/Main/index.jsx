"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

import CenterComponent from "./Center";
import LeftComponent from "./Left";
import RightComponent from "./Right";

import "rc-dock/dist/rc-dock.css";

import quitImg from "@/assets/icons/quit_white.svg";
import DockLayout from "rc-dock";

import { useAlertStore } from "@/utils/alertStore";

const dockStyle = `
  .dock-tab-bar {
    display: none !important;
  }

  .dock-tab-content {
    height: 100% !important;
  }
  .dock-panel {
    background: #020611 !important;
    border: none !important;
  }
  .dock-bar {
    background: transparent !important;
    border: none !important;
    position: absolute;
    top: 1;
    left: 0;
    right: 2;
    z-index: 300;
    cursor: all-scroll;
    font-size: 0;
    line-height: 0;
    box-sizinig: none;
    width: 100%;
  }
  .dock-tab {
    position: relative;
    transition: color 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    padding: 0; 

    box-sizing: content-box !important;
    display: block !important;
    text-align: initial !important;
    font-weight: normal !important;
    border-bottom: none !important;
    cursor: default !important;
    float: none !important;
    margin: 0 !important;
    background: transparent !important;
    outline: none !important;
  }
  .dock-extra-content {
    z-index: 500;
  }
  .dock-ink-bar {
    display: none;
  }
  .dock-hbox > .dock-divider {
    background-color: #18171a;
    transform: scaleX(1);
    margin: 0 5px;
  }
  .dock-hbox > .dock-divider:hover {
    background-color: #3e3c43;
    transition-duration: 200ms;
  }
  .dock-vbox > .dock-divider {
    background-color: #18171a;
    transform: scaleY(1);
    margin: 5px 0;
  }
  .dock-vbox > .dock-divider:hover {
    background-color: #3e3c43;
    transition-duration: 200ms;
  }
  .dock-fbox > .dock-panel {
    position: absolute;
    pointer-events: visible;
    border-radius: 2%;
    overflow: hidden;
    box-shadow: none;
  }
  .dock-drop-layer .dock-drop-square {
    border: 1px solid #8A92A9;
    border-radius: 5px;
    background: #191D2A;
  }
  .dock-drop-layer .dock-drop-square .dock-drop-square-box {
    border-radius: 5px;
    border: none;
  }
  .dock-drop-layer .dock-drop-top {
    display: none;
  }
  .dock-drop-layer .dock-drop-bottom {
    display: none;
  }
  
  .dock-style-main .dock-bar {
    display: none !important;
  }
`;

const Main = () => {
  const dockRef = useRef(null);

  const { clicked, setClickState } = useAlertStore();
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1024, height: 768 });

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groups = useMemo(() => ({
    left_content: {
      floatable: true,
      maximizable: true,
      closable: true,
      panelExtra: (panelData, context) => (
        <div
          id="closeBtn"
          className="rounded-sm bg-red-middle3 p-1 absolute right-1 top-1 hover:bg-red-600 transition animate-pulse cursor-pointer"
          onClick={() => {
            try {
              context.dockMove(panelData, null, "remove");
              setClickState(false);
            } catch (error) {
              console.error("Error removing panel:", error);
            }
          }}
        >
          <Image src={quitImg} alt="quit" />
        </div>
      ),
    },
    main_content: {
      floatable: false,
      maximizable: true,
      disableDock: true,
      tabLocked: true,
    },
  }), []);

  const generateLayout = (showLeft) => {
    const children = [];

    if (showLeft) {
      children.push({
        id: "leftPanelContainer",
        size: 50,
        tabs: [
          {
            id: "leftPanel",
            title: "Left Panel",
            content: <LeftComponent />,
            minWidth: 340,
            minHeight: 400,
            closable: false,
            cached: true,
          },
        ],
        group: "left_content",
      });
    }

    children.push({
      tabs: [
        {
          id: "mainContent",
          title: "Main Content",
          content: (
            <div className="overflow-y-scroll h-lvh">
              <div className="flex flex-col 2xl:flex-row w-full gap-4">
                <div className="w-full 2xl:basis-3/4">
                  <CenterComponent />
                </div>
                <div className="w-full 2xl:basis-1/4">
                  <RightComponent />
                </div>
              </div>
            </div>
          ),
          minWidth: 350,
          minHeight: 400,
          closable: false,
        },
      ],
      panelLock: { panelStyle: "main" },
      group: "main_content",
    });

    return { dockbox: { mode: "horizontal", children } };
  };

  const [layout] = useState(() => generateLayout(clicked));

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (dockRef.current) {
        const newLayout = generateLayout(clicked);
        dockRef.current.loadLayout(newLayout);
      }
    }, 50); 
    return () => clearTimeout(timeout);
  }, [clicked]);

  return (
    <>
      <style>{dockStyle}</style>
      <div className="p-2 sm:px-4 sm:pt-4 sm:ml-17 flex flex-col lg:flex-row gap-4 w-full text-white">
        {mounted && 
          <DockLayout
            ref={dockRef}
            defaultLayout={layout}
            groups={groups}
            style={{
              width: "100%",
              height: windowSize.height > 0 ? windowSize.height * 0.87 : "100vh",
            }}
          />
        }
      </div>
    </>
  );
};

export default Main;