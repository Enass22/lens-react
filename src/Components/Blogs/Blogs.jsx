import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/posts.json'

const POSTS_PER_PAGE = 6
const allPosts = data.posts

export default function Blogs() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const categories = useMemo(() => ['all', ...data.categories.map(c => c.name)], [])

  const filteredPosts = useMemo(() => {
    return allPosts.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'all' || p.category === category
      return matchSearch && matchCategory
    })
  }, [search, category])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  )

  const handleSearch = (val) => { setSearch(val); setPage(1) }
  const handleCategory = (val) => { setCategory(val); setPage(1) }

  return (
    <div dir="rtl" className="bg-black min-h-screen text-white">

      {/* Hero */}
      <div className="text-center py-24 px-4">
        <span className="inline-block bg-neutral-900 border border-orange-900 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-6">
          مدونتنا
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          استكشف <span className="text-orange-500">مقالاتنا</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 pb-20">

        {/* Search (يمين) + Filter pills (شمال) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">

          <div className="relative order-1">
            <svg className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-neutral-900 border border-neutral-700 rounded-full pr-10 pl-4 py-2.5 w-full md:w-72 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 order-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  category === cat
                    ? 'bg-orange-500 text-white'
                    : 'border border-neutral-700 text-gray-300 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {cat === 'all' ? 'جميع المقالات' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Count + View toggle */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-gray-400 text-sm">عرض {filteredPosts.length} مقالات</span>
          <div className="flex gap-2">
            <button
              onClick={() => setView('list')}
              aria-label="عرض قائمة"
              className={`p-2 rounded-lg transition ${view === 'list' ? 'bg-orange-500 text-white' : 'border border-neutral-700 text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setView('grid')}
              aria-label="عرض شبكي"
              className={`p-2 rounded-lg transition ${view === 'grid' ? 'bg-orange-500 text-white' : 'border border-neutral-700 text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="4" y="4" width="7" height="7" rx="1" />
                <rect x="13" y="4" width="7" height="7" rx="1" />
                <rect x="4" y="13" width="7" height="7" rx="1" />
                <rect x="13" y="13" width="7" height="7" rx="1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Posts */}
        {paginatedPosts.length === 0 ? (
          <p className="text-center text-gray-400 py-16">مفيش مقالات مطابقة</p>
        ) : (
          <div className={view === 'grid'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-6"}>
            {paginatedPosts.map(post => (
              <Link to={`/Blogs/${post.id}`} key={post.id}
                className={view === 'grid'
                  ? "bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-orange-500 transition"
                  : "bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-orange-500 transition flex flex-col md:flex-row"}>
                <img src={post.image} alt={post.title}
                  className={view === 'grid' ? "w-full h-48 object-cover" : "w-full md:w-64 h-48 md:h-auto object-cover"} />
                <div className="p-5">
                  <span className="text-xs text-orange-500">{post.category}</span>
                  <h3 className="font-semibold text-lg mt-1 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <span>{post.author.name}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
              <button key={num} onClick={() => setPage(num)}
                className={`w-9 h-9 rounded-full transition ${page === num ? 'bg-orange-500 text-white' : 'border border-neutral-700 text-white'}`}>
                {num}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}