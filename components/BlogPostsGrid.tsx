"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
};

type BlogPostsGridProps = {
  posts: BlogPost[];
  initialVisibleCount: number;
  loadMoreStep: number;
};

export default function BlogPostsGrid({
  posts,
  initialVisibleCount,
  loadMoreStep,
}: BlogPostsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < posts.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, index) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl glass-card overflow-hidden flex flex-col border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.04]"
          >
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/10 to-pink-900/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority={index < initialVisibleCount}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
            </div>

            <div className="p-6 lg:p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide">
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString("uk-UA")}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
                >
                  Читати
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMorePosts && (
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + loadMoreStep, posts.length)
              )
            }
            className="px-8 py-4 text-white font-semibold rounded-xl transition-all hover:text-purple-300"
          >
            Завантажити більше
          </button>
        </div>
      )}
    </>
  );
}
