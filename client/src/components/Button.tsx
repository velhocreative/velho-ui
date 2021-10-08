//** Imports **//
import React from "react";

//** Button props **//
type props = {
    text?:string;
    variant?:string;
};

//** Button class component **//
// TODO 
// Add default prop values
// Add support for links
// Add support for icons
// Add support for checkboxes
export default class Button extends React.Component<props> {

    // Default prop values if user input
    // is not given
    static defaultProps = {
        text: "null",
        variant: "primary",
    };

    // Render function
    render() {        
        return (
            <button>
                {this.props.text}
            </button>
        );
    }
}
