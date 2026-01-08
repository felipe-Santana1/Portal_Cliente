import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  onButtonClick?: () => void;
}

const Breadcrumb = ({ pageName, onButtonClick }: BreadcrumbProps) => {
  return (
    <div className="flex flex-col gap-3 sm:justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
          {pageName}
        </h2>
        {onButtonClick && (
          <button
            onClick={onButtonClick}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:opacity-90 active:scale-95"
            title="Agendar via WhatsApp"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        )}
      </div>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
