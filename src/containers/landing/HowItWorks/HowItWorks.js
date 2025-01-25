import React from "react";
import InstagramIcon from "@/assets/images/icons/instagram-icon.png";
import PlayIcon from "@/assets/images/icons/play-icon.png";
import TicketIcon from "@/assets/images/icons/ticket-icon.png";
import styles from "./styles.module.scss";
import LargeLogo from "@/assets/images/logos/logo-large.png";
import CoolGuyImage from "@/assets/images/home/support/cool-guy.png";
import ClubImage from "@/assets/images/home/support/club.png";
import { LINKS } from "@/utils/constants";
import { Container, Grid } from "@mui/material";

const steps = [
  {
    image: InstagramIcon,
    title: "1. Purchase A Raffle Ticket",
    body: "You can purchase as many tickets as you’d like",
  },
  {
    image: PlayIcon,
    title: (
      <span>
        2. Follow us{" "}
        <a className="text-blue-500 underline" href={LINKS.INSTAGRAM} target="_blank">
          @smashgolfplay
        </a>
      </span>
    ),
    body: "We announce the winners on our instagram, so follow to make sure you don’t miss out!",
  },
  {
    image: TicketIcon,
    title: "3. Tune in to hear the winners",
    body: "Winners are announced at the end of each month.",
  },
];

const itemData = [
  {
    img: "https://placehold.co/600x400",
    title: "Winners Choice of Odyssey Putters",
    author: "Grand Prize",
    cols: 3,
    rows: 2,
    buttonLabel: "Buy Ticket Now",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Good Good Hat",
    author: "Winner's Choice",
    cols: 2,
    rows: 1,
    value: "$39.99 Value",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Devereux Shirt",
    author: "Winner's Pick",
    cols: 2,
    rows: 1,
    value: "$99.99 Value",
  },
];

export default function HowItWorks() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2 className="fade-up">How the Raffle Works</h2>
      </div>
      <div className={styles.steps}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {steps.map((step, i) => {
              return (
                <Grid key={i} item xs={12} md={4}>
                  <div className={`${styles.step} fade-up`}>
                    <img src={step.image.src} />
                    <h6>{step.title}</h6>
                    <span>{step.body}</span>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <div className={`pt-[80px]`}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className="bg-blue-complimentary h-full text-white py-10 px-8 flex flex-col md:flex-row items-center fade-up">
                <div className={`${styles.supportContent} basis-[50%]`}>
                  <h2 className="text-font28 md:text-font32 font-russo">Support The Pops & JR Youth Golf Program</h2>
                  <span className="text-font16 md:text-font24">
                    Every entry helps provide young golfers with opportunities to learn, grow, and enjoy the game. Make a difference today!
                  </span>
                </div>
                <div className="basis-[50%]">
                  <img src={LargeLogo.src} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="flex flex-col gap-4">
                <div className="bg-red-bg text-white py-6 px-4 flex fade-up">
                  <div className={`${styles.supportContent} basis-[50%]`}>
                    <h2 className="text-font24 font-russo">Win Prizes From Top Golf Brands</h2>
                    <span className="text-font14">
                      Enter for chances to win prizes from your favorite golf brands such as: Bad Birdie, Travis Mathew, Devereux, Callaway
                      &amp; more!
                    </span>
                  </div>
                  <div className={styles.coolGuyDiv}>
                    <img src={CoolGuyImage.src} />
                  </div>
                </div>
                <div className="bg-orange-bg text-white py-6 px-4 flex fade-up">
                  <div className={`${styles.supportContent} basis-[50%]`}>
                    <h2 className="text-font24 font-russo">New Raffles Every Month!</h2>
                    <span className="text-font14">Sponsors and prizes change monthly, so there’s always something new to win!</span>
                  </div>

                  <div className={styles.clubDiv}>
                    <img src={ClubImage.src} />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
