export default function ProductSkeleton() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
      <div className="aspect-square bg-muted" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-1/2" />
        <div className="h-5 bg-muted rounded w-1/3" />
        <div className="flex gap-1.5 mt-2">
          <div className="flex-1 h-8 bg-muted rounded-xl" />
          <div className="h-8 w-8 bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  );
}
