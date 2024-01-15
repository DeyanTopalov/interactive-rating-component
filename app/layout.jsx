import "@styles/globals.css";
import { overpass } from "./ui/fonts";

export const metadata = {
  title: "Interactive Rating Component",
  description:
    "Frontend Mentor challenge to build an interactive rating component",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="grid h-screen place-items-center  bg-clr-very-dark-blue ">
        <main
          className={`${overpass.className} app max-w-[90rem] px-6 antialiased`}
        >
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
