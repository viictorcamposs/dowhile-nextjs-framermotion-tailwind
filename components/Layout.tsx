import Header from '../components/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;