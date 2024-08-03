import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SurveyJS NextJS",
  description: "Demo of NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSans.className}`}>
        <nav className={styles.nav}>
          <div className={styles.innerContainer}>
            <p className={styles.title}>SurveyJS NextJS Demo</p>
            <Link href="/">Home</Link>
            <Link href="https://github.com/gavinhenderson/surveyJS-NextJS">
              Repo
            </Link>
            <Link href="https://surveyjs.io/">SurveyJS</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
