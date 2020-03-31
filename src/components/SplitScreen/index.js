import React from 'react';

import './styles.css';

export default function SplitScreen() {
    return (
        <div className="split-container">
            <section className="left-pane">
                <h1>Left</h1>
            </section>
            <section className="right-pane">
                <h1>Right</h1>
            </section>
        </div>
    );
}
