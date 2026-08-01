import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav dir="rtl" className="bg-black fixed w-full z-20 top-0 start-0 border-b border-neutral-800">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

        {/* عدسة - الأيقونة أول حاجة يمين، بعدها النص */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
          </svg>
          <div className="flex flex-col items-end leading-tight">
            <span className="text-lg font-bold text-white">عدسة</span>
            <span className="text-[10px] text-orange-400">عالم التصوير الفوتوغرافي</span>
          </div>
        </Link>

        {/* الرئيسية / المدونة / من نحن */}
        <ul className="hidden md:flex items-center gap-2 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block py-2 px-6 rounded-full transition ${
                  isActive ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
                }`
              }
            >
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blogs"
              className={({ isActive }) =>
                `block py-2 px-6 rounded-full transition ${
                  isActive ? 'bg-orange-500 text-white' : 'text-white hover:text-orange-500'
                }`
              }
            >
              المدونة
            </NavLink>
          </li>
          <li>
            <span className="block py-2 px-6 rounded-full text-white opacity-60 cursor-default">
              من نحن
            </span>
          </li>
        </ul>

        {/* البحث + ابدأ القراءة */}
        <div className="flex items-center gap-4 shrink-0">
          <button type="button" aria-label="بحث" className="text-white hover:text-orange-500 p-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <Link
            to="/Blogs"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition whitespace-nowrap"
          >
            ابدأ القراءة
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center p-2 w-9 h-9 justify-center text-white rounded-base hover:bg-neutral-800"
            aria-label="فتح القائمة"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}