// Modal.js
import React, { Component, PropTypes  } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/styles';
import Segment from '../components/Segment';

import classNames from 'classnames';

export default class CodeWriter extends Component {

    render() {
        var codeString = this.props.children;         

        return (
            <Segment piled={true} header="Code">
                <SyntaxHighlighter language={this.props.lang} style={xcode}>
                    {codeString}
                </SyntaxHighlighter>
            </Segment>
        );
    }
}

CodeWriter.propTypes = {
    lang: PropTypes.string.isRequired
}