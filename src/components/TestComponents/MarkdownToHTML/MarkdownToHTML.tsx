import ReactMarkdown from 'react-markdown';

interface markdownProps {
  markdown: string;
}

const MarkdownToHTML = ({ markdown = '#test **markdown**' }: markdownProps) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownToHTML;
