"use client";

import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  // nav
  "About": { mn: "Танилцуулга" },
  "Work": { mn: "Ажлууд" },
  "Process": { mn: "Процесс" },
  "Contact": { mn: "Холбоо барих" },

  // header brand
  "Digital product development": { mn: "Дижитал бүтээгдэхүүн хөгжүүлэлт" },
  "Current brand mark is running on Yavii logo": { mn: "Одоогийн брэнд тэмдэг нь Yavii логогоор явж байна" },

  // hero
  "Product-centered studio": { mn: "Бүтээгдэхүүн төвтэй студи" },
  "Bold Core LLC builds brand, code, and product from one place.": { mn: "Bold Core LLC брэнд, код, бүтээгдэхүүнийг нэг дороос босгоно." },
  "Bold Core LLC turns ideas into real working products, not just pretty presentations. Mobile apps, backend systems, user flows, realtime operations, auth, payment logic, admin structure — every layer close to real use, built as one complete solution.": { mn: "Bold Core LLC нь санааг зөвхөн гоё танилцуулга биш, бодит ажилладаг бүтээгдэхүүн болгодог. Мобайл апп, backend систем, хэрэглэгчийн урсгал, реалтайм ажиллагаа, нэвтрэлт, төлбөрийн логик, удирдлагын бүтэц гээд хэрэглээнд ойр бүх давхаргыг нэг цул шийдэл болгон хөгжүүлж байна." },
  "View work": { mn: "Хийсэн ажлуудыг үзэх" },
  "Email us": { mn: "Имэйлээр холбогдох" },

  // metrics
  "Full experience building both mobile and backend cores of a product from scratch": { mn: "Нэг бүтээгдэхүүний мобайл болон backend хоёр цөмийг бүрэн босгосон туршлага" },
  "Development focused on message, notification, and state flow with realtime operations": { mn: "Мессеж, мэдэгдэл, төлөвийн урсгалтай ажиллагаанд төвлөрсөн хөгжүүлэлт" },
  "Products tailored to Mongolian user behavior, language, and usage context": { mn: "Монгол хэрэглэгчийн зан төлөв, хэл, хэрэглээний орчинд тааруулсан бүтээгдэхүүн" },

  // side notes
  "Current focus": { mn: "Одоогийн фокус" },
  "Not a fast MVP, but a product with logical structure that works long-term.": { mn: "Хурдан гарах MVP биш, урт хугацаанд ажиллах логик бүтэцтэй бүтээгдэхүүн хийх." },
  "Approach": { mn: "Хандлага" },
  "Interface, backend, data flow, user understanding — all viewed as one system.": { mn: "Интерфэйс, backend, өгөгдлийн урсгал, хэрэглэгчийн ойлголт бүгд нэг систем гэж хардаг." },
  "Brand foundation": { mn: "Брэндийн суурь" },
  "Currently using the Yavii logo as the company mark, with the option to expand into its own brand system at the next stage.": { mn: "Одоогоор Yavii логог компанийн тэмдэг болгон ашиглаж байгаа ч дараагийн шатанд өөрийн брэндийн систем рүү тэлэх боломжтой." },

  // about section
  "What we do": { mn: "Юу хийдэг вэ" },
  "From idea to user.": { mn: "Санаанаас эхлээд хэрэглэгч хүрэх хүртэл." },
  "Bold Core LLC doesn't just write code. It solves product flow, business logic, user interaction, operational reliability, and growth-ready architecture together.": { mn: "Bold Core LLC нь зөвхөн код бичихгүй. Бүтээгдэхүүний урсгал, бизнесийн логик, хэрэглэгчийн харилцаа, ажиллагааны найдвартай байдал, өсөхөд бэлэн архитектурыг хамтад нь шийддэг." },
  "Mobile product": { mn: "Мобайл бүтээгдэхүүн" },
  "Expo-based React Native apps — multi-screen flows, auth, state management, push notifications, multi-language support.": { mn: "Expo дээр суурилсан React Native апп, олон дэлгэцтэй урсгал, auth, төлөвийн удирдлага, push мэдэгдэл, олон хэлний дэмжлэгтэй хэрэглээ бүтээнэ." },
  "Backend system": { mn: "Backend систем" },
  "API, data structures, realtime socket, file upload, permission checks, rate limiting, cron jobs, notification pipeline — a clean backend core.": { mn: "API, өгөгдлийн бүтэц, realtime socket, файл upload, эрхийн шалгалт, rate limit, cron ажил, notification pipeline зэрэг арын цөмийг цэгцтэй босгоно." },
  "Product experience": { mn: "Бүтээгдэхүүний туршлага" },
  "Where users hesitate, which button they tap, what information should appear first — decided at the interface, copy, and sequence level.": { mn: "Хэрэглэгч хаана эргэлзэх, ямар товч дарах, ямар мэдээлэл эхэнд харагдах ёстойг интерфэйс, текст, дарааллын түвшинд бодож шийднэ." },

  // work section
  "Work done": { mn: "Хийсэн ажил" },
  "The main featured work right now is the Yavii ecosystem.": { mn: "Одоогоор онцлох гол ажил нь Yavii экосистем." },
  "Behind one app — not just screens, but a full system: driver-passenger interaction, trip flow, booking, confirmation, rating, wallet, and realtime messaging.": { mn: "Нэг аппын цаана зөвхөн дэлгэц биш, жолооч-зорчигчийн харилцаа, аяллын урсгал, захиалга, баталгаажуулалт, рейтинг, wallet, realtime мессежийн цогц систем ажиллаж байна." },
  "Featured project": { mn: "Онцлох төсөл" },
  "Yavii mobile app": { mn: "Yavii мобайл апп" },
  "Mobile": { mn: "Мобайл" },
  "A mobile app for intercity travel in Mongolia. Drivers create trips, passengers search for seats, send requests, get confirmations, and leave post-trip ratings systematically.": { mn: "Монголын хот хоорондын зорчих хэрэглээнд зориулсан мобайл апп. Жолооч аялал үүсгэж, зорчигч суудал хайж, хүсэлт илгээж, баталгаажуулалт авч, аяллын дараах үнэлгээг системтэйгээр өгөх боломжтой." },
  "Trip creation, search, seat selection, instant confirmation and request-based approval flow": { mn: "Аялал үүсгэх, хайх, суудал сонгох, шууд баталгаажуулах болон хүсэлтээр батлуулах урсгал" },
  "Google, Facebook, email login, verification, and password recovery logic": { mn: "Google, Facebook, имэйл нэвтрэлт, баталгаажуулалт, нууц үг сэргээх логик" },
  "Realtime chat, push notifications, two-way driver and passenger rating": { mn: "Realtime чат, push notification, жолооч ба зорчигчийн хоёр талт үнэлгээ" },
  "Wallet, subscription, car management, Mongolian and English translation structure": { mn: "Wallet, subscription, машин удирдлага, Монгол ба Англи хэлний орчуулгын бүтэц" },
  "System core": { mn: "Системийн цөм" },
  "Yavii backend platform": { mn: "Yavii backend платформ" },
  "Backend": { mn: "Backend" },
  "A backend layer built on Fastify and Prisma. It serves as the foundation for all business logic, data flow, notifications, websocket, uploads, auth, rate limiting, config, and static data.": { mn: "Fastify болон Prisma дээр босгосон backend давхарга. Энэ нь аппын бүх бизнес логик, өгөгдлийн урсгал, notification, websocket, upload, auth, rate limit, тохиргоо болон статик мэдээллийн суурь болж ажиллана." },
  "Trip, request, car, user, wallet, message, rating endpoint structure": { mn: "Аялал, хүсэлт, машин, хэрэглэгч, wallet, мессеж, үнэлгээний endpoint бүтэц" },
  "Realtime communication foundation using WebSocket and push fallback": { mn: "WebSocket болон push fallback ашигласан реалтайм харилцааны үндэс" },
  "Cron jobs, upload storage, security middleware, rate limiting — operational safety foundation": { mn: "Cron job, upload storage, security middleware, rate limiting зэрэг ажиллагааны суурь хамгаалалт" },
  "App-store-ready clean API and development structure": { mn: "Апп дэлгүүр рүү гаргах түвшний цэгцтэй API ба хөгжүүлэлтийн бүтэц" },

  // process section
  "How we work": { mn: "Ажиллах арга" },
  "Not fast, but in the right order.": { mn: "Хурдан биш, зөв дарааллаар." },
  "A good landing page or nice app screen alone isn't enough. How logic flows inside, what decisions the user makes, how the system scales later — all calculated from the start.": { mn: "Сайн landing page эсвэл аппын гоё дэлгэц дангаараа хангалтгүй. Дотор нь ямар логик урсах, хэрэглэгч ямар шийдвэр гаргах, дараа нь систем яаж тэлэхийг эхнээс нь тооцож хийдэг." },
  "Step 1": { mn: "Алхам 1" },
  "Define the problem precisely": { mn: "Асуудлыг яг тодорхойлох" },
  "Who it's for, exactly when users will use this product, and what core flows must work first.": { mn: "Хэнд зориулж байгаа, хэрэглэгч яг ямар мөчид энэ бүтээгдэхүүнийг хэрэглэх вэ, ямар үндсэн урсгал эхлээд ажиллах ёстойг тогтооно." },
  "Step 2": { mn: "Алхам 2" },
  "Build the core logic": { mn: "Цөм логикийг босгох" },
  "Auth, data, API, inter-screen flow, realtime state, permissions, and core business rules — reliably centered and built.": { mn: "Auth, өгөгдөл, API, дэлгэц хоорондын урсгал, realtime төлөв, permission, үндсэн бизнес дүрмийг найдвартайгаар төвлөрүүлж байгуулна." },
  "Step 3": { mn: "Алхам 3" },
  "Refine the experience": { mn: "Туршлагыг сайжруулах" },
  "Polish the UI, clean up copy, reduce user hesitation points, and prepare for deployment and next-stage growth.": { mn: "UI өнгөлөх, текстээ цэгцлэх, хэрэглэгчийн эргэлзэх цэгийг багасгах, deployment болон дараагийн өсөлтөд бэлдэх ажлыг дараагийн шатанд гүйцээнэ." },

  // contact section
  "Get in touch": { mn: "Холбоо барих" },
  "Ready to discuss a new product, site, app, or backend system.": { mn: "Шинэ бүтээгдэхүүн, сайт, апп эсвэл backend систем ярилцахад бэлэн." },
  "If you want to structure your idea properly or improve an existing system, reach out. Bold Core LLC works on real solutions that combine code, logic, and user experience.": { mn: "Хэрэв та санаагаа зөв бүтэцтэйгээр гаргах, эсвэл байгаа системээ илүү чанартай болгохыг хүсэж байвал холбогдоно уу. Bold Core LLC нь код, логик, хэрэглэгчийн туршлагыг нэгтгэсэн бодит шийдэл дээр ажиллана." },
  "Send proposals and collaboration requests by email": { mn: "Имэйлээр санал, хамтын ажиллагааны хүсэлт илгээнэ үү" },

  // footer
  "Current version uses Yavii logo as brand mark.": { mn: "Одоогийн таних тэмдэгт Yavii логог ашиглаж буй хувилбар." },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("boldcore_lang");
    if (saved === "mn" || saved === "en") setLanguage(saved);
  }, []);

  function switchLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem("boldcore_lang", lang);
  }

  function t(key) {
    if (language === "en") return key;
    return translations[key]?.mn ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
