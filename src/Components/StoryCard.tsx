export type StoryCardProps = {
  title: string;
  image: string;
  href: string;
  category?: string;
  date?: string;
  readTime?: string;
  imageAlt?: string;
  className?: string;
};

const StoryCard = ({
  title,
  image,
  href,
  category,
  date,
  readTime,
  imageAlt = "",
  className = "",
}: StoryCardProps) => {
  return (
    <article className={className}>
      <a href={href} className="group flex items-start gap-3">
        <img
          src={image}
          alt={imageAlt}
          className="h-20 w-24 shrink-0 rounded-lg bg-gray-800 object-cover sm:h-24 sm:w-28"
        />

        <div className="min-w-0 flex-1">
          {(category || date) && (
            <p className="flex items-center gap-1.5 text-[11px] text-gray-500">
              {category && <span>{category}</span>}
              {category && date && <span aria-hidden="true">&gt;</span>}
              {date && <span>{date}</span>}
            </p>
          )}

          <h3 className="mt-1 font-serif text-[13px] font-bold leading-tight text-gray-900 group-hover:underline sm:text-base md:text-[13px]">
            {title}
          </h3>

          {readTime && (
            <p className="mt-2 text-[10px] text-gray-500">{readTime}</p>
          )}
        </div>
      </a>
    </article>
  );
};

export default StoryCard;