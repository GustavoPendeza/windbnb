import "./globals.css";

export const metadata = {
    title: "Windbnb",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="triangleLogo.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
