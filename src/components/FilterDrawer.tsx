import { SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";

export type SortOption = "bestselling" | "price-asc" | "price-desc";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "bestselling", label: "الأكثر مبيعًا" },
  { value: "price-asc", label: "السعر (من الأقل للأعلى)" },
  { value: "price-desc", label: "السعر (من الأعلى للأقل)" },
];

export default function FilterDrawer({
  open,
  onClose,
  priceRange,
  onPriceRangeChange,
  sort,
  onSortChange,
}: FilterDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="bottom" className="rounded-t-3xl max-h-[80vh]">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2 text-card-foreground">
            <SlidersHorizontal className="h-5 w-5" />
            تصفية المنتجات
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-3">نطاق السعر</h4>
            <Slider
              min={0}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={(v) => onPriceRangeChange(v as [number, number])}
              className="mb-2"
              aria-label="نطاق السعر بالجنيه"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{priceRange[0]} جنيه</span>
              <span>{priceRange[1]} جنيه</span>
            </div>
          </div>

          {/* Sort */}
          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-3">ترتيب حسب</h4>
            <div className="flex flex-col gap-2">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onSortChange(opt.value)}
                  aria-pressed={sort === opt.value}
                  className={`text-right px-4 py-2.5 rounded-xl text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    sort === opt.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            تطبيق
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
