import React from 'react'
import {
    Text as RNText,
    TextProps as RNTextProps,
} from 'react-native'
import { styled, StyledComponentProps } from '@ui-kitten/components'

type ChildElement = React.ReactText | React.ReactElement<RNTextProps>;

export interface MyTextProps extends RNTextProps, StyledComponentProps {
    children?: ChildElement | ChildElement[];
    appearance?: 'default' | 'alternative' | 'hint' | string;
    category?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's1' | 's2' | 'p1' | 'p2' | 'c1' | 'c2' | 'label' | string;
}

@styled('Text')
export class MyText extends React.Component<MyTextProps, any> {
    constructor(props: MyTextProps) {
        super(props);
    }

    public render() {
        const { eva, style, ...textProps } = this.props;
        const styleAsMap = style as {}
        // const mergedStyle = {
        //     ...eva.style,
        //     ...styleAsMap,
        //     fontWeight: undefined
        // }
        // console.log(`propsmy text ${JSON.stringify(this.props)}`)
        const mergedStyle = [
            eva.style,
            style,
            {
                fontWeight: undefined,
                // @ts-ignore
                lineHeight: style?.lineHeight,
            }
        ]

        return (
            <RNText
                {...textProps}
                style={mergedStyle} />
        );
    }
}
