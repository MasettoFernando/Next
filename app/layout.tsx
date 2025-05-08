import "@/app/ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <h1>NEXT</h1>
      <body>{children}</body>
    </html>
  );
}
