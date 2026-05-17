/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  ShoppingBag,
  MessageCircle,
  Menu,
  X,
  PlayCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// Image constants - mapping provided paths
const IMAGES = {
  main: "/images/main_hero.png",
  inside: "/images/inside_dorayaki_detail.png",
  package: "/images/individual_single_new.png",
  gift: "/images/package_individual_10.png",
  label: "/images/nutrition_label.jpg",
  videoFallback: "/images/main_hero.png",
  processVideo: "/video/process_video.mp4"
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Close info panel when clicking escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsInfoOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-brand-brown-light/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown-light/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-brand-brown-dark">
            도쿄베이커리 <span className="text-brand-accent text-sm font-sans uppercase tracking-widest ml-2">Dorayaki</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#intro" className="text-sm font-medium hover:text-brand-accent transition-colors">제품 소개</a>
            <a href="#process" className="text-sm font-medium hover:text-brand-accent transition-colors">제작과정</a>
            <a href="#gallery" className="text-sm font-medium hover:text-brand-accent transition-colors">갤러리</a>
            <a href="#order" className="text-sm font-medium hover:text-brand-accent transition-colors">주문 안내</a>
            <a href="#contact" className="text-sm font-medium hover:text-brand-accent transition-colors">연락처</a>
            <a href="#order" className="bg-brand-brown-dark text-brand-cream px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all duration-300 shadow-md">
              주문하기
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <motion.div 
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-brand-cream border-b border-brand-brown-light/10"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#intro" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">제품 소개</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">제작과정</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">갤러리</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">주문 안내</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">연락처</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="bg-brand-brown-dark text-brand-cream py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <ShoppingBag size={20} /> 주문하기
            </a>
          </div>
        </motion.div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Static Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.main} 
            className="w-full h-full object-cover grayscale-[0.2]" 
            alt="Handmade Dorayaki" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-brown-dark/30 backdrop-brightness-75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-cream/80 text-sm md:text-lg tracking-[0.3em] font-medium uppercase mb-6"
          >
            Artisanal Dessert Studio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif text-brand-cream leading-[1.1] mb-8"
          >
            정성껏 구워낸<br />
            <span className="italic">달콤한 위로</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a href="#order" className="bg-brand-cream text-brand-brown-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-accent hover:text-brand-cream transition-all duration-300 shadow-xl group">
              주문하기 <ChevronRight className="inline-block transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#intro" className="bg-transparent border border-brand-cream/50 text-brand-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-cream/10 transition-all duration-300 backdrop-blur-sm">
              브랜드 스토리
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cream/10 to-brand-cream"></div>
        </motion.div>
      </section>

      {/* 2. Process Section (Video) */}
      <section id="process" className="py-24 bg-brand-brown-dark text-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-brand-accent font-bold tracking-widest text-xs uppercase block mb-4">Behind the Scenes</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">도라야끼 탄생과정!</h2>
            <p className="text-xl md:text-2xl text-brand-cream/80 font-light mb-12">
              도라야끼는 먹기 편한 빵이지만<br/>만드는 과정은 간단하지 않아요!
            </p>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="relative w-4/5 mx-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-brand-brown-dark/50 group mb-16"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              controls
              className="w-full h-full object-cover"
              poster={IMAGES.main}
            >
              <source src={IMAGES.processVideo} type="video/mp4" />
              <source src="/video/steam.mp4" type="video/mp4" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-brand-cream/40 text-sm mb-4">영상을 불러오는 중이거나 파일을 찾을 수 없습니다.</p>
                <p className="text-xs text-brand-cream/20 italic">왼쪽 아래 '파일 보관함'을 통해 영상을 업로드해 주세요.</p>
              </div>
            </video>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 leading-relaxed">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="space-y-6">
              <p className="text-lg text-brand-cream/90 font-light">
                우선 동으로 만든 <strong className="text-brand-accent">가마솥</strong>에서 팥을 푹 익힙니다. 
                그냥 끓이는 게 아니고 계속 저어주어야 해요..🫠
              </p>
              <p className="text-brand-cream/60">
                한국에서는 동으로 만든 가마솥을 구할 수 없어서 일본에서 직접 가져왔답니다! 
                일반 냄비나 솥에서 끓인 것과는 다른 특별한 맛을 느끼실 수 있어요. 
                부드러우면서도 팥의 촉감이 살아있는 듯한 <strong className="text-brand-cream">고슬고슬하고 목넘김이 좋은 맛</strong>입니다.💙
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-6">
              <p className="text-lg text-brand-cream/90 font-light">
                빵도 맛있어야 진짜 제대로 된 도라야끼죠! 
                촉촉하면서도 부드러운 맛에 은은한 단맛이 느껴지는 <strong>도쿄베이커리만의 특별한 빵</strong>이 만들어집니다.
              </p>
              <p className="text-brand-cream/60">
                절대 뻑뻑하지 않아요. 팥과 어우러져 완벽한 맛을 만듭니다. 😉<br/><br/>
                다 만들어진 도라야끼는 <strong className="text-brand-accent">검수과정</strong>을 거쳐 정성껏 포장됩니다~ ^^ 
                오늘 주문하시면 내일 바로 받아보실 수 있어요.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Intro Section */}
      <section id="intro" className="py-24 md:py-40 bg-brand-cream px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            {...fadeIn}
            className="flex-1 space-y-8"
          >
            <span className="text-brand-accent font-semibold tracking-widest text-sm uppercase block">Premium Quality</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              매일 아침 직접 삶는<br />팥의 깊은 풍미
            </h2>
            <p className="text-lg md:text-xl text-brand-brown-light leading-relaxed font-light">
              저희는 인공 감미료를 사용하지 않습니다. <br />
              엄선된 100% 팥을 4시간 동안 정성껏 정갈하게 삶아내어, 
              자연스러운 단맛과 부드러운 식감을 완성합니다.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-bold text-lg mb-2">천연 원재료</h4>
                <p className="text-sm text-brand-brown-light">최고급 밀가루와 유정란, 비정제 원당만을 고집합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">정성어린 수제</h4>
                <p className="text-sm text-brand-brown-light">주문 즉시 구워내어 가장 신선한 상태로 전달합니다.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-1">
              <img 
                src={IMAGES.inside} 
                alt="Inside Dorayaki" 
                className="w-full h-[500px] object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-brand-brown-light/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* 4. Gallery Section */}
      <section id="gallery" className="py-32 bg-brand-brown-dark text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl font-serif mb-6">시각으로 담아낸<br /> <span className="italic">미학</span></h2>
              <p className="text-brand-cream/60 max-w-md">맛은 물론, 선물하는 분의 품격까지 생각했습니다. 정갈한 마무리와 정성스러운 패키징을 확인해보세요.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Instagram className="w-10 h-10 text-brand-accent cursor-pointer hover:scale-110 transition-transform" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden"
            >
              <img src={IMAGES.main} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Main" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-brand-accent text-xs font-bold tracking-widest mb-2 block uppercase">Standard</span>
                <h3 className="text-2xl font-serif">클래식 도라야끼</h3>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden md:-translate-y-12"
            >
              <img src={IMAGES.inside} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Inside" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-brand-accent text-xs font-bold tracking-widest mb-2 block uppercase">Rich Texture</span>
                <h3 className="text-2xl font-serif">단팥 소의 미학</h3>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden"
            >
              <img src={IMAGES.gift} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gift Set" referrerPolicy="no-referrer" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-brand-accent text-xs font-bold tracking-widest mb-2 block uppercase">Luxury Gift</span>
                <h3 className="text-2xl font-serif">10개입 선물 세트</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Order Section */}
      <section id="order" className="py-24 bg-brand-cream px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic text-brand-brown-dark">메뉴 및 주문안내</h2>
            <div className="w-12 h-1 bg-brand-accent mx-auto mb-8"></div>
            <p className="text-brand-brown-light font-medium">검수 과정을 거쳐 정성껏 포장됩니다. <br/>오늘 주문하시면 내일 받아보실 수 있어요!</p>
            <p className="text-brand-accent font-bold mt-4 text-xl">주문은 전화로 해주세요. 😉</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Menu Card 1 */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-brown-light/10 text-center">
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden">
                <img src={IMAGES.package} alt="Individual" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">도라야끼 1개</h3>
              <p className="text-brand-accent text-2xl font-serif font-bold">1,200원</p>
            </motion.div>

            {/* Menu Card 2 */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-brand-brown-dark p-8 rounded-3xl shadow-xl text-center text-brand-cream scale-105 relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Best Value</div>
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden">
                <img src={IMAGES.gift} alt="Gift Set" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">선물용 세트 (10개입)</h3>
              <p className="text-brand-accent text-2xl font-serif font-bold">12,000원</p>
            </motion.div>

            {/* Detail Info Card */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-brown-light/10 text-center flex flex-col items-center justify-center cursor-pointer hover:border-brand-accent transition-colors group"
              onClick={() => setIsInfoOpen(true)}
            >
              <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">상세 제품 정보</h3>
              <p className="text-brand-brown-light text-sm mb-6">원재료명, 영양성분 및 주의사항</p>
              <button className="text-brand-accent font-bold text-sm flex items-center gap-1">
                상세보기 <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Detailed Info Overlay/Modal */}
          {isInfoOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div 
                className="absolute inset-0 bg-brand-brown-dark/60 backdrop-blur-sm" 
                onClick={() => setIsInfoOpen(false)}
              ></div>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative bg-brand-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl border border-brand-brown-light/20 p-8 md:p-12"
              >
                <button 
                  onClick={() => setIsInfoOpen(false)}
                  className="absolute top-6 right-6 p-2 text-brand-brown-light hover:text-brand-brown-dark transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="space-y-12">
                  {/* Header */}
                  <div className="text-center border-b border-brand-brown-light/10 pb-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-brown-dark mb-2">제품 상세 정보</h2>
                    <p className="text-brand-accent font-bold">도라야끼 (Dorayaki)</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm">
                    {/* Column 1: Base & Ingredients */}
                    <div className="space-y-8">
                      <section>
                        <h4 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-brand-accent rounded-full inline-block"></span>
                          기본 정보
                        </h4>
                        <div className="space-y-2 border-l border-brand-brown-light/10 pl-4 py-1">
                          <div className="flex"><span className="w-24 text-brand-brown-light">제품명</span><span>도라야끼</span></div>
                          <div className="flex"><span className="w-24 text-brand-brown-light">식품의 유형</span><span>양과자</span></div>
                          <div className="flex"><span className="w-24 text-brand-brown-light">내용량</span><span>80g</span></div>
                          <div className="flex"><span className="w-24 text-brand-brown-light">소비기한</span><span>후면 하단 별도 표기일까지</span></div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-brand-accent rounded-full inline-block"></span>
                          원재료명
                        </h4>
                        <p className="bg-white/50 p-4 rounded-xl leading-relaxed text-brand-brown-dark/80">
                          팥앙금 33.3% [팥(중국산), 설탕, 물엿, 발다이스(중국산)], 
                          한천분말, 소금, 밀가루(밀:미국산), 계란(국산), 설탕, 물엿, 채종유(캐나다산), 
                          미림(맛술), 양조간장(대두), 산도조절제, 베이킹파우더(산도조절제, 전분)
                        </p>
                        <div className="mt-4 p-4 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                          <p className="text-brand-accent font-bold text-xs mb-1">알레르기 유발물질</p>
                          <p className="font-semibold">계란, 밀, 대두 함유</p>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-brand-accent rounded-full inline-block"></span>
                          제조 및 판매원
                        </h4>
                        <div className="space-y-3">
                          <p className="font-bold">도쿄베이커리</p>
                          <p className="text-brand-brown-light leading-snug">경기도 남양주시 늘을1로 16번안길 3-20<br/>(호평동 631-17)</p>
                          <div className="text-xs space-y-1 text-brand-brown-light/70 bg-white/30 p-3 rounded-lg">
                            <p>품목보고번호: 20030332765-13</p>
                            <p>영업허가번호: 경기 남양주 291호</p>
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Column 2: Nutrition & Precautions */}
                    <div className="space-y-8">
                      <section>
                        <h4 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-brand-accent rounded-full inline-block"></span>
                          영양정보
                        </h4>
                        <div className="bg-white rounded-2xl p-6 border border-brand-brown-light/10 shadow-inner">
                          <div className="flex justify-between items-end mb-6">
                            <div>
                              <p className="text-xs text-brand-brown-light mb-1">총 내용량 80g</p>
                              <p className="text-2xl font-serif font-black text-brand-brown-dark">220 kcal</p>
                            </div>
                            <p className="text-[10px] text-brand-brown-light/60 text-right italic leading-tight">
                              1일 영양성분 기준치에 대한 비율(%)은<br/>2,000kcal 기준이므로 개인마다 다를 수 있습니다.
                            </p>
                          </div>

                          <div className="space-y-3 text-xs">
                            {[
                              { label: "탄수화물", value: "44g", percent: "11%" },
                              { label: "당류", value: "12.3g", percent: "-" },
                              { label: "단백질", value: "4.9g", percent: "7%" },
                              { label: "지방", value: "2.4g", percent: "4%" },
                              { label: "포화지방", value: "0.86g", percent: "5%" },
                              { label: "트랜스지방", value: "0g", percent: "-" },
                              { label: "콜레스테롤", value: "12.3mg", percent: "3%" },
                              { label: "나트륨", value: "242mg", percent: "10%" },
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between py-1.5 border-b border-brand-brown-light/5 last:border-0">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-brand-brown-light">{item.label}</span>
                                  <span className="font-bold">{item.value}</span>
                                </div>
                                <span className={item.percent === "-" ? "text-brand-brown-light/40" : "font-bold text-brand-accent"}>
                                  {item.percent}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
                          <span className="w-1 h-3 bg-brand-accent rounded-full inline-block"></span>
                          보관 및 주의사항
                        </h4>
                        <ul className="text-xs space-y-3 text-brand-brown-light leading-relaxed list-disc pl-4">
                          <li>직사광선 및 고온 다습한 곳을 피해 상온 보관하시기 바랍니다.</li>
                          <li>기도가 막히지 않도록 천천히 꼭꼭 씹어 드시기 바랍니다.</li>
                          <li className="font-bold text-brand-accent">동봉한 탈산소제는 드시지 마시기 바랍니다.</li>
                          <li>본 제품은 탈산소제를 사용함으로써 봉지 내 산소를 제거하여 미생물 번식을 막아 장기보존이 가능케 한 특수포장입니다.</li>
                        </ul>
                      </section>

                      <section className="bg-brand-brown-dark text-brand-cream p-5 rounded-2xl">
                        <div className="flex justify-between items-center mb-3">
                          <h5 className="text-[10px] font-bold tracking-widest uppercase opacity-60">Customer Service</h5>
                          <Phone size={14} className="text-brand-accent" />
                        </div>
                        <p className="text-xl font-bold mb-1">031-576-0738</p>
                        <p className="text-[10px] opacity-40">본 제품은 소비자분쟁해결 기준에 의거하여 교환 또는 보상을 받으실 수 있습니다.</p>
                      </section>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-brand-brown-light/50 border-t border-brand-brown-light/10 pt-8 uppercase tracking-tighter">
                    <div>신고: 국번없이 1399</div>
                    <div>반품 및 교환: 본사 및 구입처</div>
                    <div>택배서비스: (031) 576-0738</div>
                    <div>포장재질: 나일론+PP</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-10 bg-white rounded-3xl shadow-sm border border-brand-brown-light/5 hover:shadow-xl transition-shadow cursor-default">
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">카카오톡 채널</h3>
              <p className="text-brand-brown-light mb-8 font-light">카카오톡 플러스친구 '도쿄베이커리'를 추가해 주세요. 채널을 통해 간편하게 예약 및 문의가 가능합니다.</p>
              <a href="https://pf.kakao.com/_sTXkn" target="_blank" rel="noreferrer" className="text-brand-accent font-bold flex items-center gap-2 group">
                채널 바로가기 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-10 bg-brand-brown-dark text-brand-cream rounded-3xl shadow-xl cursor-default">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                <Phone size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">전화 예약 (가장 빠름)</h3>
              <p className="text-brand-cream/60 mb-8 font-light">단체 주문이나 당일 픽업 문의는 유선 상담이 가장 확실합니다. 정성을 다해 준비하겠습니다.</p>
              <a href="tel:010-3780-1860" className="bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg inline-block">
                010-3780-1860
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <footer id="contact" className="bg-brand-cream border-t border-brand-brown-light/10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-serif font-bold mb-6">도쿄베이커리</h2>
              <p className="text-sm text-brand-brown-light leading-loose">
                우리는 맛있는 도라야끼를 넘어,<br />
                당신의 소중한 순간에 빛나는<br />
                조각이 되고 싶습니다.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">Location</h4>
              <div className="flex items-start gap-3 text-brand-brown-dark">
                <MapPin size={18} className="shrink-0 mt-1 text-brand-accent" />
                <p className="text-sm font-bold leading-relaxed">경기 남양주시 늘을1로16번안길 3-20<br />호평동 631-17 1층 (우)12149</p>
              </div>
              <div className="bg-brand-brown-light/10 p-3 rounded-xl ml-7 border border-brand-brown-light/5 w-fit">
                <p className="text-xs font-semibold text-brand-brown-dark/80 whitespace-nowrap">평내호평역 1번 출구에서 308m (도보 7분)</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">Contact</h4>
              <div className="flex items-center gap-3 text-brand-brown-dark">
                <Phone size={18} className="text-brand-accent" />
                <p className="text-sm font-bold">010-3780-1860</p>
              </div>
              <div className="flex items-center gap-3 text-brand-brown-dark">
                <Instagram size={18} className="text-brand-accent" />
                <p className="text-sm font-bold">@tokyo_bakery_dorayaki</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-accent">Hours</h4>
              <div className="flex items-start gap-3 text-brand-brown-dark">
                <Clock size={18} className="shrink-0 mt-1 text-brand-accent" />
                <div className="text-sm font-bold">
                  <p>월 - 토: 09:00 - 19:00</p>
                  <p className="text-brand-accent font-black mt-1">매주 일요일 정기 휴무</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-brand-brown-light/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase tracking-widest text-brand-brown-light opacity-50">
              © 2024 TOKYO BAKERY STUDIO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-brand-brown-light opacity-50">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
