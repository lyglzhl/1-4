
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
      
      {/* 00. Cover Section */}
      <section id="cover" className="relative min-h-[85vh] bg-[#ee9124] p-10 flex flex-col justify-center text-white overflow-hidden">
        <div className="mt-0">
          <h1 className="text-[72px] font-bold leading-none mb-3 tracking-tighter drop-shadow-sm">
            留学<br />指南
          </h1>
          <p className="text-xl font-medium tracking-widest opacity-95">
            医学/心理学留学领航者
          </p>
        </div>

        <div className="relative z-10 mt-20">
          <div className="flex flex-col gap-4">
            <div className="w-24 h-24 p-1.5 rounded-sm shadow-lg bg-[url('/images/wechat.jpg')] bg-cover bg-center">
               <div className="hidden w-full h-full bg-slate-100 items-center justify-center border border-slate-200 overflow-hidden">
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

      {/* 01. About Us */}
      <section id="about" className={`scroll-reveal relative px-8 pt-5 pb-2 ${isVisible['about'] ? 'visible' : ''}`}>
        <div className="absolute right-[-10%] top-[10%] w-64 h-64 text-[#ee9124] opacity-[0.06] pointer-events-none -z-10 rotate-12">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 18V22M12 22H16M12 22H8M9 4H15M10 4V8M14 4V8M6 20C6 20 6 14 12 14C18 14 18 20 18 20" />
            <circle cx="12" cy="11" r="3" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#ee9124] font-bold text-lg">01</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">关于我们</h2>
          <div className="h-px flex-1 bg-orange-100"></div>
        </div>
        
        <div className="space-y-1.5 relative">
          <div className="bg-white/80 backdrop-blur-[2px] p-4 rounded-[1.5rem] border border-orange-50 shadow-sm relative overflow-hidden">
             <p className="text-slate-700 leading-6 text-sm text-justify">
              YUSHI 留学教育始于英国，并在重庆设有本土团队，形成<span className="text-[#ee9124] font-bold">“海外一线信息把控 + 国内高响应交付”</span>的双地协同服务体系。我们长期专注医学、心理学及相关健康学科，不仅帮助学生完成申请，更关注：所选专业如何匹配个人能力与兴趣、学业如何规划才能产出高质量成果，以及这些成果如何进一步转化为未来的就业竞争力。
            </p>
          </div>

          <div className="bg-orange-50/50 p-4 rounded-[1.5rem] border border-orange-100/50 shadow-sm">
            <p className="text-slate-700 leading-6 text-sm text-justify">
              我们提供多国联申服务，覆盖英美、香港、新加坡、澳大利亚及其他主流目的地，围绕“专业匹配—学业规划—申请落地—职业发展”提供全链路支持。换句话说，我们会与学生共同完成职业方向梳理与路径定位：明确适合的细分赛道与岗位画像，倒推选校选专业、能力补齐与经历积累，让申请不止是拿到 offer，而是为未来职业发展服务。
            </p>
          </div>

          <div className="bg-orange-100 p-4 rounded-[1.2rem] text-slate-800 border border-orange-200 shadow-sm">
            <p className="text-xs leading-5">
              截至目前，YUSHI 已累计服务 <span className="text-[#ee9124] font-bold text-base">500+</span> 名学生，协助获得 <span className="text-[#ee9124] font-bold text-base">2000+</span> 份海外院校录取通知，学生去向遍布多个国家与地区。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm">
              <a href="/images/2.PNG" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img 
                src="/images/2.PNG" 
                alt="央视行业代表签约" 
                className="w-full h-full object-cover"
              /></a>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1 px-2 text-center border-t border-orange-100 pointer-events-none">
                <span className="text-[9px] font-bold text-[#ee9124]">央视行业代表签约</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm">
              <a href="/images/1.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img 
                src="/images/1.jpg" 
                alt="创始人“广东医科大学”及“今日头条”采访" 
                className="w-full h-full object-cover"
              /></a>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1 px-2 text-center border-t border-orange-100 pointer-events-none">
                <span className="text-[9px] font-bold text-[#ee9124]">“广东医科大学”及“今日头条”采访</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Service Process */}
      <section id="process" className={`scroll-reveal relative px-8 pt-10 pb-4 mb-2 ${isVisible['process'] ? 'visible' : ''}`}>
        <div className="absolute left-[-5%] top-[15%] w-full h-[80%] text-[#ee9124] opacity-[0.04] pointer-events-none -z-10 flex flex-col justify-around">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="flex justify-between items-center w-32 px-4" style={{marginLeft: `${Math.sin(i) * 20}px`}}>
                <div className="w-1.5 h-1.5 rounded-full border border-currentColor"></div>
                <div className="h-[1px] flex-1 bg-current mx-2 opacity-30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
             </div>
           ))}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#ee9124] font-bold text-lg">02</span>
          <h2 className="text-2xl font-bold text-slate-900 serif">服务流程</h2>
          <div className="h-px flex-1 bg-orange-100"></div>
        </div>
        
        <div className="space-y-4 relative">
          <div className="absolute left-4 top-1 bottom-1 w-[1px] bg-gradient-to-b from-[#ee9124] via-orange-200 to-transparent"></div>
          
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative pl-12 group">
              <div className="absolute left-0 w-8 h-8 bg-white border-2 border-[#ee9124] rounded-full flex items-center justify-center text-[#ee9124] text-[10px] font-bold z-10 shadow-sm transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-[15px] font-bold text-slate-900 mb-0 group-hover:text-[#ee9124] transition-colors">{step.title}</h3>
              <p className="text-slate-500 text-[12px] leading-snug">{step.description}</p>
              {step.number === "02" && (
                <div className="mt-3">
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                    <a href="/images/5.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/5.jpg"
                      alt="Core path visual"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                </div>
              )}
              {step.number === "03" && (
                <div className="mt-3 flex flex-col gap-0">
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                    <a href="/images/6.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/6.jpg"
                      alt="Submission effectiveness visual 1"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10">
                    <a href="/images/7.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/7.png"
                      alt="Submission effectiveness visual 2"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                </div>
              )}
              {step.number === "04" && (
                <div className="mt-3 flex flex-col gap-0">
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                    <a href="/images/8.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/8.jpg"
                      alt="Controlled rhythm visual 1"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10 bg-white">
                    <a href="/images/9.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/9.png"
                      alt="Controlled rhythm visual 2"
                      className="w-full h-full object-contain"
                    /></a>
                  </div>
                </div>
              )}
              {step.number === "05" && (
                <div className="mt-3 flex flex-col gap-0">
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                    <a href="/images/10.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/10.jpg"
                      alt="Visa and pre-departure visual 1"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10 bg-white">
                    <a href="/images/11.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/11.png"
                      alt="Visa and pre-departure visual 2"
                      className="w-full h-full object-contain"
                    /></a>
                  </div>
                </div>
              )}
              {step.number === "01" && (
                <div className="mt-3 flex flex-col gap-0">
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                    <a href="/images/3.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/3.png"
                      alt="Path planning visual 1"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10">
                    <a href="/images/4.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                      src="/images/4.jpg"
                      alt="Path planning visual 2"
                      className="w-full h-full object-cover"
                    /></a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 03. Career Support */}
      <section id="career" className={`scroll-reveal px-6 py-5 ${isVisible['career'] ? 'visible' : ''}`}>
        <div className="bg-[#ee9124] text-white p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
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
                  desc: "提供课程学习支持与方法指导；针对科研规划意向，提供选题建议、科研规划及进阶升学支持。"
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
                  {item.id === "(1)" && (
                    <div className="mt-3 flex flex-col gap-0">
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                        <a href="/images/12.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/12.png"
                          alt="Interview strategy visual 1"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                      <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10 bg-white">
                        <a href="/images/13.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/13.jpg"
                          alt="Interview strategy visual 2"
                          className="w-full h-full object-contain"
                        /></a>
                      </div>
                    </div>
                  )}
                  {item.id === "(2)" && (
                    <div className="mt-3 flex flex-col gap-0">
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                        <a href="/images/14.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/14.jpg"
                          alt="Employment competitiveness visual 1"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10">
                        <a href="/images/15.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/15.jpg"
                          alt="Employment competitiveness visual 2"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                    </div>
                  )}
                  {item.id === "(3)" && (
                    <div className="mt-3 flex flex-col gap-0">
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center">
                        <a href="/images/16.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/16.png"
                          alt="Industry sharing visual 1"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10">
                        <a href="/images/17.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/17.png"
                          alt="Industry sharing visual 2"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                    </div>
                  )}
                  {item.id === "(4)" && (
                    <div className="mt-3 flex flex-col gap-0">
                      <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center bg-white">
                        <a href="/images/18.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/18.jpg"
                          alt="Research planning visual 1"
                          className="w-full h-full object-contain"
                        /></a>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm scale-[0.8] origin-center -mt-10">
                        <a href="/images/19.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
                          src="/images/19.png"
                          alt="Research planning visual 2"
                          className="w-full h-full object-cover"
                        /></a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04. Mentors */}
      <section id="mentors" className={`scroll-reveal px-8 py-5 ${isVisible['mentors'] ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#ee9124] font-bold text-lg">03</span>
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
                <p className="text-[9px] text-[#ee9124] leading-tight font-medium bg-orange-50/80 px-1 py-0.5 rounded-md min-h-[32px] flex items-center">
                  {mentor.title}
                </p>
              </div>
              <div className="space-y-1 mt-0.5 flex-1 relative z-10">
                {mentor.specialties.slice(0, 2).map((spec, sIndex) => (
                  <div key={sIndex} className="text-[9px] text-slate-500 flex items-start gap-1 leading-tight">
                    <span className="mt-1 w-1 h-1 bg-[#ee9124] rounded-full flex-shrink-0 opacity-60"></span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Student Cases */}
      <section id="cases" className={`scroll-reveal relative mt-2 pb-10 ${isVisible['cases'] ? 'visible' : ''}`}>
        <div className="px-8 mb-6 flex items-center gap-3">
          <div className="w-1.5 h-8 orange-gradient rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900 serif">学员录取榜</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {STUDENT_CASES.map((student, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] snap-center bg-white p-6 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden h-full min-h-[220px]">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-[#ee9124] font-bold text-xl">{student.name}</h3>
                   <div className="w-10 h-1 bg-orange-100 rounded-full mt-3"></div>
                </div>
                <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                  {student.background}
                </p>
              </div>
              
              <div className="space-y-3">
                {student.offers.map((offer, oIndex) => (
                  <div key={oIndex} className="flex items-start gap-2">
                    <span className="text-[#ee9124] text-xs font-bold mt-[2px] leading-none shrink-0">›</span>
                    <span className="text-[13px] leading-snug text-slate-700 font-medium">
                      {offer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-[10px] text-slate-300 tracking-[0.2em] font-medium uppercase">
            SWIPE FOR MORE CASES
          </p>
        </div>
      </section>

      {/* 05. Offer Showcase */}
      <section id="offers" className="relative pb-10">
        <div className="px-8 mb-6 flex items-center gap-3">
          <div className="w-1.5 h-8 orange-gradient rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900 serif">部分Ofer榜单展示</h2>
        </div>
        <div className="px-8 grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off1.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off1.png"
              alt="Offer showcase 1"
              className="w-full h-full object-contain"
            /></a>
          </div>
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off2.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off2.png"
              alt="Offer showcase 2"
              className="w-full h-full object-contain"
            /></a>
          </div>
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off3.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off3.png"
              alt="Offer showcase 3"
              className="w-full h-full object-contain"
            /></a>
          </div>
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off4.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off4.png"
              alt="Offer showcase 4"
              className="w-full h-full object-contain"
            /></a>
          </div>
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off5.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off5.png"
              alt="Offer showcase 5"
              className="w-full h-full object-contain"
            /></a>
          </div>
          <div className="relative aspect-[3/4] rounded-xl border-2 border-orange-200 overflow-hidden shadow-sm bg-white">
            <a href="/images/off6.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img
              src="/images/off6.png"
              alt="Offer showcase 6"
              className="w-full h-full object-contain"
            /></a>
          </div>
        </div>
      </section>

      {/* 06. Footer */}
      <footer className="bg-[#fff3e6] px-8 pt-10 pb-12 flex flex-col items-center min-h-[20vh] relative border-t border-orange-100/50">
        <div className="text-center mb-6">
          <h3 className="text-[28px] font-bold text-[#ee9124] tracking-tight mb-2">
            YUSHI (博睿医智)
          </h3>
          <p className="text-[#8c5a2b] text-[13px] font-medium leading-relaxed max-w-[280px] mx-auto">
            以医学与心理学为核心<br />
            提供覆盖学术成长与职业发展的全程支持
          </p>
        </div>

        <div className="w-full h-px bg-[#ee9124]/10 mb-8 max-w-[320px]"></div>

        <div className="flex w-full max-w-[320px] items-stretch gap-6 mb-10">
          <div className="flex-1 text-left space-y-1.5">
            <h4 className="text-[#ee9124] font-bold text-[15px] mb-2">联系我们</h4>
            <div className="space-y-1 text-[#5c3e1e] font-bold text-[14px] leading-snug">
              <p>+86 13162611127 (中国)</p>
              <p>+44 07419735373 (英国)</p>
            </div>
          </div>
          
          <div className="w-[1px] bg-[#ee9124]/20 shrink-0"></div>

          <div className="flex-none text-center">
            <h4 className="text-[#ee9124] font-bold text-[15px] mb-2">官方微信</h4>
            <div className="w-16 h-16 bg-white p-1 rounded-lg shadow-sm border border-orange-100 overflow-hidden flex items-center justify-center mx-auto">
               <a href="/images/wechat.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full"><img 
                 src="/images/wechat.jpg" 
                 alt="QR Code" 
                 className="w-full h-full object-cover rounded-[4px]"
               /></a>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-[#8c5a2b] text-[10px] tracking-widest font-bold uppercase opacity-60">
            © 2026 YUSHI MEDICAL EDUCATION
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
