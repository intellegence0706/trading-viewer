"use client";

import { useEffect } from 'react';

export default function TradingChart({
  symbol = "BINANCE:SOLUSD",
  interval = "D",
  theme = "dark"
}) {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('tradingview-script')) return;

    const script = document.createElement('script');
    script.id = 'tradingview-script';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      // Ensure container exists before creating widget
      if (document.getElementById('tradingview_container')) {
        new window.TradingView.widget({
          autosize: true,
          symbol,
          interval,
          timezone: "Etc/UTC",
          theme,
          style: "1",
          locale: "en",
          toolbar_bg: "#020611",
          enable_publishing: false, // Changed to false for better security
          hide_top_toolbar: false,
          hide_volume: false,
          save_image: false,
          container_id: "tradingview_container"
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const scriptElement = document.getElementById('tradingview-script');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      // Clean up TradingView widget
      const container = document.getElementById('tradingview_container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol, interval, theme]);

  return (
    <div className="tradingview-widget-container" style={{ height: '500px', width: '100%' }}>
      <div id="tradingview_container" style={{ height: '100%', width: '100%' }} />
    </div>
  );
}