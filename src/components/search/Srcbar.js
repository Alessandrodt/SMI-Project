import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

export function InputWithButton(props) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search"
      rightSectionWidth={42}
      {...props}
    />
  );
}