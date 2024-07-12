import React, { useEffect, useRef } from "react";
import Quill from "quill";
import {MentionBlot, Mention} from "quill-mention";
import {css, cx} from '@emotion/css';

import "quill/dist/quill.core.css";
import "quill-mention/dist/quill.mention.css";

Quill.register({ "blots/mention": MentionBlot, "modules/mention": Mention });

interface Props {
    value?: string;
    onChange?: (value: string) => void;
}

interface MentionBlotData {
    value: string;
    denotationChar: string;
    color: string;
}

interface HashValues {
    id: string;
    value: string;
}

interface AtValues {
    id: string;
    value: string;
}

// Register custom blot for styled mentions
class StyledMentionBlot extends MentionBlot {
    static render(data: MentionBlotData): HTMLElement {
        const element = document.createElement("span");
        element.innerText = data.value;
        element.style.color = data.color;
        return element;
    }
}
StyledMentionBlot.blotName = "styled-mention";
Quill.register(StyledMentionBlot);

const InputSelect: React.FunctionComponent<Props> = () => {
    const quillRef = useRef(null);

    const hashValues: HashValues[] = [
        { id: "0075256a-19c2-4a2d-b549-627000bcc3bc", value: "Accounting" },
        { id: "91e8901b-e3bf-4158-8ddf-7f5d9e8cbb7f", value: "Product Management" },
        { id: "c3373e89-7ab8-4a45-8b69-0b0cc49d89a9", value: "Marketing" },
        { id: "fa22f1d2-16c8-4bea-b869-8acad16e187a", value: "Engineering" },
        { id: "fe681168-f315-42f0-b78b-b1ea787fa1fd", value: "Accounting" },
    ];

    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                placeholder: "Press # to view variable suggestions",
                modules: {
                    mention: {
                        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                        mentionDenotationChars: ["#"],
                        positionStrategy: "fixed",
                        source: function (
                            searchTerm: string,
                            renderList: (
                                items: (HashValues | AtValues)[],
                                searchTerm: string,
                            ) => HTMLElement,
                            mentionChar: string,
                        ) {
                            let values = hashValues;

                            if (searchTerm.length === 0) {
                                renderList(values, searchTerm);
                            } else {
                                const matches = [];
                                for (let i = 0; i < values.length; i++)
                                    if (
                                        ~values[i].value
                                            .toLowerCase()
                                            .indexOf(searchTerm.toLowerCase())
                                    )
                                        matches.push(values[i]);
                                renderList(matches, searchTerm);
                            }
                        },
                        blotName: "styled-mention",
                    },
                },
            });
        }
    }, []);

    return (
        <div
            ref={quillRef}
            className={css`
                position: relative;

                .ql-editor {
                    border: 1px solid #a3a3a3;
                    border-radius: 6px;
                }

                .ql-editor-disabled {
                    border-radius: 6px;
                    background-color: rgba(124, 0, 0, 0.2);
                    transition-duration: 0.5s;
                }

                .ql-editor:focus {
                    border: 1px solid #025fae;
                }
            `}
        />
    );
};

export default InputSelect;
