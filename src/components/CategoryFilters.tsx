const categories = [
  { id: "all", label: "الكل" },
  { id: "skincare", label: "العناية بالبشرة" },
  { id: "makeup", label: "المكياج" },
  { id: "accessories", label: "الإكسسوارات" },
] as const;

export type Category = (typeof categories)[number]["id"];

interface CategoryFiltersProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function CategoryFilters({ active, onChange }: CategoryFiltersProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide py-3">
      <div className="flex gap-2 px-1 w-max">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              active === cat.id
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
