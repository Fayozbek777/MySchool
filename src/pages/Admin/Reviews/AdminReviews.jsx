import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { CheckCircle, XCircle, Quote } from "lucide-react";

const AdminReviews = () => {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />
      <div className="p-10 flex-1">
        <h1 className="text-5xl font-black italic uppercase text-white mb-12 tracking-tighter">
          Student <span className="text-emerald-500">Reviews</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-lg">
            <Quote
              className="absolute top-6 right-8 text-emerald-500/20"
              size={40}
            />
            <p className="italic text-slate-300 text-lg leading-relaxed mb-6">
              "Ajoyib maktab, 3 oy ichida ko'p narsani o'rgandim. Ustozlar juda
              professional!"
            </p>
            <div className="flex justify-between items-center border-t border-white/5 pt-6">
              <div className="font-black uppercase text-white tracking-widest text-sm">
                — Fayozbek B.
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-1 text-emerald-500 font-bold text-xs uppercase bg-emerald-500/10 px-4 py-2 rounded-full hover:bg-emerald-500 hover:text-white transition-all">
                  <CheckCircle size={14} /> Tasdiqlash
                </button>
                <button className="flex items-center gap-1 text-red-500 font-bold text-xs uppercase bg-red-500/10 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all">
                  <XCircle size={14} /> O'chirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminReviews;
