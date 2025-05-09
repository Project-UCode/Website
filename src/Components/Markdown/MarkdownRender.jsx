import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useEffect } from 'react';

import Prism from "prismjs";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-cpp';

// import CodeEditor from './CodeEditor';
// import Quiz from './Quiz';

function MarkdownRender({ content }) {


    const parsedContent = content.replace(/\\n/g, '\n').replace(/\\x/g, '');


    useEffect(() => {
        // Trigger Prism
        Prism.highlightAll();

        // Re-trigger line numbers in case DOM updated
        setTimeout(() => {
            Prism.highlightAll(); // re-run again after full DOM update
        }, 0);
    }, [parsedContent]);

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <ReactMarkdown
                children={parsedContent}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    // codeeditor: ({ node, ...props }) => <CodeEditor {...props} />,
                    // quiz: ({ node, children }) => {
                        // Convert everything to a flat string
                        // const quizText = children
                        //   .map(child => {
                        //     // Handle string children
                        //     if (typeof child === 'string') return child;
                        //     // Handle JSX elements (e.g., <p>Question</p>)
                        //     if (typeof child === 'object' && child?.props?.children) {
                        //       return Array.isArray(child.props.children)
                        //         ? child.props.children.join('')
                        //         : child.props.children;
                        //     }
                        //     return '';
                        //   })
                        //   .join('')
                        //   .replace(/\\n/g, '\n'); // Convert literal \n to real newlines

                    //     return <Quiz>{children}</Quiz>;
                    // },
                    example: ({ node, children }) => {
                        return <div className='exampleContent'>{children}</div>;
                    },
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        // const [copied, setCopied] = useState(false);

                        const handleCopy = () => {
                            navigator.clipboard.writeText(codeString).then(() => {
                                // alert("Code copied to clipboard!");
                                toast.success('Successfully copied!')
                            });
                        };

                        return !inline && match ? (
                            <div>
                                <pre className={`language-${match[1]} line-numbers`}>
                                    <code className={`language-${match[1]}`} {...props}>
                                        {String(children).replace(/\n$/, "")}
                                    </code>
                                </pre>
                                <button
                                    onClick={handleCopy}
                                    className="copy-btn"
                                >
                                    Copy
                                </button>
                            </div>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </div>
    );
}

export default MarkdownRender;
