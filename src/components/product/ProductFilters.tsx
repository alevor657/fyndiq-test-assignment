import { FC } from "react";

interface ProductFiltersProps {
  value: boolean;
  onFilterChange: (value: boolean) => void;
}

export const ProductFilters: FC<ProductFiltersProps> = ({
  value,
  onFilterChange,
}) => {
  return (
    <div className="product-filters">
      <input
        type="checkbox"
        id="filter-checkbox"
        checked={value}
        onChange={(e) => onFilterChange(e.target.checked)}
      />
      <label htmlFor="filter-checkbox">Cheaper than 50kr</label>
    </div>
  );
};
