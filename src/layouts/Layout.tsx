import { Header } from "src/components";

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <>
      <div className="font-display max-w-4xl mx-auto">
        <Header />
        {children}
      </div>
    </>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
