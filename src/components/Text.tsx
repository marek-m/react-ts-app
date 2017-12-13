
import * as React from 'react';

export interface Props {
    repos: Array<string>;
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
            <div className="repos">
                <p className="text">{this.state.name}</p>
                {this.props.repos.map((repo) => <p className="text">{repo}</p>)}
                <p className="text">
                    {`Text from parent: ${this.props.clickText}`}
                </p>
            </div>
        );
    }
}

export default TextComponent;