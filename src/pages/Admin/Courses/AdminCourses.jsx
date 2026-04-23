import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { Plus, Edit3, Trash2 } from "lucide-react";

const AdminCourses = () => {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />
      <div className="p-10 flex-1">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black italic uppercase text-white tracking-tighter">
              Manage <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">
              O'quv dasturlarini tahrirlash va qo'shish
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-2xl uppercase italic transition-all shadow-xl shadow-blue-600/20">
            <Plus size={20} /> Yangi Kurs
          </button>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-6 text-left text-xs font-black uppercase text-slate-400 tracking-widest">
                  Kurs Nomi
                </th>
                <th className="p-6 text-left text-xs font-black uppercase text-slate-400 tracking-widest">
                  Narxi
                </th>
                <th className="p-6 text-right text-xs font-black uppercase text-slate-400 tracking-widest">
                  Amallar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/5 hover:bg-white/[0.03] transition-colors">
                <td className="p-6">
                  <div className="font-bold text-white text-lg italic">
                    Frontend Development
                  </div>
                </td>
                <td className="p-6 text-blue-500 font-black">1 200 000 UZS</td>
                <td className="p-6 text-right space-x-4">
                  <button className="p-3 bg-white/5 hover:bg-blue-600/20 text-blue-500 rounded-xl transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button className="p-3 bg-white/5 hover:bg-red-600/20 text-red-500 rounded-xl transition-all">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
