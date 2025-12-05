import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

// 默认配置 Josefin Sans 字体
const josefinSans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: {
    default: "Welcome | The Wild Oasis",
    template: "%s | The Wild Oasis",
  },
  description: "A cabin booking website for the Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <footer className="border-t border-primary-900 px-8 py-5 text-center">
          <p>
            &copy; {new Date().getFullYear()} The Wild Oasis. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
