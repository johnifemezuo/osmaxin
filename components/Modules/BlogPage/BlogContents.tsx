"use client";

import { Container } from "@/components/Container/Container";
import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { blogs } from "./blogdata";
import { IBlog } from "@/base/interface/IBlog";


export default function BlogContents({ blogContents }: any) {
  const getCategories = (blogContents: IBlog[]): string[] => {
    const categories = blogContents?.map((blog) => blog.category);
    return Array.from(new Set(categories));
  };

  const categories = getCategories(blogContents);

  const loadMore = () => {
    setVisiblePosts((prevCount) => Math.min(prevCount + 4, blogs.length));
  };

  const [visiblePosts, setVisiblePosts] = useState<number>(8);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogContents = activeCategory
  ? blogContents.filter((blog: IBlog) => blog.category === activeCategory)
  : blogContents;


  return (
    <div className="py-6 lg:py-9 bg-white mx-auto px-4 space-y-8 lg:space-y-8">
      <Container>
        <div className="overflow-x-auto">
        <div className="py-4 lg:flex w-[500px] lg:w-full lg:mt-9 items-center lg:space-x-5 space-x-3 lg:space-y-0 space-y-4 ">
        <button
              onClick={() => setActiveCategory(null)}
              className={`capitalize font-medium text-sm lg:text-base py-2 lg:px-6 px-4 rounded-full ${
                activeCategory === null
                  ? "bg-primary text-white font-semibold"
                  : "border-zinc-200 border-2 text-zinc-700"
              }`}
            >
              All Posts
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`capitalize font-medium text-sm lg:text-base py-2 lg:px-6 px-4 rounded-full ${
                  activeCategory === category
                    ? "bg-primary text-white font-semibold"
                    : "border-zinc-200 border-2 text-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
        </div>
        </div>
      </Container>
      <Container>
        <h1 className="text-2xl font-bold lg:text-4xl mb-8 text-zinc-700">
          Case study
        </h1>

        <div className="">
          {blogContents.length < 0 ? (
            <div className="h-[400px] pt-28 w-full bg-zinc-50 text-center text-zinc-600">
              <p className="text-lg lg:text-2xl">No Content Yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogContents.slice(0, visiblePosts).map((blog: IBlog, id: number) => (
                <BlogCard
                  slug={`/blog/${blog.slug}`}
                  title={blog.title}
                  readTime={blog.readTime}
                  category={blog.category}
                  author={blog.author.name}
                  image={blog.coverImage.url}
                  date={blog.date}
                  key={id}
                />
              ))}
            </div>
          )}
           {visiblePosts < filteredBlogContents.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="rounded-full px-6 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
