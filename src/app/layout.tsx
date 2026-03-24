import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Dmitry Kudin - Developer Portfolio | Expert Full-Stack Developer',
  description: 'Explore Dmitry Kudin\'s portfolio: a passionate full-stack developer crafting innovative, scalable, and user-friendly web solutions with a focus on impact.',
  keywords: ["Dmitry Kudin, developer, portfolio, full-stack, web development, software engineer, coding, gay developer, React, Next.js, Node.js, Python, PostgreSQL"],
  openGraph: {
    "title": "Dmitry Kudin - Developer Portfolio",
    "description": "Explore Dmitry Kudin's portfolio: a passionate full-stack developer crafting innovative, scalable, and user-friendly web solutions with a focus on impact.",
    "url": "https://dmitrykudin.com",
    "siteName": "Dmitry Kudin - Developer Portfolio",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-confident-full-stack-developer-dmitry--1774369785713-b268e4f3.png",
        "alt": "Dmitry Kudin coding on a laptop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dmitry Kudin - Developer Portfolio",
    "description": "Explore Dmitry Kudin's portfolio: a passionate full-stack developer crafting innovative, scalable, and user-friendly web solutions with a focus on impact.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AO9gCSLoDdKgboXV6NtXXgvfy1/a-confident-full-stack-developer-dmitry--1774369785713-b268e4f3.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
