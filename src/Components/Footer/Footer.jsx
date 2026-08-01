import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-700 text-white mt-0">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-2xl font-bold">
              ع
            </div>

            <div>
              <h2 className="text-3xl font-bold">عدسة</h2>
              <p className="text-orange-400 text-sm">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>

          <p className="text-gray-500 leading-8 mb-6">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك أفضل
            النصائح والمقالات لتطوير مهاراتكم.
          </p>

          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 duration-300">
              <FaYoutube />
            </a>

            <a className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 duration-300">
              <FaLinkedin />
            </a>

            <a className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 duration-300">
              <FaGithub />
            </a>

            <a className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-500 duration-300">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            استكشف
            <span className="inline-block w-10 h-1 bg-orange-500 rounded-full mr-3"></span>
          </h3>

          <ul className="space-y-4 text-gray-500">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/Blogs">المدونة</Link></li>
            <li><Link>من نحن</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            التصنيفات
            <span className="inline-block w-10 h-1 bg-orange-500 rounded-full mr-3"></span>
          </h3>

          <ul className="space-y-4 text-gray-500">
            <li>إضاءة</li>
            <li>بورتريه</li>
            <li>مناظر طبيعية</li>
            <li>تقنيات</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            ابقَ على اطلاع
            <span className="inline-block w-10 h-1 bg-orange-500 rounded-full mr-3"></span>
          </h3>

          <p className="text-gray-500 mb-5">
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>

          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full rounded-xl bg-[#242526] border border-gray-600 p-3 mb-4 outline-none"
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-bold duration-300">
            اشترك
          </button>
        </div>

      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
           <p>© 2026 عدسة. صُنع بكل 🧡 جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mb-3 md:mb-0">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">شروط الخدمة</a>
          </div>

         

        </div>
      </div>
    </footer>
  );
}