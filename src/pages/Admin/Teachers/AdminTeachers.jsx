import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { Mail, MoreVertical } from "lucide-react";

const AdminTeachers = () => {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />
      <div className="p-10 flex-1">
        <h1 className="text-5xl font-black italic uppercase text-white mb-12 tracking-tighter">
          Expert <span className="text-purple-500">Mentors</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-[3rem] text-center hover:bg-white/[0.05] transition-all">
            <div className="absolute top-6 right-6 text-slate-600">
              <MoreVertical size={20} />
            </div>
            <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full mx-auto mb-6 p-1">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-black text-2xl text-white italic">
                JD
              </div>
            </div>
            <h4 className="font-black text-xl text-white uppercase italic tracking-tight">
              John Doe
            </h4>
            <p className="text-purple-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-6">
              Senior React Developer
            </p>

            <div className="flex justify-center gap-4 border-t border-white/5 pt-6">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTeachers;
