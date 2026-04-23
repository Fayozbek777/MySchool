import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import { BookOpen, Users, MessageSquare, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      label: "Kurslar",
      value: "12",
      icon: <BookOpen className="text-blue-500" />,
      trend: "+2",
    },
    {
      label: "Ustozlar",
      value: "6",
      icon: <Users className="text-purple-500" />,
      trend: "+1",
    },
    {
      label: "Sharhlar",
      value: "48",
      icon: <MessageSquare className="text-emerald-500" />,
      trend: "+12",
    },
  ];

  return (
    <div className="flex bg-[#020617] min-h-screen font-sans">
      <Sidebar />

      <main className="p-10 flex-1 relative overflow-hidden">
        {/* Orqa fondagi aktsent nurlar */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <header className="mb-12">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-black italic uppercase tracking-tighter text-white"
            >
              Control <span className="text-blue-600">Panel</span>
            </motion.h1>
            <p className="text-slate-500 mt-2 font-medium">
              Tizim holati va umumiy statistika
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 rounded-[2.5rem] overflow-hidden"
              >
                {/* Hover effekti uchun nur */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold">
                    <TrendingUp size={14} />
                    {item.trend}
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">
                    {item.label}
                  </p>
                  <h3 className="text-5xl font-black text-white italic tracking-tighter">
                    {item.value}
                  </h3>
                </div>

                {/* Pastki bezak chizig'i */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Qo'shimcha vizual element (masalan, grafika o'rni) */}
          <div className="mt-10 bg-white/[0.02] border border-white/5 rounded-[3rem] h-64 flex items-center justify-center border-dashed">
            <p className="text-slate-600 italic font-medium">
              Grafik va tahlillar yuklanmoqda...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
