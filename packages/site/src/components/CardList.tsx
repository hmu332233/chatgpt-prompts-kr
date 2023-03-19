import { Container, Collapse, Text, Grid } from '@nextui-org/react';
import Card from './Card';
interface CardData {
  id: number;
  title: string;
  content: string;
  description: string;
}

type Props = {
  items: Array<{ id: string; title: string; contents: string }>;
};

function CardList({ items }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <Card key={item.id} title={item.title} contents={item.contents} />
      ))}
    </div>
  );
}

export default CardList;
