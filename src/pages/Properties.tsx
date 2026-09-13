import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyGrid from '../components/PropertyGrid';
import FilterControls from '../components/FilterControls';
import MobileFilterSheet from '../components/MobileFilterSheet';
import { applyFilters, sortProperties, defaultFilters, countActiveFilters } from '../lib/filters';
import type { FilterState, SortOption } from '../lib/filters';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { FilterIcon, SortIcon, SearchIcon } from '../components/icons';

const sortLabels: Record<SortOption, string> = {
  recommended: 'מומלצים',
  'price-asc': 'מחיר — מהנמוך לגבוה',
  'price-desc': 'מחיר — מהגבוה לנמוך',
  newest: 'חדשים',
};

const PAGE_SIZE = 8;

function filtersFromSearchParams(searchParams: URLSearchParams): FilterState {
  const listingType = searchParams.get('listingType');
  return {
    ...defaultFilters,
    listingType: listingType === 'sale' || listingType === 'rent' ? listingType : 'all',
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    rooms: searchParams.get('rooms') || '',
    priceMin: searchParams.get('priceMin') || '',
    priceMax: searchParams.get('priceMax') || '',
    areaMin: searchParams.get('areaMin') || '',
    floorMin: searchParams.get('floorMin') || '',
    parking: searchParams.get('parking') === 'true',
    elevator: searchParams.get('elevator') === 'true',
    balcony: searchParams.get('balcony') === 'true',
    safeRoom: searchParams.get('safeRoom') === 'true',
  };
}

function searchParamsFromFilters(filters: FilterState, page = 1) {
  const params = new URLSearchParams();
  (Object.keys(filters) as (keyof FilterState)[]).forEach((key) => {
    const value = filters[key];
    if (value !== defaultFilters[key] && value !== '') params.set(key, String(value));
  });
  if (page > 1) params.set('page', String(page));
  return params;
}

export default function Properties() {
  useDocumentMeta({
    title: 'כל הנכסים | Urban Estate',
    description: 'עיינו במלוא מגוון הנכסים של Urban Estate — דירות, בתים ופנטהאוזים נבחרים ברחבי המרכז והשרון.',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => filtersFromSearchParams(searchParams), [searchParams]);
  const [sort, setSort] = useState<SortOption>('recommended');
  const [sheetOpen, setSheetOpen] = useState(false);
  const setFilters = (nextFilters: FilterState) => setSearchParams(searchParamsFromFilters(nextFilters), { replace: true });

  const filtered = useMemo(() => sortProperties(applyFilters(properties, filters), sort), [filters, sort]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requestedPage = Math.max(1, Number(searchParams.get('page')) || 1);
  const currentPage = Math.min(requestedPage, totalPages);
  const visibleProperties = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const activeCount = countActiveFilters(filters);

  const changePage = (page: number) => {
    setSearchParams(searchParamsFromFilters(filters, page), { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container-px max-w-container mx-auto py-10 sm:py-14">
      <div className="max-w-2xl">
        <p className="label-eyebrow mb-3">נכסים</p>
        <h1 className="text-display-md font-serif text-charcoal">מצאו את המקום הבא שלכם</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">סינון</h2>
              {activeCount > 0 && (
                <button type="button" onClick={() => setFilters(defaultFilters)} className="text-[13px] text-clay-dark hover:underline">
                  איפוס ({activeCount})
                </button>
              )}
            </div>
            <FilterControls filters={filters} onChange={setFilters} />
          </div>
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <p className="text-[14.5px] text-charcoal-soft">
              <span className="font-semibold text-charcoal">{filtered.length}</span> נכסים נמצאו
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                className="lg:hidden btn-secondary py-2.5 px-4 text-[13.5px]"
              >
                <FilterIcon width={16} height={16} />
                סינון
                {activeCount > 0 && (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-clay text-[10px] text-ivory">
                    {activeCount}
                  </span>
                )}
              </button>

              <label className="relative flex items-center gap-2">
                <SortIcon width={15} height={15} className="text-charcoal-muted hidden sm:block" />
                <span className="sr-only">מיון</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="input-field py-2.5 pl-8 text-[13.5px]"
                >
                  {(Object.keys(sortLabels) as SortOption[]).map((s) => (
                    <option key={s} value={s}>
                      {sortLabels[s]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-10">
            {filtered.length > 0 ? (
              <>
                <PropertyGrid properties={visibleProperties} />
                {totalPages > 1 && (
                  <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="עמודי נכסים">
                    <button
                      type="button"
                      onClick={() => changePage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="btn-secondary h-10 px-3 text-[13px] disabled:opacity-40"
                      aria-label="לעמוד הקודם"
                    >
                      הקודם
                    </button>
                    <div className="flex flex-wrap items-center justify-center gap-1" aria-live="polite">
                      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                          key={page}
                          type="button"
                          onClick={() => changePage(page)}
                          aria-current={page === currentPage ? 'page' : undefined}
                          className={`h-10 w-10 rounded text-sm transition-colors ${
                            page === currentPage
                              ? 'bg-charcoal text-ivory'
                              : 'border border-stone-300 text-charcoal-soft hover:bg-stone-100'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => changePage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="btn-secondary h-10 px-3 text-[13px] disabled:opacity-40"
                      aria-label="לעמוד הבא"
                    >
                      הבא
                    </button>
                  </nav>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-charcoal-muted">
                  <SearchIcon width={24} height={24} />
                </div>
                <h3 className="font-serif text-2xl mb-2">לא מצאנו נכסים שתואמים לחיפוש</h3>
                <p className="text-charcoal-muted text-[15px] max-w-sm mx-auto">
                  נסו להרחיב את טווח המחיר או להסיר חלק מהמסננים.
                </p>
                <button type="button" onClick={() => setFilters(defaultFilters)} className="btn-secondary mt-6">
                  איפוס מסננים
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <MobileFilterSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
      />
    </div>
  );
}
