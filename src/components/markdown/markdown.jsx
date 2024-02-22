/* eslint-disable perfectionist/sort-imports */
import '../utils/highlight';

import PropTypes from 'prop-types';
// markdown plugins
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

import Link from '@mui/material/Link';

import StyledMarkdown from './styles';
import Image from '../image/image';

// ----------------------------------------------------------------------

export default function Markdown({ sx, ...other }) {
  return (
    <StyledMarkdown sx={sx}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight, [remarkGfm, { singleTilde: false }]]}
        components={components}
        {...other}
      />
    </StyledMarkdown>
  );
}

Markdown.propTypes = {
  sx: PropTypes.object,
};

// ----------------------------------------------------------------------

const components = {
  img: ({ ...props }) => <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2 }} {...props} />,
  a: ({ ...props }) => {
    const isHttp = props.href.includes('http');

    return isHttp ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    );
  },
};
