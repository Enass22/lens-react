import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegFileAlt } from "react-icons/fa";

export default function Notfound() {
  return (
    <section
      dir="rtl"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      <div className="text-center max-w-3xl mt-24">

        {/* 404 */}
        <h1 className="text-[170px] md:text-[220px] font-black text-orange-400 leading-none">
          404
        </h1>

        {/* الأيقونة */}
        <div className="relative flex justify-center my-6">
          <div className="w-36 h-36 rounded-full border-4 border-orange-400/50 bg-orange-400/10 flex items-center justify-center">
            <span className="text-5xl">☹</span>
          </div>

          <span className="absolute -top-2 right-[34%] w-5 h-5 rounded-full bg-orange-400"></span>
          <span className="absolute bottom-4 left-[34%] w-4 h-4 rounded-full bg-yellow-400"></span>
        </div>

        {/* العنوان */}
        <h2 className="text-5xl font-extrabold mb-4">
          عفوًا! الصفحة غير موجودة
        </h2>

        {/* الوصف */}
        <p className="text-gray-300 text-xl leading-9 max-w-2xl mx-auto">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          <br />
          دعنا نعيدك إلى المسار الصحيح.
        </p>

        {/* الأزرار */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">

          <Link
            to="/"
            className="w-52 h-16 bg-orange-500 hover:bg-orange-600 rounded-2xl flex items-center justify-center gap-2 font-bold transition"
          >
            <FaHome />
            الذهاب للرئيسية
          </Link>

          <Link
            to="/Blogs"
            className="w-52 h-16 border border-gray-500 rounded-2xl flex items-center justify-center gap-2 font-bold hover:border-orange-500 transition"
          >
            <FaRegFileAlt />
            تصفح المقالات
          </Link>

        </div>

        {/* الخط */}
        <div className="w-80 h-px bg-gray-600 mx-auto my-10"></div>

        {/* الروابط */}
        <p className="text-gray-400 mb-4">
          قد تجد هذه مفيدة:
        </p>

        <div className="flex justify-center gap-8 text-orange-400 font-semibold">
          <Link to="/">الرئيسية</Link>
          <Link to="/Blogs">المدونة</Link>
          <Link to="#">من نحن</Link>
          <Link to="#">الخصوصية</Link>
        </div>

      </div>
    </section>
  );
}