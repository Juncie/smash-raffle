import { Saira } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxWrapper from "@/wrappers/ReduxWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import MuiTheme from "@/mui-theme";

const MainFont = Saira({
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://bitprime.com"),
  title: "Smash Raffle",
  icons: {
    icon: "/favicon-32x32.png",
  },
  description: "Smash Raffle description",
  openGraph: {
    title: "Smash Raffle",
    description: "Smash Raffle description",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smash Raffle",
    description: "Smash Raffle description",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
      </head>
      <body className={MainFont.className}>
        <Toaster richColors />
        <ReduxWrapper>
          <AppRouterCacheProvider>
            <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxWrapper>
      </body>
    </html>
  );
}
