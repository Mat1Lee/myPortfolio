import React from "react";
import "./Loading.css";

import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 2000);
  }, []);
  if (loading === true) {
    return (
      <div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>

      
    );
  } else {
    return (
      <>
        {/* <div className="doneLoadingLeft"/> */}
        <div className="doneLoadingLeft" />

        {/* <div className="doneLoadingMiddle" /> */}
        <div className="doneLoadingRight" />
      </>
    );
  }
}
