import React, { forwardRef } from "react";
import styles from "../styles/asd.module.css";
import Flicking, {
  ChangedEvent,
  ViewportSlot,
  WillChangeEvent,
} from "@egjs/react-flicking";

const updateTransform = (e: any) => {
  e.currentTarget.panels.forEach((panel: any) => {
    const rotateVal = -panel.progress * 20;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 150 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};

export const Carousel = ({
  data,
  returnData,
  startIndex,
  onChange,
}: {
  data: string[];
  returnData: string[];
  startIndex: number;
  onChange: (value: string) => void;
}) => {
  const onChanged = (e: ChangedEvent) => {
    onChange(returnData[e.index]);
  };
  return (
    <>
      <Flicking
        defaultIndex={startIndex}
        horizontal={false}
        circular={true}
        onReady={updateTransform}
        onMove={updateTransform}
        onChanged={onChanged}
      >
        {data.map((e: string) => {
          return (
            <div className="panel" key={e}>
              {e}
            </div>
          );
        })}
        <ViewportSlot>
          <div className="date-panel-border"></div>
          <div className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </ViewportSlot>
      </Flicking>
    </>
  );
};
