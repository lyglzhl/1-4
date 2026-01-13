
import React, { useEffect, useState } from 'react';
import { MENTORS, PROCESS_STEPS, STUDENT_CASES } from './constants';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen relative shadow-2xl overflow-x-hidden bg-[#fffbf5]">
      
      {/* 00. Cover Section - Reduced heights and margins */}
      <section id="cover" className="relative min-h-[90vh] bg-[#e38a2c] p-10 flex flex-col justify-between text-white overflow-hidden">
        {/* Logo and Header */}
        <div className="pt-2">
          <div className="flex flex-col items-center">
             <div className="text-4xl font-serif mb-0 italic text-white/90">YS</div>
             <div className="text-[10px] tracking-[0.3em] font-light uppercase text-white/80">YUSHI CONSULTING</div>
             <div className="flex items-center gap-2 w-full mt-1">
                <div className="h-[1px] flex-1 bg-white/30"></div>
                <div className="text-[9px] tracking-[0.2em] font-light whitespace-nowrap text-white/70">UK BASE</div>
                <div className="h-[1px] flex-1 bg-white/30"></div>
             </div>
          </div>
        </div>

        {/* Main Title - Reduced margin from 16 to 8 */}
        <div className="mt-8">
          <h1 className="text-[72px] font-bold leading-none mb-3 tracking-tighter drop-shadow-sm">
            留学<br />指南
          </h1>
          <p className="text-xl font-medium tracking-widest opacity-95">
            医学/心理学留学领航者
          </p>
        </div>

        {/* Removed Bridge Illustration as per request */}

        {/* Footer Info - Compact gaps */}
        <div className="relative z-10 pb-2">
          <div className="flex flex-col gap-4">
            <div className="w-24 h-24 bg-white p-1.5 rounded-sm shadow-lg">
               <div className="w-full h-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-5 gap-1 p-1">
                    {[...Array(25)].map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 ${Math.random() > 0.4 ? 'bg-slate-800' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="space-y-0.5">
              <p className="text-xs font-light opacity-80 mb-1">联系电话：</p>
              <p className="text-lg font-bold tracking-tight">
                +86 13162611127 <span className="text-[10px] font-light opacity-70">(中国)</span>
              </p>
              <p className="text-lg font-bold tracking-tight">
                +44 07419735373 <span className="text-[10px] font-light opacity-70">(英国)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01. About Us - Updated image grid margin for better spacing */}
      <section id="about" className={`scroll-reveal relative px-8 pt-5 pb-2 ${isVisible['about'] ? 'visible' : ''}`}>
        {/* Background Watermark */}
        <div className="absolute right-[-10%] top-[10%] w-64 h-64 text-orange-200 opacity-[0.06] pointer-events-none -z-10 rotate-12">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 18V22M12 22H16M12 22H8M9 4H15M10 4V8M14 4V8M6 20C6 20 6 14 12 14C18 14 18 20 18 20" />
            <circle cx="12" cy="11" r="3" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-orange-500 font-bold text-lg">01</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">关于我们</h2>
          <div className="h-px flex-1 bg-orange-100"></div>
        </div>
        
        <div className="space-y-1.5 relative">
          <div className="bg-white/80 backdrop-blur-[2px] p-4 rounded-[1.5rem] border border-orange-50 shadow-sm relative overflow-hidden">
             <p className="text-slate-700 leading-6 text-sm text-justify">
              YUSHI 留学教育始于英国，并在重庆设有本土团队，形成<span className="text-orange-600 font-bold">“海外一线信息把控 + 国内高响应交付”</span>的双地协同服务体系。我们长期专注医学、心理学及相关健康学科，不仅帮助学生完成申请，更关注：所选专业如何匹配个人能力与兴趣、学业如何规划才能产出高质量成果，以及这些成果如何进一步转化为未来的就业竞争力。
            </p>
          </div>

          <div className="bg-orange-50/50 p-4 rounded-[1.5rem] border border-orange-100/50 shadow-sm">
            <p className="text-slate-700 leading-6 text-sm text-justify">
              我们提供多国联申服务，覆盖英美、香港、新加坡、澳大利亚及其他主流目的地，围绕“专业匹配—学业规划—申请落地—职业发展”提供全链路支持。换句话说，我们会与学生共同完成职业方向梳理与路径定位：明确适合的细分赛道与岗位画像，倒推选校选专业、能力补齐与经历积累，让申请不止是拿到 offer，而是为未来职业发展服务。
            </p>
          </div>

          <div className="bg-orange-100 p-4 rounded-[1.2rem] text-slate-800 border border-orange-200 shadow-sm">
            <p className="text-xs leading-5">
              截至目前，YUSHI 已累计服务 <span className="text-orange-600 font-bold text-base">500+</span> 名学生，协助获得 <span className="text-orange-600 font-bold text-base">2000+</span> 份海外院校录取通知，学生去向遍布多个国家与地区。
            </p>
          </div>

          {/* Increased mt-1 to mt-4 to increase gap below the orange card as requested */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm">
              <img 
                src="https://api.aistudio.google.com/container/api/v1/files/f:e4113115-46f3-4d2c-81be-8e6584c6c968" 
                alt="学生毕业剪影" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1 px-2 text-center border-t border-orange-100">
                <span className="text-[9px] font-bold text-orange-700">学生毕业剪影</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm">
              <img 
                src="https://api.aistudio.google.com/container/api/v1/files/f:812f8e13-c9e9-4672-911e-b81b85f36e61" 
                alt="YUSHI 活动现场" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1 px-2 text-center border-t border-orange-100">
                <span className="text-[9px] font-bold text-orange-700">YUSHI 活动现场</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Service Process - Section with process steps */}
      <section id="process" className={`scroll-reveal relative px-8 pt-10 pb-4 mb-2 ${isVisible['process'] ? 'visible' : ''}`}>
        {/* Background Watermark */}
        <div className="absolute left-[-5%] top-[15%] w-full h-[80%] text-orange-400 opacity-[0.04] pointer-events-none -z-10 flex flex-col justify-around">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="flex justify-between items-center w-32 px-4" style={{marginLeft: `${Math.sin(i) * 20}px`}}>
                <div className="w-1.5 h-1.5 rounded-full border border-currentColor"></div>
                <div className="h-[1px] flex-1 bg-current mx-2 opacity-30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
             </div>
           ))}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-orange-500 font-bold text-lg">02</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">服务流程</h2>
          <div className="h-px flex-1 bg-orange-100"></div>
        </div>
        
        <div className="space-y-4 relative">
          <div className="absolute left-4 top-1 bottom-1 w-[1px] bg-gradient-to-b from-orange-400 via-orange-200 to-transparent"></div>
          
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative pl-12 group">
              <div className="absolute left-0 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-600 text-[10px] font-bold z-10 shadow-sm transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 mb-0 group-hover:text-orange-600 transition-colors">{step.title}</h3>
              <p className="text-slate-500 text-[12px] leading-snug">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Career Support - Extended support info */}
      <section id="career" className={`scroll-reveal px-6 py-5 ${isVisible['career'] ? 'visible' : ''}`}>
        <div className="orange-gradient text-white p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute left-0 top-0 w-full h-full opacity-[0.08] pointer-events-none z-0">
             <svg viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.5">
                <circle cx="50" cy="50" r="1.5" fill="white" />
                <circle cx="150" cy="60" r="1.5" fill="white" />
                <circle cx="100" cy="120" r="1.5" fill="white" />
                <path d="M50 50 L150 60 L100 120 L50 50" />
             </svg>
          </div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-1.5 serif leading-tight">Offer 之后：持续支持</h2>
            <div className="w-10 h-0.5 bg-white/30 rounded-full mb-3"></div>
            
            <p className="text-orange-50 text-[12px] leading-relaxed mb-4 opacity-90 text-justify">
              我们关注的不保持录取结果，围绕医学与心理学路径，在 Offer 之后提供以下延伸支持，转化留学为长期价值。
            </p>
            
            <div className="space-y-3">
              {[
                {
                  id: "(1)",
                  title: "职业发展支持",
                  desc: "结合专业背景与个人能力，协助梳理医学/心理学细分赛道，并提供简历优化、面试策略及阶段性职业建议。"
                },
                {
                  id: "(2)",
                  title: "影子实习内推支持",
                  desc: "基于领域合作资源，协助对接影子实习及相关实践机会，提前理解行业需求，增强就业竞争力。"
                },
                {
                  id: "(3)",
                  title: "资源链接行业支持",
                  desc: "持续与多国院校、研究机构合作，不定期组织主题讲座、行业分享及内部资源对接。"
                },
                {
                  id: "(4)",
                  title: "课业辅导升学支持",
                  desc: "提供课程学习支持与方法指导；针对科研规划意向，提供选题建议、科研路径规划及进阶升学支持。"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <h3 className="text-[14px] font-bold mb-1 flex items-center gap-2">
                    <span className="text-orange-200 font-mono text-xs">{item.id}</span>
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-orange-50/90 leading-snug text-justify">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Mentors - Team info */}
      <section id="mentors" className={`scroll-reveal px-8 py-5 ${isVisible['mentors'] ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-orange-500 font-bold text-lg">03</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">部分导师介绍</h2>
          <div className="h-px flex-1 bg-orange-100"></div>
        </div>
        <div className="mb-4 px-2">
          <p className="text-slate-500 text-[12px] leading-snug font-normal text-justify">
            每一份 Offer 背后，都是我们专业团队的精准规划和高效执行。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {MENTORS.map((mentor, index) => (
            <div key={index} className="bg-white p-3 rounded-[1.2rem] border border-slate-100 shadow-sm relative flex flex-col overflow-hidden">
              <div className="mb-1 relative z-10">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">{mentor.name}</h3>
                <p className="text-[9px] text-orange-600 leading-tight font-medium bg-orange-50/80 px-1 py-0.5 rounded-md min-h-[32px] flex items-center">
                  {mentor.title}
                </p>
              </div>
              <div className="space-y-1 mt-0.5 flex-1 relative z-10">
                {mentor.specialties.slice(0, 2).map((spec, sIndex) => (
                  <div key={sIndex} className="text-[9px] text-slate-500 flex items-start gap-1 leading-tight">
                    <span className="mt-1 w-1 h-1 bg-orange-300 rounded-full flex-shrink-0"></span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Student Cases - Case studies */}
      <section id="cases" className={`scroll-reveal relative mt-2 p-6 py-6 bg-orange-50/30 rounded-t-[2.5rem] border-t border-orange-100 ${isVisible['cases'] ? 'visible' : ''}`}>
        <div className="absolute left-0 bottom-[10%] w-full h-16 text-orange-500 opacity-[0.03] pointer-events-none -z-10">
           <svg viewBox="0 0 400 100" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M0 50 L120 50 L130 10 L145 90 L160 50 L400 50" />
           </svg>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-orange-500 font-bold text-lg">04</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">学员案例</h2>
          <div className="h-px flex-1 bg-orange-200/50"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 relative z-10">
          {STUDENT_CASES.slice(0, 8).map((student, index) => (
            <div key={index} className="bg-white p-3 rounded-[1.2rem] shadow-sm border border-orange-50 flex flex-col h-full relative group">
              <div className="mb-2">
                <div className="flex items-baseline gap-1 mb-0.5">
                  <span className="text-orange-500 font-bold text-xs tracking-tighter">#{index + 1}</span>
                  <span className="font-bold text-slate-800 text-[14px]">{student.name}</span>
                </div>
                <p className="text-[8px] text-slate-400 leading-tight italic font-light">
                  {student.background}
                </p>
              </div>
              <div className="w-full h-px bg-slate-50 mb-2"></div>
              <div className="space-y-1 flex-1">
                {student.offers.slice(0, 2).map((offer, oIndex) => (
                  <div key={oIndex} className="flex items-start gap-1.5 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-[2px] flex-shrink-0"></span>
                    <span className="text-[10px] leading-tight text-slate-600 font-medium">
                      {offer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center pb-2 opacity-40">
          <p className="text-slate-400 text-[10px] italic">你的目标院校不是偶然，而是必然。</p>
        </div>
      </section>

      {/* 06. Footer */}
      <footer className="bg-white p-8 pt-4 pb-28 text-center border-t border-orange-50 relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-20%] w-32 h-32 bg-orange-50 rounded-full opacity-30 -z-10"></div>
        <div className="mb-4">
          <div className="w-10 h-10 orange-gradient rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-orange-500/10">
            <span className="text-white font-bold text-xs italic">YS</span>
          </div>
          <p className="text-slate-500 text-[9px] tracking-widest uppercase mb-1">YUSHI Consultant Group</p>
          <h3 className="text-lg font-bold serif leading-snug text-slate-800">
            陪你从学业出发，<br />把职业路径规划清楚
          </h3>
        </div>
        <p className="text-[9px] text-slate-300 tracking-tighter mt-4">
          © 2025 YUSHI EDUCATION. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* Fixed Sticky CTA - Removed as requested */}
    </div>
  );
};

export default App;
