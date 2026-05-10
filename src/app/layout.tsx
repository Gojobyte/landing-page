import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adoum Salah — Développeur Full-Stack",
  description: "Portfolio de Adoum Salah, développeur web freelance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
