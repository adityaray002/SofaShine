import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { blogPosts } from '../mock';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Sofa Care Tips & Cleaning Guides | SofaShine Blog</title>
        <meta name="description" content="Expert sofa care tips, fabric vs leather cleaning guides, and advice on when to call professional cleaners. Free guides from SofaShine Delhi NCR." />
        <link rel="canonical" href="https://sofashine.in/blog" />
        <meta property="og:title" content="Sofa Care Tips & Guides | SofaShine Blog" />
        <meta property="og:description" content="Expert advice on maintaining and cleaning your sofa from SofaShine, Delhi NCR's trusted cleaning professionals." />
        <meta property="og:url" content="https://sofashine.in/blog" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sofa Care Tips & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice on maintaining and cleaning your sofa
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-teal-200">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      width="400"
                      height="256"
                      loading="lazy"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Helmet>
          <title>Post Not Found | SofaShine Blog</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "SofaShine"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SofaShine",
      "url": "https://sofashine.in"
    },
    "datePublished": post.date,
    "mainEntityOfPage": `https://sofashine.in/blog/${post.slug}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | SofaShine Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://sofashine.in/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | SofaShine`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://sofashine.in/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          width="1200"
          height="384"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center space-x-4 text-white/90 text-sm mb-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('#')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace(/^#+ /, '')}
                      </h3>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4 pl-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t">
                <Link to="/blog">
                  <Button variant="outline" className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </Card>

            {/* CTA */}
            <Card className="mt-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Professional Cleaning?</h3>
              <p className="mb-6 opacity-90">Book SofaShine today and get 10% off your first service</p>
              <Link to="/book">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export { BlogList, BlogPost };
