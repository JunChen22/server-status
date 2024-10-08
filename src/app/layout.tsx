import './globals.css'
import ServerStatus from '@/components/ServerStatus'
import Header from '@/components/Header'

export const metadata = {
  title: 'Service Status',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <div className="flex flex-col min-h-screen"> {/* Ensure the container has the same background color */}
          <main className="flex-grow container mx-auto px-5 sm:px-6 lg:px-20 max-w-screen-xl">
            <Header />
            {children}
          </main>
          <ServerStatus
            totalServers={11}
            serversUp={10}
            serversDown={1}
            serversPaused={0}
          />
        </div>
      </body>
    </html>
  );
}