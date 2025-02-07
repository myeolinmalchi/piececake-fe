import paginationLeft from 'assets/images/pagination-arrow-left.svg';
import paginationRight from 'assets/images/pagination-arrow-right.svg';
import paginationLeftWhite from 'assets/images/pagination-arrow-white-left.svg';
import paginationRightWhite from 'assets/images/pagination-arrow-white-right.svg';
import { twMerge } from 'tailwind-merge';

type PaginationProps = {
  style: 'default' | 'white';
  className?: string;

  pageInfo: {
    currentPage: number;
    lastPage: number;
    range: 5 | 10;
  };
};

const Pagination = ({
  pageInfo: { currentPage = 1, lastPage = 1, range = 10 },
  style,
  className,
}: PaginationProps) => {
  const pageTabIdx = currentPage % range;
  const firstTabPage = range * pageTabIdx;
  const lastTabPage =
    lastPage % range === currentPage % range
      ? lastPage
      : firstTabPage + (range - 1);

  const navs = [...Array(lastTabPage - firstTabPage + 1)].map(
    (_, idx) => firstTabPage + idx
  );

  const arrowLeft = style === 'white' ? paginationLeftWhite : paginationLeft;
  const arrowRight = style === 'white' ? paginationRightWhite : paginationRight;

  return (
    <div
      className={twMerge('flex items-center justify-center gap-6', className)}
    >
      <button>
        <img src={arrowLeft} alt='' />
      </button>
      {navs.map((page) => (
        <PaginationItem
          pageNum={page}
          activated={page === currentPage}
          style={style}
        />
      ))}
      <img src={arrowRight} alt='' />
    </div>
  );
};

const PaginationItem = ({
  pageNum,
  activated,
  style,
}: {
  pageNum: number;
  activated: boolean;
  style: 'default' | 'white';
}) => {
  const color = style === 'white' ? '#FFF' : '#FAC8B7';

  return (
    <span
      className={twMerge(
        `text-[${color}]`,
        'text-base text-center',
        activated ? 'font-[900]' : ''
      )}
    >
      {pageNum}
    </span>
  );
};

export default Pagination;
