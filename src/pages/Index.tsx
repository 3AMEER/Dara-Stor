import { useState, useMemo, useEffect } from "react";
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
import ProductSkeleton from "@/components/ProductSkeleton";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
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
      <Header
        onCartOpen={() => setCartOpen(true)}
        onFavoritesOpen={() => setFavoritesOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="container">
        {/* Category + Filter */}
        <div className="flex items-center gap-2">
          <div className="flex-1 overflow-hidden">
            <CategoryFilters active={category} onChange={setCategory} />
          </div>
          <button
            onClick={() => setFilterOpen(true)}
            className="shrink-0 p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-3">
            <PackageOpen className="h-16 w-16 opacity-30" />
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
      </div>

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
