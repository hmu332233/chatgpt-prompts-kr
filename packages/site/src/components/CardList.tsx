import { Container, Collapse, Text, Grid } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import Card from './Card';

type Props = {
  items: Array<{
    id: string;
    title: string;
    contents: string;
    category: string;
  }>;
};

function CardList({ items }: Props) {
  const { categoryId } = useParams();
  return (
    <div className="flex flex-col gap-8">
      {items.slice(0, parseInt(categoryId!)).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          contents={item.contents}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default CardList;
