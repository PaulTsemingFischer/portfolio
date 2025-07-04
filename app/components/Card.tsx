// app/components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

export default function Card({ title, description, image, link, tags }: CardProps) {
  const CardWrapper = link ? Link : 'div';
  const wrapperProps = link ? { to: link } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
