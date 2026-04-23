import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { ShieldCheck, Lock, UserCog } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />
      <div className="p-10 flex-1 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px]" />

        <h1 className="text-4xl font-black italic uppercase text-white mb-10 tracking-tighter">
          System <span className="text-red-600">Access</span>
        </h1>

        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] max-w-xl">
          <div className="flex items-center gap-3 mb-8 text-red-500">
            <ShieldCheck size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">
              Xavfsizlik darajasi: Yuqori
            </span>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label className="block mb-2 text-xs font-black uppercase text-slate-500 ml-2">
                Admin Login
              </label>
              <div className="relative">
                <UserCog
                  className="absolute left-4 top-4 text-slate-500"
                  size={20}
                />
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-red-600/50 transition-all"
                  defaultValue="admin"
                />
              </div>
            </div>

            <div className="group">
              <label className="block mb-2 text-xs font-black uppercase text-slate-500 ml-2">
                Yangi Maxfiy Kalit
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-slate-500"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-red-600/50 transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl uppercase italic tracking-widest shadow-lg shadow-red-600/20 transition-all transform active:scale-95">
              Yangilash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
