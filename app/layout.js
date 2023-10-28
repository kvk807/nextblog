import './globals.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

export const metadata = {
  title: 'Blog app with Next 13',
  description: 'Latest blogs on web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
