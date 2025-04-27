import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
// Setup Inter font
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankit's Elevate AI",
  description: "Elevate your career through AI guidance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={
      {
        baseTheme: dark
      }
    }>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Header />
          </header>
          <main className="min-h-screen w-[100%] overflow-x-hidden">
            {children}
          </main>
          <footer className="bg-[#070707] py-12 font-semibold">
            <div className="container mx-auto text-center text-gray-200">
              <p>
                Made with ❤️ by Ankit Singh Rajput
              </p>
              <p className="text-sm text-gray-500">Developer @ curiousAnkit</p>
              <p className="text-sm text-gray-500">Email: ankitcreativeworks@gmail.com</p>
              <p className="text-sm text-gray-500">Phone No: 7828736686</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
