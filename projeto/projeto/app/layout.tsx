import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono, Pirata_One } from 'next/font/google';
import './globals.css';

// Configuração das fontes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const pirata = Pirata_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pirata',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VERTEBRA Studio | Onde a pele vira documento.',
  description: 'Estúdio de tatuagem autoral em Maringá. Blackwork, realismo dark e iconografia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${pirata.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-background-primary text-text-primary overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
