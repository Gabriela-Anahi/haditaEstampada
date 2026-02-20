import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '900'], display: 'swap' });

export const metadata = {
    title: "Hadita Estampada",
    description: "Tienda online de stickers, parches, pins y más. ¡Dale vida a tus cosas con nuestros diseños únicos!",
    icons: {
        icon: './favicon.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}