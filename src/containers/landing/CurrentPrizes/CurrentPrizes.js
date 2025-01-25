"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Container, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Countdown from "./Countdown/Countdown";
import { RaffleEnds, RafflePrizes } from "@/utils/data/raffle-prizes";

export default function CurrentPrizes() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();

  return (
    <div id="prizes" className={styles.root}>
      <h6 className="text-blue-700 font-bold text-font24 md:text-font32 fade-up">
        {month.toUpperCase()} {year}
      </h6>
      <h4 className="font-russo text-font36 md:text-font44 fade-up text-center">Current Raffle Prizes</h4>

      <Countdown end={RaffleEnds} onEnd={() => console.log("Raffle ended")} />
      <Container maxWidth="xl">
        <div className="mt-[60px]">
          <ImageList sx={{ overflow: { xs: "hidden", md: "auto" } }} variant="quilted" cols={isMediumScreen ? 1 : 3} gap={8}>
            {RafflePrizes.map((item, index) => (
              <ImageListItem key={`prize-${index}-${item.title}`} className="fade-up" cols={item.cols} rows={item.rows}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  classes={{ actionIcon: "pr-3" }}
                  actionIcon={item.buttonLabel ? <button>{item.buttonLabel}</button> : <span>{item.value}</span>}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Container>
    </div>
  );
}
