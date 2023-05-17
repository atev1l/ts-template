import { Helmet } from 'react-helmet';

interface MetaHeaderProps {
    title?: string
}

export const MetaHeader = (props: MetaHeaderProps) => {
  return (
    <>
      <Helmet>
        <title>{props.title ?? process.env.REACT_APP_TITLE}</title>
      </Helmet>
    </>
  );
};