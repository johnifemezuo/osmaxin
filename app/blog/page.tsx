"use client";

import { IBlog } from "@/base/interface/IBlog";
import { BLOG_QUERY } from "@/base/query/blog";
import BlogLoading from "@/components/Loading/BlogLoading";
import OfflineNetwork from "@/components/Loading/OfflineNetwork";
import BlogContactUs from "@/components/Modules/BlogPage/BlogContactUs";
import BlogContents from "@/components/Modules/BlogPage/BlogContents";
import { BlogHeroSection } from "@/components/Modules/BlogPage/BlogHeroSection";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

interface IBlogData {
  blogs: IBlog[]
}

export default function BlogPage() {
  const { data } = useSuspenseQuery<IBlogData>(BLOG_QUERY);

  const blogContents = data?.blogs || {};
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Simulate a brief loading period
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <BlogHeroSection />
      {!isLoading && !isOnline ? <OfflineNetwork /> : null}

      {isLoading ? (
        <BlogLoading />
      ) : (
        <BlogContents blogContents={blogContents} />
      )}

      <BlogContactUs />
    </div>
  );
}
