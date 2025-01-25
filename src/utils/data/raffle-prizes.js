import dayjs from "dayjs";

export const RaffleEnds = new Date(dayjs().add(3, "days"));

export const RafflePrizes = [
  {
    img: "https://placehold.co/600x400",
    title: "Winners Choice of Odyssey Putters",
    author: "Grand Prize",
    cols: 1,
    rows: 2,
    buttonLabel: "Buy Ticket Now",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Good Good Hat",
    author: "Winner's Choice",
    cols: 1,
    rows: 1,
    value: "$39.99 Value",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Devereux Shirt",
    author: "Winner's Pick",
    cols: 1,
    rows: 1,
    value: "$99.99 Value",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Good Good Gift Card",
    author: "$100 Gift Card",
    cols: 1,
    rows: 1,
    value: "$99.99 Value",
  },
  {
    img: "https://placehold.co/300x200",
    title: "Golf Twosome",
    author: "Includes Cart. Good Anytime",
    cols: 1,
    rows: 1,
    value: "$249.99 Value",
  },
];
