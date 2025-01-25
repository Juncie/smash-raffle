import React from "react";
import styles from "./styles.module.scss";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import sponsorLogo from "@/assets/images/logos/sponsors/badbirdie-isgp.png";

function Hero() {
  const eventDetails = {
    title: "We're Giving Away $1000 in Prizes",
    description: "Sign up for your chance to win a $500 Gift Card for Bad Bridie or Dobson Ranch Golf Course.",
    sponsorName: "Bad Birdie",
    startDate: "Event Date",
    endDate: "Event Date",
    time: "Event Time",
    location: "Event Location",
  };

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_right}>
            <hgroup className="">
              <h1 className={styles.title}>{eventDetails.title}</h1>
              <p className={styles.description}>{eventDetails.description}</p>
              <Button fullWidth variant="contained" color="warning">
                Register For Free!
              </Button>
            </hgroup>
          </div>
          <div className={styles.content_left}>
            <div className={styles.image}>
              <Image src={sponsorLogo} width={1080} height={1080} alt="Bad Birdie x Inrange Smash Golf Play" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
