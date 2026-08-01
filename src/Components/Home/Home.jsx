import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/posts.json'

export default function Home() {
  const postsCount = data.posts.length
  const categoriesCount = data.categories.length
  const authorsCount = new Set(data.posts.map(p => p.author.name)).size

  const categoryIcons = {
    'إضاءة': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-5 3h4M12 3a6 6 0 0 0-4 10.472V16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.528A6 6 0 0 0 12 3z" />
    ),
    'بورتريه': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m12-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    ),
    'مناظر طبيعية': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l5-6 4 5 3-4 6 5M4 20h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z" />
    ),
    'تقنيات': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4" />
    ),
    'معدات': (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    ),
  }

  return (
    <div dir="rtl" className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center py-32 px-4 relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block bg-neutral-900 border border-orange-900 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-8">
            مرحباً بك في {data.siteInfo.name}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            اكتشف <span className="text-orange-500">فن</span><br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link
              to="/Blogs"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              <span>&larr;</span> استكشف المقالات
            </Link>
            <a
              href="#about"
              className="flex items-center gap-2 border border-neutral-700 hover:border-orange-500 text-white px-8 py-3 rounded-full transition"
            >
              اعرف المزيد
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="order-4 w-24 md:w-28 h-24 md:h-28 bg-neutral-900/60 border border-neutral-700 rounded-2xl flex flex-col items-center justify-center gap-1">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11 15l-4 1 1-4 9.414-9.414z" />
              </svg>
              <span className="text-lg font-bold">{authorsCount}</span>
              <span className="text-[10px] text-gray-400">كاتب</span>
            </div>

            <div className="order-3 w-24 md:w-28 h-24 md:h-28 bg-neutral-900/60 border border-neutral-700 rounded-2xl flex flex-col items-center justify-center gap-1">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              </svg>
              <span className="text-lg font-bold">{categoriesCount}</span>
              <span className="text-[10px] text-gray-400">تصنيفات</span>
            </div>

            <div className="order-2 w-24 md:w-28 h-24 md:h-28 bg-neutral-900/60 border border-neutral-700 rounded-2xl flex flex-col items-center justify-center gap-1">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m5-9.13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6 3a4 4 0 1 1 0 8" />
              </svg>
              <span className="text-lg font-bold">10+أل</span>
              <span className="text-[10px] text-gray-400">قارئ</span>
            </div>

            <div className="order-1 w-24 md:w-28 h-24 md:h-28 bg-neutral-900/60 border border-neutral-700 rounded-2xl flex flex-col items-center justify-center gap-1">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
              </svg>
              <span className="text-lg font-bold">{postsCount}+</span>
              <span className="text-[10px] text-gray-400">مقالة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="inline-block bg-neutral-900 border border-orange-900 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-4">
            مقالات مختارة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">أبرز المقالات</h2>
          <p className="text-gray-400">مقالات مختارة بعناية لتطوير مهاراتك في التصوير</p>
        </div>

        <div className="flex flex-col gap-8">
          {data.posts.filter(p => p.featured).slice(0, 3).map(post => (
            <Link
              to={`/Blogs/${post.id}`}
              key={post.id}
              className="bg-neutral-900 border border-neutral-800 hover:border-orange-500 rounded-2xl overflow-hidden transition flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 relative">
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  ★ مميز
                </span>
                <img src={post.image} alt={post.title} className="w-full h-64 md:h-full object-cover" />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" />
                        <path strokeLinecap="round" d="M12 7v5l3 3" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 leading-snug">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-2">
                    <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm text-white">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-orange-500 text-sm font-medium flex items-center gap-1">
                    اقرأ المقال <span>&larr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/Blogs"
            className="inline-block border border-neutral-700 hover:border-orange-500 text-white px-8 py-3 rounded-full transition"
          >
            شاهد كل المقالات
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-neutral-950 border-y border-neutral-800 py-24 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-neutral-900 border border-orange-900 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-4">
              التصنيفات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">استكشف حسب الموضوع</h2>
            <p className="text-gray-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.categories.map(cat => {
              const count = data.posts.filter(p => p.category === cat.name).length
              return (
                <Link
                  key={cat.name}
                  to="/Blogs"
                  className="group bg-neutral-900 border border-neutral-800 hover:bg-orange-500 hover:border-orange-500 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-7 h-7 mx-auto mb-3 text-orange-500 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    {categoryIcons[cat.name] || <circle cx="12" cy="12" r="9" />}
                  </svg>

                  <div className="text-sm text-white mb-1 transition-colors">{cat.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">
                    {count} مقالة
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* أحدث المقالات */}
      <div className="max-w-screen-xl mx-auto px-4 py-24">

        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-neutral-900 border border-orange-900 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-4">
              الأحدث
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">أحدث المقالات</h2>
            <p className="text-gray-400">محتوى جديد طازج من المطبعة</p>
          </div>

          <Link
            to="/Blogs"
            className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            عرض جميع المقالات <span>&larr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...data.posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3)
            .map(post => (
              <Link
                to={`/Blogs/${post.id}`}
                key={post.id}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500 transition"
              >
                <div className="relative">
                  <span className="absolute top-3 right-3 bg-black/70 text-orange-400 text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 3" />
                    </svg>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-5">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-2">
                      <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="text-sm text-white">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full border border-orange-500/40 text-orange-500 flex items-center justify-center">
                      &larr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-screen-xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl px-6 md:px-16 py-16 text-center">

          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            اشترك في <span className="text-orange-500">نشرتنا</span> الإخبارية
          </h2>
          <p className="text-gray-400 mb-8">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6"
          >
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              اشترك الآن
            </button>
            <input
              type="email"
              required
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full flex-1 bg-neutral-900 border border-neutral-700 rounded-full px-5 py-3 text-white placeholder-gray-500 text-center sm:text-right focus:outline-none focus:border-orange-500"
            />
          </form>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="flex -space-x-2 rtl:space-x-reverse">
                {data.posts.slice(0, 3).map(p => (
                  <img
                    key={p.id}
                    src={p.author.avatar}
                    alt={p.author.name}
                    className="w-6 h-6 rounded-full border-2 border-neutral-900 object-cover"
                  />
                ))}
              </span>
              انضم لـ +10,000 مصور
            </span>
            <span>بدون إزعاج</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>

        </div>
      </div>

    </div>
  )
}