
import * as React from 'react';

export interface Props {
    staticText: string;
    clickText: () => void;
}

interface State {
    name: string;
}

class TextComponent extends React.Component<Props, State> {

    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {name: 'Marek'};
    }

    render() {
        return (
            <div>
                <p className="text">{this.state.name}</p>
                <p className="text">{this.props.staticText}</p>
                <p className="text">
                    {`Text from parent: ${this.props.clickText}`}
                </p>
            </div>
        );
    }
}

export default TextComponent;