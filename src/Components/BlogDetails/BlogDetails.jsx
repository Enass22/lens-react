import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../../data/posts.json'

export default function BlogDetails() {
  const { id } = useParams()
  const post = data.posts.find(p => String(p.id) === id)

  if (!post) {
    return (
      <div dir="rtl" className="bg-black min-h-screen text-white py-28 text-center">
        <p className="mb-4">التدوينة مش موجودة</p>
        <Link to="/Blogs" className="text-orange-500">رجوع للمدونة</Link>
      </div>
    )
  }

  return (
    <div dir="rtl" className="bg-black min-h-screen text-white py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/Blogs" className="text-orange-500 mb-6 inline-block">&larr; رجوع للمدونة</Link>

        <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-xl mb-6" />

        <span className="text-sm text-orange-500">{post.category}</span>
        <h1 className="text-3xl font-bold mt-2 mb-4">{post.title}</h1>

        <div className="flex items-center gap-3 mb-8 text-gray-400 text-sm">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-white">{post.author.name}</p>
            <p>{post.author.role} · {post.date} · {post.readTime}</p>
          </div>
        </div>

        <div className="leading-8 text-gray-200 space-y-4">
          {post.content.split('\n\n').map((block, i) =>
            block.startsWith('## ') ? (
              <h2 key={i} className="text-xl font-bold text-white mt-6">{block.replace('## ', '')}</h2>
            ) : (
              <p key={i}>{block}</p>
            )
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-neutral-900 border border-neutral-700 rounded-full px-3 py-1 text-gray-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}