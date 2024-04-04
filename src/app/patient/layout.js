import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patient",
  description:
    "Our cutting-edge telemedicine software is here to revolutionize the way you deliver healthcare. Imagine seamlessly connecting with patients, regardless of distance, and providing timely care in a whole new way. With Medville, you can break free from traditional constraints and embrace a more flexible approach to healthcare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
