import { Collapse, Text } from '@nextui-org/react';
import Upvote from './Upvote';

type Props = {
  title: string;
  contents: string;
  category: string;
  upvotes: number;
};

function Card({ title, contents, category, upvotes }: Props) {
  return (
    <Collapse
      title={<h4>{title}</h4>}
      subtitle={category}
      contentLeft={<Upvote count={upvotes} onClick={console.log} />}
      bordered
    >
      <Text>{contents}</Text>
    </Collapse>
  );
}

export default Card;
