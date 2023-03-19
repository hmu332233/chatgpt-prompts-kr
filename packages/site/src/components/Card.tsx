import { Collapse, Text } from '@nextui-org/react';

type Props = {
  title: string;
  contents: string;
};

function Card({ title, contents }: Props) {
  return (
    <Collapse title={title} bordered>
      <Text>{contents}</Text>
    </Collapse>
  );
}

export default Card;
