import { useState, useMemo } from "react";
import { SlidersHorizontal, PackageOpen } from "lucide-react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import CategoryFilters, { Category } from "@/components/CategoryFilters";
import FilterDrawer, { SortOption } from "@/components/FilterDrawer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CartSheet from "@/components/CartSheet";
import MobileBottomBar from "@/components/MobileBottomBar";
import FavoritesSheet from "@/components/FavoritesSheet";
import { Product } from "@/data/products";

export default function Index() {
  const [category, setCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sort, setSort] = useState<SortOption>("bestselling");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (searchQuery && !p.name.includes(searchQuery)) return false;
      return true;
    });

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [category, priceRange, sort, searchQuery]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <a
        href="#main-content"
        className="fixed z-[100] top-3 right-3 -translate-y-[120%] opacity-0 pointer-events-none focus:translate-y-0 focus:opacity-100 focus:pointer-events-auto px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        تخطي إلى المنتجات
      </a>
      <Header
        onCartOpen={() => setCartOpen(true)}
        onFavoritesOpen={() => setFavoritesOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main id="main-content" className="container" tabIndex={-1}>
        <h1 className="sr-only">منتجات المتجر</h1>
        {/* Category + Filter */}
        <div className="flex items-center gap-2">
          <div className="flex-1 overflow-hidden">
            <CategoryFilters active={category} onChange={setCategory} />
          </div>
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="shrink-0 p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            aria-label="تصفية وترتيب المنتجات"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
            <PackageOpen className="h-16 w-16 opacity-30" aria-hidden />
            <p className="text-sm">لا توجد منتجات مطابقة</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modals & Sheets */}
      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
      <FavoritesSheet open={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
      <FilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sort={sort}
        onSortChange={setSort}
      />
      <MobileBottomBar onCartOpen={() => setCartOpen(true)} />
    </div>
  );
}
