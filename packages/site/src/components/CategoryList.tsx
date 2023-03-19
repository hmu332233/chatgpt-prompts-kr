import { Link } from '@nextui-org/react';

type Props = {
  items: Array<{ id: string; text: string }>;
};

function CategoryList({ items }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          block
          color="inherit"
          className="hover:bg-slate-700"
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
