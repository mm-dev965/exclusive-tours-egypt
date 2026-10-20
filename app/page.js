'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [lang, setLang] = useState('ar');
  const [activeCategory, setActiveCategory] = useState(null);

  const content = {
    ar: {
      brand: "EXCLUSIVE TOURS EGYPT",
      tagline: "تأسست عام 2006 | خبرة عريقة في السياحة الفاخرة",
      navAbout: "من نحن",
      navServices: "خدماتنا",
      navPortfolio: "عملاؤنا",
      navContact: "اتصل بنا",
      bookVip: "حجز VIP",
      heroTitle: "رحلات سياحية ملكية فاخرة للأفراد ورجال الأعمال",
      heroDesc: "نحن نتيح لك الاستمتاع بكل لحظة بينما نتولى نحن كافة تفاصيل رحلتك في مصر أو في أي مكان حول العالم بأعلى معايير الفخامة والخصوصية.",
      exploreBtn: "استكشف خدماتنا",
      contactBtn: "تواصل معنا",
      aboutTitle: "فلسفتنا وعراقتنا",
      aboutText1: "تأسست شركة Exclusive Tours Egypt عام 2006 لتكون العنوان الأول للفخامة والتميز في قطاع السياحة والسفر. نحن نؤمن بأن السفر هو تجربة شعورية وثقافية عميقة تُخلد في الذاكرة.",
      aboutText2: "بفضل خبرتنا الميدانية المباشرة، وفريقنا النخبوي من الخبراء، وموردينا المختارين بعناية فائقة، نضمن لعملائنا تقديم أفضل مستوى ممكن في كل تفاصيل الرحلة.",
      servicesTitle: "أقسام خدماتنا الفاخرة",
      servicesDesc: "اختر القسم المطلوب للاطلاع على تفاصيله ومعرض الصور الخاص به.",
      viewGallery: "استعراض معرض صور القسم",
      backToServices: "← العودة لجميع أقسام الخدمات",
      portfolioTitle: "شركاؤنا وعملاؤنا المميزون",
      portfolioDesc: "نعتز بفخر خدمتكم لكبرى المؤسسات والهيئات الدولية والدبلوماسية:",
      qrTitle: "تواصل معنا عبر واتساب والموقع",
      qrDesc: "امسح الكود أدناه بكاميرا هاتفك للتوجه الفوري للواتساب والموقع الرسمي.",
      contactTitle: "اتصل بنا",
      contactDesc: "فريقنا جاهز لتلبية كافة متطلباتكم الخاصة على مدار الساعة.",
      address: "مدينة نصر، القاهرة - مصر",
      phone: "00 202 24016489 / 00 202 24016478",
      fax: "00 202 24016491",
      footer: "© 2006 - 2026 Exclusive Tours Egypt. جميع الحقوق محفوظة."
    },
    en: {
      brand: "EXCLUSIVE TOURS EGYPT",
      tagline: "Founded in 2006 | Excellence in Luxury Travel",
      navAbout: "About Us",
      navServices: "Our Products",
      navPortfolio: "Portfolio",
      navContact: "Contact Us",
      bookVip: "Book VIP",
      heroTitle: "Seamless Luxury Travel for Leisure & Business",
      heroDesc: "We allow you to concentrate on enjoying, while we take care of every aspect of your trip in Egypt or anywhere in the world with absolute prestige.",
      exploreBtn: "Explore Services",
      contactBtn: "Get in Touch",
      aboutTitle: "Our Philosophy & Heritage",
      aboutText1: "Founded in 2006, Exclusive Tours Egypt is dedicated to creating and facilitating travel experiences that expand awareness and give each person a true sense of culture and history.",
      aboutText2: "Our first-hand knowledge, professional team of experts, and carefully chosen suppliers enable us to offer our customers the very best in every tailored detail.",
      servicesTitle: "Our Luxury Service Departments",
      servicesDesc: "Select any department to explore its royal gallery showcase and bespoke details.",
      viewGallery: "View Department Gallery",
      backToServices: "← Back to All Departments",
      portfolioTitle: "Trusted By Elite Partners",
      portfolioDesc: "Proud to serve international organizations, embassies, and leading corporations:",
      qrTitle: "Connect via WhatsApp & Website",
      qrDesc: "Scan the QR code below to instantly open WhatsApp and our official website.",
      contactTitle: "Connect With Us",
      contactDesc: "Let us shape your next extraordinary experience 24/7.",
      address: "Madinet Nasr, Cairo - Egypt",
      phone: "00 202 24016489 / 00 202 24016478",
      fax: "00 202 24016491",
      footer: "© 2006 - 2026 Exclusive Tours Egypt. All Rights Reserved."
    }
  }[lang];

  const categories = [
    {
      id: "flights",
      titleAr: "حجوزات الطيران والفنادق العالمية",
      titleEn: "Flight & Global Hotel Bookings",
      mainImage: "/image/flight.avif",
      descAr: "حجوزات طيران محلية وعالمية وفنادق فاخرة للأفراد والمجموعات بأرقى المعايير.",
      descEn: "Domestic & international airline ticketing and luxury hotel reservations.",
      images: [
        { src: "/image/flight.avif", sloganAr: "أفق جديد من الراحة في سماء السفر", sloganEn: "New horizons of comfort in the sky" },
        { src: "/image/flight_1.avif", sloganAr: "رحلات جوية مصممة خصيصاً لراحتكم", sloganEn: "Flights tailored for your utmost comfort" },
        { src: "/image/flight_2.avif", sloganAr: "تذاكر لكافة وجهات العالم بأرقى المعايير", sloganEn: "Ticketing to global destinations at elite standards" },
        { src: "/image/flight_3.avif", sloganAr: "بداية ملكية لكل رحلة تجوب العالم", sloganEn: "A royal beginning to every global journey" },
        { src: "/image/flight_4.avif", sloganAr: "عبور سلس وخدمة استثنائية فوق السحاب", sloganEn: "Seamless transit and exceptional service above clouds" },
        { src: "/image/flight_5.avif", sloganAr: "حجز فوري وخدمة عملاء على مدار الساعة", sloganEn: "Instant booking and 24/7 customer care" }
      ]
    },
    {
      id: "transfers",
      titleAr: "الاستقبال في المطار والتنقلات الفاخرة",
      titleEn: "Airport Meet & Assist / Luxury Transfers",
      mainImage: "/image/car chauffeur.avif",
      descAr: "خدمات استقبال VIP، تأجير سيارات فارهة، وسائقين خاصين على مدار الساعة.",
      descEn: "VIP airport reception, private car rentals, and professional chauffeur services.",
      images: [
        { src: "/image/car chauffeur.avif", sloganAr: "استقبال كبار الشخصيات بمستوى ملكي", sloganEn: "VIP reception at a royal level" },
        { src: "/image/car chauffeur_1.avif", sloganAr: "أسطول سيارات فارهة وسائقون محترفون", sloganEn: "Fleet of luxury cars & professional chauffeurs" },
        { src: "/image/car chauffeur_2.avif", sloganAr: "فخامة التنقل في كل شوارع العاصمة", sloganEn: "Luxurious transit across the capital" },
        { src: "/image/car chauffeur_3.avif", sloganAr: "خصوصية تامة وراحة مطلقة في طريقتك", sloganEn: "Absolute privacy and ultimate comfort" },
        { src: "/image/car chauffeur_4.avif", sloganAr: "خدمة ليموزين خاصة تلبي تطلعاتك", sloganEn: "Private limousine service matching your aspirations" },
        { src: "/image/car chauffeur_5.avif", sloganAr: "مرافقة دائمة لضمان انسيابية رحلتك", sloganEn: "Constant accompaniment for smooth travel" }
      ]
    },
    {
      id: "cruises",
      titleAr: "رحلات كروز النيل الملكية",
      titleEn: "Royal Nile Cruises",
      mainImage: "/image/nile cruise boat.avif",
      descAr: "إبحار ملكي في المجرى الخالد بين الأقصر وأسوان على متن أفاخر المراكب.",
      descEn: "Royal sailing along the immortal Nile between Luxor and Aswân aboard premier cruise ships.",
      images: [
        { src: "/image/nile cruise boat.avif", sloganAr: "إبحار هادئ بين حضارات التاريخ الخالد", sloganEn: "Peaceful sailing amidst immortal history" },
        { src: "/image/nile cruise boat_1.avif", sloganAr: "سحر النيل بعيون الملكية والفخامة", sloganEn: "The magic of the Nile through luxury eyes" },
        { src: "/image/nile cruise boat_2.avif", sloganAr: "أجواء استثنائية في قلب نهر التاريخ", sloganEn: "Exceptional vibes in the heart of history" },
        { src: "/image/nile cruise boat_3.avif", sloganAr: "ضيافة فاخرة على سطح أفاخر المراكب", sloganEn: "Luxury hospitality aboard premier boats" },
        { src: "/image/nile cruise boat_4.avif", sloganAr: "اكتشف جمال الأقصر وأسوان بأسلوب ملكي", sloganEn: "Discover Luxor and Aswan royally" },
        { src: "/image/nile cruise boat_5.avif", sloganAr: "لحظات لا تُنسى على صفحة مياه النيل", sloganEn: "Unforgettable moments on Nile waters" }
      ]
    },
    {
      id: "resorts",
      titleAr: "السفر الفاخر والمنتجعات الترفيهية",
      titleEn: "Luxury Travel & Resorts",
      mainImage: "/image/luxury travel resort.avif",
      descAr: "برامج سياحية مصممة خصيصاً لتناسب أرفع الأذواق في أرقى منتجعات العالم.",
      descEn: "Tailored specific itineraries and bespoke holiday packages worldwide.",
      images: [
        { src: "/image/luxury travel resort.avif", sloganAr: "منتجعات عالمية تحضن أحلامك", sloganEn: "Global resorts embracing your dreams" },
        { src: "/image/luxury travel resort_1.avif", sloganAr: "استجمام بلا حدود في أرقى الجزر", sloganEn: "Limitless relaxation in pristine islands" },
        { src: "/image/luxury travel resort_2.avif", sloganAr: "طبيعة خلابة وخدمات فندقية سبع نجوم", sloganEn: "Breathtaking nature & 7-star hospitality" },
        { src: "/image/luxury travel resort_3.avif", sloganAr: "عطلات مصممة لتجديد طاقتك وبريقك", sloganEn: "Holidays designed to renew your energy" },
        { src: "/image/luxury travel resort_4.avif", sloganAr: "وجهات حصرية تلهم الروح والوجدان", sloganEn: "Exclusive destinations inspiring the soul" },
        { src: "/image/luxury travel resort_5.avif", sloganAr: "رفاهية مطلقة في كل وجهة تختارها", sloganEn: "Absolute luxury in every chosen destination" }
      ]
    },
    {
      id: "mice",
      titleAr: "الفنادق الفاخرة وفعاليات (M.I.C.E)",
      titleEn: "Luxury Hotels & M.I.C.E Events",
      mainImage: "/image/hotels.avif",
      descAr: "إدارة متكاملة لفعاليات الشركات، المؤتمرات، وحجوزات الفنادق العالمية.",
      descEn: "Meetings, incentives, conferences, and exhibitions managed flawlessly.",
      images: [
        { src: "/image/hotels.avif", sloganAr: "إقامة ملكية في أرقى فنادق العالم", sloganEn: "Royal stay in world-class hotels" },
        { src: "/image/hotels_1.avif", sloganAr: "إدارة مؤتمرات وفعاليات عالمية باحترافية", sloganEn: "Professional global conference & event management" },
        { src: "/image/hotels_2.avif", sloganAr: "قاعات اجتماعات مجهزة بأحدث التقنيات", sloganEn: "State-of-the-art equipped meeting rooms" },
        { src: "/image/hotels_3.avif", sloganAr: "أجنحة فندقية تليق بالنخبة ورجال الأعمال", sloganEn: "Suites fitting elites and corporate leaders" },
        { src: "/image/hotels_4.avif", sloganAr: "تنظيم معارض وحفلات corporate مثالية", sloganEn: "Perfect corporate event organization" },
        { src: "/image/hotels_5.avif", sloganAr: "خدمات متكاملة لنجاح فعاليات شركتك", sloganEn: "Integrated services for corporate success" }
      ]
    },
    {
      id: "hajj",
      titleAr: "خدمات الحج والعمرة المباركة",
      titleEn: "Hajj & Omra Spiritual Journeys",
      mainImage: "/image/Kaaba Mecca.avif",
      descAr: "رحلات إيمانية مُنسقة بأعلى معايير الراحة والتميز بجوار الكعبة المشرفة.",
      descEn: "Spiritual journeys handled with utmost care near the Holy Kaaba.",
      images: [
        { src: "/image/Kaaba Mecca.avif", sloganAr: "رحلات إيمانية تحفها السكينة والخشوع", sloganEn: "Spiritual journeys surrounded by serenity" },
        { src: "/image/Kaaba Mecca_1.avif", sloganAr: "خدمات متكاملة بجوار الكعبة المشرفة", sloganEn: "Seamless services near the Holy Kaaba" },
        { src: "/image/Kaaba Mecca_2.avif", sloganAr: "رعاية فائقة وتنظيم راقٍ لضيوف الرحمن", sloganEn: "Superior care for the guests of Rahman" },
        { src: "/image/Kaaba Mecca_3.avif", sloganAr: "إقامة متميزة بالقرب من الحرمين الشريفين", sloganEn: "Distinguished stay near the two holy sanctuaries" },
        { src: "/image/Kaaba Mecca_4.avif", sloganAr: "رحلة روحانية تُؤدى بكل طمأنينة وراحة", sloganEn: "A spiritual journey performed in peace" },
        { src: "/image/Kaaba Mecca_5.avif", sloganAr: "ترتيبات مخصصة تضمن خشوعك وسلامتك", sloganEn: "Dedicated arrangements ensuring your comfort" }
      ]
    }
  ];

  const selectedCat = categories.find(c => c.id === activeCategory);

  return (
    <div className={`min-h-screen bg-[#0B1736] text-[#F3F4F6] font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#112244]/95 backdrop-blur-md border-b border-[#D4AF37]/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 sm:h-28 flex items-center justify-between">
          <a href="#contact" className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#030712] font-bold rounded-lg shadow-lg hover:opacity-90 transition text-xs sm:text-sm">
            {content.bookVip}
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#D4AF37] transition">{content.navAbout}</a>
            <a href="#services" onClick={() => setActiveCategory(null)} className="hover:text-[#D4AF37] transition">{content.navServices}</a>
            <a href="#portfolio" className="hover:text-[#D4AF37] transition">{content.navPortfolio}</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">{content.navContact}</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-[#D4AF37]/60 text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#030712] transition text-[10px] sm:text-xs font-bold"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <div className={`hidden sm:block ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <span className="text-sm md:text-base font-extrabold tracking-wider text-[#D4AF37] block">{content.brand}</span>
              <span className="text-[10px] text-gray-300 tracking-widest uppercase">{content.tagline}</span>
            </div>
            {/* Logo */}
            <div className="relative w-32 sm:w-44 h-16 sm:h-20 bg-transparent flex items-center justify-center flex-shrink-0">
              <Image 
                src="/exclusive_Tours.png" 
                alt="Logo" 
                fill 
                className="object-contain filter brightness-200 contrast-125 drop-shadow-[0_5px_15px_rgba(212,175,55,0.6)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-44 sm:pt-56 pb-24 sm:pb-36 px-4 sm:px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#112244] via-[#0B1736] to-[#0B1736]">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="text-[11vw] font-black tracking-widest text-[#D4AF37] uppercase">EXCLUSIVE</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block py-1.5 sm:py-2 px-4 sm:px-6 mb-6 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#AA7C11]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] sm:text-sm tracking-widest uppercase font-bold shadow-lg">
            ✨ EXCLUSIVE TOURS EGYPT • ESTABLISHED 2006 ✨
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            {content.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#030712] font-bold rounded-xl shadow-2xl hover:scale-105 transition transform text-sm sm:text-base">
              {content.exploreBtn}
            </a>
            <a href="#contact" className="px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D4AF37]/60 text-[#D4AF37] font-semibold rounded-xl hover:bg-[#D4AF37]/10 transition shadow-lg text-sm sm:text-base">
              {content.contactBtn}
            </a>
          </div>
        </div>
      </section>

      {/* 1. About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#112244]/50 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 sm:mb-8">{content.aboutTitle}</h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
            {content.aboutText1}
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {content.aboutText2}
          </p>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4">{content.servicesTitle}</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">{content.servicesDesc}</p>
        </div>

        {!activeCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-3xl bg-[#112244] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition overflow-hidden group shadow-xl cursor-pointer flex flex-col"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40">
                  <img src={cat.mainImage} alt={lang === 'ar' ? cat.titleAr : cat.titleEn} className="object-cover w-full h-full group-hover:scale-110 transition duration-700 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112244] via-transparent to-transparent"></div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition">
                      {lang === 'ar' ? cat.titleAr : cat.titleEn}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {lang === 'ar' ? cat.descAr : cat.descEn}
                    </p>
                  </div>
                  <button className="w-full py-3 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] font-bold rounded-xl group-hover:bg-[#D4AF37] group-hover:text-[#030712] transition text-sm">
                    {content.viewGallery}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#112244]/90 p-6 sm:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 pb-6 border-b border-[#D4AF37]/20 gap-4">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#D4AF37] text-center sm:text-right">
                {lang === 'ar' ? selectedCat.titleAr : selectedCat.titleEn}
              </h3>
              <button 
                onClick={() => setActiveCategory(null)}
                className="px-5 py-2.5 bg-[#D4AF37] text-[#030712] font-bold rounded-xl shadow-lg hover:opacity-90 transition text-xs sm:text-sm"
              >
                {content.backToServices}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCat.images.map((imgObj, idx) => (
                <div key={idx} className="rounded-2xl bg-[#0B1736] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition overflow-hidden group shadow-lg flex flex-col">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black/50">
                    <img src={imgObj.src} alt="Gallery item" className="object-cover w-full h-full group-hover:scale-110 transition duration-700 opacity-90" />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex items-center justify-center text-center bg-[#112244]">
                    <p className="text-gray-200 text-xs sm:text-sm font-semibold tracking-wide">
                      {lang === 'ar' ? imgObj.sloganAr : imgObj.sloganEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#112244]/70 border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">{content.portfolioTitle}</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">{content.portfolioDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            {[
              "League of Arab states", "Modon Ras El Hekma", "Alstom Transport (Monorail)", "Arab Sat (KSA)",
              "Ibn Sina Pharma", "Libyan Embassy in Egypt", "Saudi International Travel", "Fursan Group (KSA)",
              "VIP Platinum (UAE)", "Al Arif Sons (UAE)", "Biologix Pharma Lebanon", "DNATA (UAE)"
            ].map((client, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 bg-[#0B1736] border border-[#D4AF37]/20 rounded-xl text-gray-200 font-medium flex items-center justify-center text-center shadow-md">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4 sm:mb-6">{content.contactTitle}</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-12">{content.contactDesc}</p>
        
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 bg-[#112244] rounded-3xl border border-[#D4AF37]/40 shadow-2xl max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-inner mb-4">
            <img 
              src="/my_qr_code.png" 
              alt="ExclusiveTours QR Code" 
              className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#D4AF37] mb-2">{content.qrTitle}</h3>
          <p className="text-xs text-gray-300 mb-4 px-2">{content.qrDesc}</p>
          <a 
            href="https://wa.me/201070343555?text=مرحباً، أود الاستفسار عن رحلات ExclusiveTours" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-400 font-bold hover:underline text-xs sm:text-sm"
          >
            💬 WhatsApp: +20 107 034 3555
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm text-gray-200 mb-12">
          <div className="p-5 sm:p-6 bg-[#112244] rounded-2xl border border-[#D4AF37]/30 shadow-lg">
            <span className="block text-[#D4AF37] font-bold mb-2 text-sm sm:text-base">📍 {lang === 'ar' ? 'العنوان' : 'Address'}</span>
            {content.address}
          </div>
          <div className="p-5 sm:p-6 bg-[#112244] rounded-2xl border border-[#D4AF37]/30 shadow-lg">
            <span className="block text-[#D4AF37] font-bold mb-2 text-sm sm:text-base">📞 {lang === 'ar' ? 'التليفون والفاكس' : 'Telephone / Fax'}</span>
            <div dir="ltr" className="inline-block font-mono text-xs sm:text-sm whitespace-nowrap">
              00 202 24016489 / 00 202 24016478
            </div>
            <br />
            <div dir="ltr" className="inline-block font-mono text-xs sm:text-sm mt-1 whitespace-nowrap">
              Fax: 00 202 24016491
            </div>
          </div>
          <div className="p-5 sm:p-6 bg-[#112244] rounded-2xl border border-[#D4AF37]/30 shadow-lg">
            <span className="block text-[#D4AF37] font-bold mb-2 text-sm sm:text-base">✉️ {lang === 'ar' ? 'البريد الإلكتروني' : 'Email & Web'}</span>
            info@exclusivetoursegypt.net<br />www.exclusivetoursegypt.net
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 bg-[#070E22] border-t border-[#D4AF37]/20 text-center text-gray-400 text-[11px] sm:text-xs">
        <p>{content.footer}</p>
      </footer>
    </div>
  );
}