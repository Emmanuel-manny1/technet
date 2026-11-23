import StoryCard, { type StoryCardProps } from "./StoryCard";

const stories: (StoryCardProps & { id: number })[] = Array.from(
  { length: 9 },
  (_, i) => ({
    id: i + 1,
    category: "Article",
    date: "Oct. 24",
    title: "Nigerian University Students Win International Innovation Challenge",
    readTime: "2 mins Read",
    image: "/software-unsplash.png", // replace with your image path
    href: `/articles/${i + 1}`,
  })
);

const LatestStories = () => {
  return (
    <section className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-12 lg:px-36">
      <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
        Latest Stories
      </h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        {stories.map(({ id, ...story }) => (
          <StoryCard key={id} {...story} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default LatestStories;