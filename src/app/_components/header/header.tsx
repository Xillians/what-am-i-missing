import { Heading } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <Heading as="h1" size="xl" style={{
      background: "#b3d4fc",
      display: "flex",
      padding: "1rem",
      height: "7rem",
      color: "#ffff",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
      margin: "1rem",
      borderRadius: "0.5rem"
    }}>
        Magic  gap analyzer
    </Heading>
  )
}