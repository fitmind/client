import React from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

interface LinkProps {
    children: JSX.Element | string;
    page?: string;
}

interface LinkState {
    class: string;
}

class Link extends React.Component<LinkProps, LinkState> {
    public constructor(props: LinkProps) {
        super(props);
        this.state = {
            class: STATUS.NORMAL,
        };
    }

    private onMouseEnter = (): void => {
        this.setState({ class: STATUS.HOVERED });
    };

    private onMouseLeave = (): void => {
        this.setState({ class: STATUS.NORMAL });
    };

    public render(): JSX.Element {
        return (
            <a
                className={`${this.state.class} link`}
                href={this.props.page || '#'}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

export default Link;
