import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaSeo from "../../Components/MetaSEO";

function BlogPosts({ postsPerPage = 5, paginate = false }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://wp.morphacademy.com/wp-json/wp/v2/posts?per_page=6&page=${currentPage}&_embed=true`
        );
        if (!response.ok) throw new Error(`Error fetching posts: ${response.statusText}`);
        const data = await response.json();
        setPosts(data);
        setTotalPages(Number(response.headers.get("X-WP-TotalPages")));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const truncateExcerpt = (text, maxLength) => {
    if (!text) return "";
    const plainText = text.replace(/<[^>]+>/g, "");
    return plainText.length > maxLength ? `${plainText.substring(0, maxLength)}...` : plainText;
  };

  return (
    <>
    
     <MetaSeo
  meta={{
    title: "Morph Academy Blogs",
    description: "Explore the latest resources, tutorials, and expert articles from Morph Academy.",
  }}
/>

      <section className="bg-black py-16 px-4 min-h-screen pt-20">
        <div className="container mx-auto">
        <div className="text-white my-8 text-center">  <h2 className="text-4xl font-semibold">Morph Academy Blogs</h2>
          <p>Explore the latest resources, tutorials, and expert articles from Morph Academy.</p>
</div>
          {error && <p className="text-red-500 text-center mb-10">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {isLoading &&
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="w-full h-52 bg-neutral-800"></div>
                  <div className="p-6">
                    <div className="h-5 bg-neutral-800 rounded-md w-3/4 mb-3"></div>
                    <div className="h-4 bg-neutral-800 rounded-md w-full mb-2"></div>
                    <div className="h-4 bg-neutral-800 rounded-md w-5/6 mb-4"></div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="h-3 w-20 bg-neutral-800 rounded-md"></div>
                      <div className="h-3 w-16 bg-neutral-800 rounded-md"></div>
                      <div className="h-3 w-14 bg-neutral-800 rounded-md"></div>
                    </div>
                  </div>
                </div>
              ))}

            {!isLoading &&
              posts.map((post, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300"
                >
                  <Link to={`/${post.slug}`}>
                    <div className="w-full h-52 overflow-hidden">
                      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                        <img
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to={`/${post.slug}`} className="text-white hover:text-yellow-500 transition-colors">
                        {post.title?.rendered}
                      </Link>
                    </h3>

                    {post.excerpt?.rendered && (
                      <p className="text-gray-400 mb-4">
                        {truncateExcerpt(post.excerpt.rendered, 120)}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="text-gray-400">Morph Academy</span>
                      <span className="text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="text-gray-400">5 min read</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {paginate && totalPages > 1 && (
            <div className="flex justify-center mt-10 w-full">
              <ul className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <li key={num}>
                    <button
                      onClick={() => handlePageChange(num)}
                      disabled={currentPage === num}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                        ${
                          currentPage === num
                            ? "bg-yellow-500 text-black shadow-md cursor-default"
                            : "bg-gray-800 text-white hover:bg-yellow-500 hover:text-black"
                        }`}
                    >
                      {num}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default BlogPosts;
