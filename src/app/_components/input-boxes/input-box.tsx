import { Textarea } from '@chakra-ui/react';
import React from 'react';

export default function InputBox(props: any) {
    return (
        <Textarea
        width={"50%"}
        margin={"1rem"}
        padding={"1rem"}
        border={"1px solid #ccc"}
        borderRadius={"0.5rem"}
        minHeight={"10rem"}
        placeholder={props.placeholder}
        size="lg"
        resize="none"
        onChange={props.onChange}
        value={props.value?.toString().toLowerCase()}
        />
    );
}