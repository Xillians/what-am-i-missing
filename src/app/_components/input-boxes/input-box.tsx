import { Flex, Heading, Textarea } from '@chakra-ui/react';
import React from 'react';

interface InputBoxProps {
    title?: string;
    placeholder: string;
    onChange: any;
}

export default function InputBox(props: InputBoxProps) {
    return (
        <Flex
            flexDir={"column"}
            alignItems={"center"}
            width={'100%'}
            padding={"1rem"}
        >
            <Heading 
                as="h3" 
                size="lg" 
                marginBottom={"1rem"}
                alignSelf={"flex-start"}
            >
                {props.title}
            </Heading>
            <Textarea
                width={"100%"}
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
        </Flex>
    );
}