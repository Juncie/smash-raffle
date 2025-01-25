import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../assets/images/logos/Logo.png";
import dayjs from "dayjs";

export default function Footer() {
  const year = dayjs().format("YYYY");
  return (
    <div className={`${styles.root} fade-up`}>
      <img src={Logo.src} />
      <h3 className="text-font32 font-russo">BE A PLAYER. NOT A SPECTATOR</h3>
      <span className="text-font18 ">
        @2020-{year} Inrange Smash Golf Play<sup>TM</sup> All right reserved.
      </span>
    </div>
  );
}
