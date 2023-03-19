import { Container } from '@nextui-org/react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="flex flex-wrap min-h-screen">{children}</div>;
}

type SideProps = {
  children: React.ReactNode;
};

function Side({ children }: SideProps) {
  return (
    <div className="w-full lg:w-64 lg:max-w-mdp-4 py-10 text-white bg-gray-900">
      <Container fluid>{children}</Container>
    </div>
  );
}

type BodyProps = {
  children: React.ReactNode;
};

function Body({ children }: BodyProps) {
  return (
    <div className="w-full lg:w-auto lg:flex-1 py-10 mt-4 lg:mt-0 bg-white">
      <Container fluid>{children}</Container>
    </div>
  );
}

Layout.Side = Side;
Layout.Body = Body;

export default Layout;
