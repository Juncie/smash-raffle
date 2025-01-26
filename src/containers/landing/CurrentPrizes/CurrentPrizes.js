"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Countdown from "./Countdown/Countdown";

import Image from "next/image";
import dayjs from "dayjs";
import dobsonGiftCard from "@/assets/images/home/prizes/dobson-gc.jpg";
import badBirdieGiftCard from "@/assets/images/home/prizes/badbirdie-gc.jpg";

export default function CurrentPrizes() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();

  const RafflePrizes = [
    {
      img: dobsonGiftCard,
      title: "$500 Dobson Gift Card",
    },
    {
      img: badBirdieGiftCard,
      title: "$500 Bad Birdie Gift Card",
    },
  ];

  return (
    <div id="prizes" className={styles.root}>
      <h6 className="text-blue-700 font-bold text-font24 md:text-font32 fade-up">
        {month.toUpperCase()} {year}
      </h6>
      <hgroup className="text-center">
        <h4 className="font-russo text-font36 md:text-font44 fade-up text-center">Current Raffle Prizes</h4>
        <p className="px-8 md :max-w-xl">
          This month we're giving away a $500 gift card to <wbr /> Bad Birdie and a $500 gift card to Dobson Ranch Golf Course!
        </p>
      </hgroup>
      <Countdown onEnd={() => console.log("Raffle ended")} />
      <Container maxWidth="xl">
        <div class="flex flex-col lg:flex-row lg:px-24  gap-4 justify-center text-center mt-10 lg:mt-20">
          {RafflePrizes.map((item, i) => (
            <article key={i} className="flex flex-col items-center gap-2">
              <h3 className="text-xl lg:text-2xl">{item.title}</h3>
              <Image className="rounded" src={item.img} alt={item.title} width={400} height={400} />
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
