import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import MetaSeo from "../../Components/MetaSEO";
import { motion } from "framer-motion";
import { sendMail } from "../../helper";

function SingleBlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [toc, setToc] = useState([]); // { id, text, level }
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef(null);
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://wp.morphacademy.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`
        );
        if (!response.ok) throw new Error("Error fetching post");
        const data = await response.json();
        if (data.length === 0) navigate("/");
        setPost(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchRecent = async () => {
      try {
        const res = await fetch(
          `https://wp.morphacademy.com/wp-json/wp/v2/posts?_embed=true&per_page=6`
        );
        const data = await res.json();
        setRecentPosts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
    fetchRecent();
  }, [slug, navigate]);

  // Format HTML (tailwind classes) - kept from previous
  const formatHTML = (html) => {
    if (!html) return "";
    return html
      .replace(/<h1/g, '<h1 class="text-3xl md:text-4xl font-bold text-white mb-6 mt-10"')
      .replace(/<h2/g, '<h2 class="text-2xl md:text-3xl font-semibold text-gray-200 mb-5 mt-8"')
      .replace(/<h3/g, '<h3 class="text-xl md:text-2xl font-semibold text-gray-200 mb-4 mt-6"')
      .replace(/<p/g, '<p class="text-gray-300 leading-relaxed mb-5"')
      .replace(
        /<img/g,
        '<img class="rounded-xl shadow-xl my-6 w-full object-cover max-h-[450px]"'
      )
      .replace(
        /<blockquote/g,
        '<blockquote class="border-l-4 border-yellow-500 pl-6 italic text-gray-300 my-6"'
      )
      .replace(/<ul/g, '<ul class="list-disc text-gray-300 pl-6 space-y-2 mb-6"')
      .replace(/<ol/g, '<ol class="list-decimal text-gray-300 pl-6 space-y-2 mb-6"')
      .replace(/<li/g, '<li class="text-gray-300"')
      .replace(
        /<a/g,
        '<a class="text-yellow-400 hover:text-yellow-300 underline duration-200"'
      );
  };

  /* ------------------ Build TOC when post loads ------------------ */
  useEffect(() => {
    if (!post) return;
    const cleanHtml = DOMPurify.sanitize(formatHTML(post.content.rendered));
    // Parse headings and create ids if missing
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHtml, "text/html");
    const headings = [...doc.querySelectorAll("h2, h3")];
    const tocList = headings.map((h, idx) => {
      let id = h.id;
      if (!id) {
        id = `heading-${idx}-${h.textContent.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`;
        h.id = id;
      }
      return { id, text: h.textContent.trim(), level: h.tagName.toLowerCase() === "h2" ? 2 : 3 };
    });
    setToc(tocList);
  }, [post]);

  /* --------------- Insert sanitized HTML into DOM and add heading IDs --------------- */
  // We'll render the sanitized/formatted HTML and then ensure the headings in DOM have ids
  const sanitizedHTML = post ? DOMPurify.sanitize(formatHTML(post.content.rendered)) : "";

  /* ------------------ Reading progress and active heading tracking ------------------ */
  useEffect(() => {
    if (!post) return;
    const article = () => articleRef.current;
    let rafId = null;

    const update = () => {
      const el = article();
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      const total = el.scrollHeight;
      // calculate scroll position relative to the article element
      const visibleTop = Math.max(0, -rect.top);
      const progressVal = Math.min(1, visibleTop / (total - winH + rect.height));
      setProgress(Math.round(progressVal * 100));

      // Active heading detection
      const headingNodes = el.querySelectorAll("h2, h3");
      let currentId = null;
      for (const h of headingNodes) {
        const hRect = h.getBoundingClientRect();
        if (hRect.top <= 140) {
          currentId = h.id || null;
        } else {
          break;
        }
      }
      setActiveId(currentId);

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [post]);

  /* --------------- Smooth scroll to heading from TOC --------------- */
  const handleTocClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // offset for sticky header
    window.scrollBy(0, -80);
  };

  /* --------------- Share buttons --------------- */
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = post ? post.title.rendered.replace(/<[^>]+>/g, "") : "Check this out";

  const openShare = (platform) => {
    let url = "";
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`;
    }
    window.open(url, "_blank", "noopener,noreferrer,width=900,height=600");
  };

  /* ------------------ Author data helper ------------------ */
  const author = post?._embedded?.author?.[0] || null;
  const authorAvatar = author?.avatar_urls?.["96"] || post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  /* ------------------ Loading skeleton (keeps previous style) ------------------ */
  if (isLoading) {
    return (
      <div className="animate-pulse bg-[#0e0e0f] text-white min-h-screen">
        <div className="relative w-full h-[60vh] md:h-[60vh] bg-[#1a1a1c] overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900 blur-sm opacity-80"></div>
          <div className="absolute inset-0 flex justify-center items-center px-6">
            <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-10 w-full max-w-3xl">
              <div className="h-10 md:h-14 bg-neutral-700 rounded-lg w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-neutral-600 rounded mx-auto w-1/4"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 bg-[#161617] p-8 rounded-2xl shadow-xl border border-white/5 space-y-5">
            <div className="h-4 bg-neutral-700 rounded w-full"></div>
            <div className="h-4 bg-neutral-700 rounded w-5/6"></div>
            <div className="h-4 bg-neutral-700 rounded w-4/6"></div>
            <div className="h-64 bg-neutral-700 rounded-xl mt-6"></div>
            <div className="h-4 bg-neutral-700 rounded w-5/6 mt-6"></div>
            <div className="h-4 bg-neutral-700 rounded w-4/6"></div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1b1b1d] p-4 rounded-xl border border-white/5 shadow-lg">
                <div className="h-32 bg-neutral-700 rounded-lg mb-3"></div>
                <div className="h-4 bg-neutral-700 rounded w-4/5 mb-2"></div>
                <div className="h-3 bg-neutral-700 rounded w-2/5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ------------------ Final rendered page ------------------ */
  return (
    <div className="bg-[#0e0e0f] min-h-screen text-white">

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
        <div
          className="h-1 bg-yellow-400 transition-width duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {post && <MetaSeo meta={post?.yoast_head_json} />}

      {error && <p className="text-center text-red-400">{error}</p>}

      {post && (
        <>
          {/* HERO */}
          <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">

            <img
              src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              alt="banner"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-[4px] opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80"></div>

            {/* Author box placed inside hero (glass) */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/6 border border-white/10 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-3">
                {authorAvatar && (
                  <img src={authorAvatar} alt={author?.name || "author"} className="w-10 h-10 rounded-full object-cover" />
                )}
                <div className="text-left">
                  <div className="text-xs text-gray-300">By</div>
                  <div className="text-sm font-semibold text-white">{author?.name || "Morph Academy"}</div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="backdrop-blur-xl bg-white/6 border border-white/10 shadow-2xl p-6 md:p-10 rounded-2xl max-w-8xl mx-auto text-center"
              >
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug drop-shadow-lg">
                  {post.title.rendered}
                </h1>

                <p className="text-gray-300 mt-3 text-xs md:text-sm tracking-wide">
                  {new Date(post.date).toDateString()} • 5 min read
                </p>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e0f] to-transparent"></div>
          </div>

          {/* Floating Share Buttons (left) */}
          <div className="hidden lg:flex fixed left-6 top-1/3 flex-col gap-3 z-50">
            <button
              onClick={() => openShare("twitter")}
              className="w-10 h-10 rounded-full bg-[#1b1b1d] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              title="Share on Twitter"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.7.31-1.46.52-2.25.62a3.9 3.9 0 0 0 1.7-2.16 7.72 7.72 0 0 1-2.47.94A3.86 3.86 0 0 0 12.15 7c0 .31.03.62.1.91A10.95 10.95 0 0 1 3.1 4.58a3.86 3.86 0 0 0 1.2 5.15c-.6 0-1.16-.18-1.65-.45v.05c0 1.84 1.28 3.37 2.98 3.72-.5.14-1.02.2-1.56.2-.38 0-.75-.03-1.12-.1.76 2.38 2.96 4.11 5.57 4.16A7.74 7.74 0 0 1 2 19.53 10.9 10.9 0 0 0 8.06 21c6.12 0 9.47-5.08 9.47-9.48v-.43A6.78 6.78 0 0 0 22 5.92z"/></svg>
            </button>
            <button
              onClick={() => openShare("facebook")}
              className="w-10 h-10 rounded-full bg-[#1b1b1d] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              title="Share on Facebook"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 4.96 3.66 9.07 8.44 9.93v-7.04H7.9v-2.9h2.54V9.34c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.04C18.34 21.14 22 17.03 22 12.07z"/></svg>
            </button>
            <button
              onClick={() => openShare("linkedin")}
              className="w-10 h-10 rounded-full bg-[#1b1b1d] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              title="Share on LinkedIn"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM0 8.98h4.98v15H0v-15zM8.98 8.98h4.78v2.07h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.33 6 7.66v8.87h-4.98V17.8c0-2.23-.04-5.09-3.1-5.09-3.1 0-3.57 2.42-3.57 4.92v7.42H8.98v-15z"/></svg>
            </button>
          </div>

          {/* MAIN AREA + SIDEBAR */}
          <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* MAIN CONTENT */}
            <motion.div
              className="lg:col-span-3 bg-[#161617] p-6 md:p-10 rounded-2xl shadow-xl border border-white/5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* TOC for mobile (collapsible) */}
              <div className="block lg:hidden mb-6">
                {toc.length > 0 && (
                  <details className="bg-[#141416] p-3 rounded-lg border border-white/5">
                    <summary className="text-sm text-yellow-400 font-semibold cursor-pointer">Contents</summary>
                    <ul className="mt-3 space-y-2">
                      {toc.map((t) => (
                        <li key={t.id} className={`${activeId === t.id ? "text-yellow-400" : "text-gray-300"} text-sm`}>
                          <a a href={`#${t.id}`} className="text-left w-full">
                            {t.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>

              {/* Article */}
              <article
                ref={articleRef}
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
              />
            </motion.div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
          

                {/* Latest Articles (new sidebar design) */}
                <div className="bg-[#0f0f10] p-4 rounded-xl border border-white/5">
                  <h2 className="text-lg md:text-xl font-bold text-yellow-400 mb-4 tracking-wide">Latest Articles</h2>
                  <div className="space-y-4">
                    {recentPosts.map((rp) => {
                      const img = rp._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                      return (
                        <a
                          key={rp.id}
                          href={`/${rp.slug}`}
                          className="group block bg-[#1a1a1c] rounded-xl shadow-md border border-white/5
                                 hover:border-yellow-400/40 hover:shadow-yellow-500/10 overflow-hidden 
                                 transition-all duration-300"
                        >
                          <div className="relative w-full h-28 overflow-hidden rounded-t-xl">
                            {img ? (
                              <img src={img} alt={rp.title.rendered} className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" />
                            ) : (
                              <div className="w-full h-full bg-gray-800" />
                            )}
                            <span className="absolute top-2 left-2 bg-black/60 text-yellow-300 text-xs px-2 py-1 rounded-md backdrop-blur-sm">Blog</span>
                          </div>

                          <div className="p-3">
                            <h3 className="text-gray-100 font-semibold text-sm md:text-sm leading-snug group-hover:text-yellow-400 transition-colors line-clamp-2">
                              {rp.title.rendered}
                            </h3>
                            <p className="text-gray-500 text-xs mt-2">{new Date(rp.date).toDateString()}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                

              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleBlogPost;
