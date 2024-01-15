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
      <body className="bg-clr-very-dark-blue grid place-items-center  h-screen ">
        <main
          className={`${overpass.className} antialiased app px-6 max-w-[90rem]`}
        >
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
