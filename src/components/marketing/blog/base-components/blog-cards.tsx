import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

export interface Article {
  id: string;
  title: string;
  summary: string;
  href: string;
  category: {
    name: string;
    href: string;
  };
  thumbnailUrl: string;
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    href?: string;
    avatarUrl?: string;
  };
  tags?: Array<{
    name: string;
    color?: string;
    href?: string;
  }>;
  isFeatured?: boolean;
}

interface Simple01VerticalProps {
  article: Article;
}

export function Simple01Vertical({ article }: Simple01VerticalProps) {
  return (
    <Link
      to={article.href}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.thumbnailUrl}
          alt={article.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {article.isFeatured && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-black/80 text-white rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{article.category.name}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{article.summary}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{article.publishedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readingTime}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Avatar src={article.author.avatarUrl} alt={article.author.name} size="sm" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{article.author.name}</span>
        </div>
      </div>
    </Link>
  );
}

