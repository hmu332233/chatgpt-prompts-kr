import { Collapse, Text } from '@nextui-org/react';
import Upvote from './Upvote';

type Props = {
  title: string;
  contents: string;
  category: string;
};

function Card({ title, contents, category }: Props) {
  return (
    <Collapse
      title={<h4>{title}</h4>}
      subtitle={category}
      contentLeft={<Upvote count={5} onClick={console.log} />}
      bordered
    >
      <Text>{contents}</Text>
    </Collapse>
  );
}

export default Card;
