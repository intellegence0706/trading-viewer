'use client';

import React, { useState } from "react";
import ChartTopComponent from "./TopComponent";
import TableComponent from "./Table/TableComponent";
import TradingChart from "@/components/TradingChart";
import DockLayout from 'rc-dock';

const CenterComponent = () => {
  const groups = {
    top_content: {
      floatable: false,
      maximizable: true,
      closable: false, 
    },
    bottom_content: {
      floatable: false,
      maximizable: true,
      disableDock: false,
      tabLocked: true,
    }
  }
  
  const [layout, setLayout] = useState({
    dockbox: {
      mode: 'vertical',
      children: [
        {
          id: 'topPanelContainer',
          tabs: [
            {
              id: 'topPanel',
              title: 'Top Panel',
              content: (
                <div className="flex flex-col gap-1 bg-gradient-black-gray h-full">
                  <ChartTopComponent />
                  <TradingChart symbol="BINANCE:SOLUSD" interval="15" theme="dark" />
                </div>
              ),
              minWidth: 350,
              minHeight: 200,
              closable: false,
            }
          ],
          group: 'top_content',
        },
        {
          id: 'bottomPanelContainer',
          tabs: [
            {
              id: 'bottomPanel',
              title: 'Bottom Panel',
              content: <TableComponent />,
              minWidth: 350,
              minHeight: 200,
              closable: false,
            }
          ],
          group: 'bottom_content',
        }
      ]
    }
  });

  return (
    <div className="rounded-md bg-gradient-black-gray p-1 min-w-85">
      <DockLayout 
        defaultLayout={layout}
        groups={groups}
        style={{ width: '100%', height: '100lvh' }}
      />
    </div>
  );
};

export default CenterComponent;