"use client";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import PageContainer from "@/components/Container/PageContainer";
import PageTitle from "@/components/Elements/PageTitle";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import { ButtonOutlinePrimary } from "@/components/UI/Button/ButtonOutlinePrimary";
import parse from "html-react-parser";
import Link from "next/link";
import BlogDetailHero from "./BlogDetailHero";
import { BlogInlineCard } from "./BlogInlineCard";
import { IBlog } from "@/base/interface/IBlog";

export const BlogDetailContent = ({
  details,
  otherPosts,
}: {
  details: IBlog | any;
  otherPosts: IBlog[];
}) => {
  return (
    <div>
      <BlogDetailHero details={details} />

      <div className="bg-white py-12  px-5 xl:px-0">
        <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
          <PageContainer>
            <div className="pageStyle">
              {parse(details.content.html as string)}
            </div>

            <div className="grid lg:flex gap-3 items-center justify-between py-8 ">
              <h3 className="text-zinc-800 lg:text-lg font-medium">
                Share This Blog on Your Social Media
              </h3>
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <FacebookIcon />
                </Link>

                <Link href="/">
                  <TwitterIcon />
                </Link>

                <Link href="/">
                  <LinkedinIcon className="text-zinc-800" />
                </Link>
                <Link href="/">
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </PageContainer>

          <Container>
            <div className="mt-12 py-12 border-t space-y-9">
              <div className="grid gap-6 lg:flex items-center justify-between ">
                <PageTitle className="text-zinc-800">Other Posts</PageTitle>
                <ButtonOutlinePrimary text="See all Blog" link="/blog" />
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
                  {otherPosts.map((blog: IBlog, id: number) => (
                    <BlogInlineCard
                      link={blog.slug}
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
              </div>
            </div>
          </Container>
        </ScrollReveal>
      </div>
    </div>
  );
};
