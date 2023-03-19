import { Link } from '@nextui-org/react';

import useViewTransitionNavigate from '../hooks/useViewTransitionNavigate';

type Props = {
  items: Array<{ id: string; text: string }>;
};

function CategoryList({ items }: Props) {
  const navigate = useViewTransitionNavigate();
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          block
          color="inherit"
          className="w-full max-w-none text-white hover:bg-slate-700"
          onClick={() => {
            navigate(`/${item.id}`);
          }}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
