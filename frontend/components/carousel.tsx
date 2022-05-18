import React from "react";
import styles from "../styles/asd.module.css";
import Flicking, {
  ChangedEvent,
  ViewportSlot,
  WillChangeEvent,
} from "@egjs/react-flicking";
import { dummyasd } from "../styles/asdData";

const updateTransform = (e: any) => {
  e.currentTarget.panels.forEach((panel: any) => {
    const rotateVal = -panel.progress * 20;
    const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
    const depth = 150 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};
const setDataToReturn = (e: ChangedEvent) => {
  console.log(e);
};

export const Carousel = ({ data }: string[]) => {
  return (
    <>
      <Flicking
        horizontal={false}
        circular={true}
        onReady={updateTransform}
        onMove={updateTransform}
        onChanged={(e: ChangedEvent) => setDataToReturn(e)}
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
