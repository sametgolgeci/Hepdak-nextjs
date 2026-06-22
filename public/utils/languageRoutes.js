export const trToEn = {
  "/": "/en",

  // Kurumsal
  "/misyon-vizyon": "/en/mission-vision",
  "/stratejik-plan": "/en/strategic-plan",
  "/amac-ve-faaliyetler": "/en/objective-activities",
  "/kalite-politikasi": "/en/quality-policy",
  "/kurul-ve-komisyonlar": "/en/boards-commissions",
  "/uye-listesi": "/en/member-list",
  "/degerlendirici-listesi": "/en/evaluator-list",
  "/yetkilendirme-ve-uluslararasi-taninirlik": "/en/registry-letters",

  // Akreditasyon
  "/belgeler": "/en/documents",
  "/ucretler": "/en/documents", // İngilizce fees PDF ise bunu ayrıca ele alacağız
  "/akredite-edilen-kurumlar": "/en/accredited-institutions",
  "/ilgili-kuruluslar": "/en/related-organizations",

  // Çalıştaylar
  "/kurumlar-icin-egitim-calistayi": "/en/training-workshop-for-institutions",
  "/degerlendirici-egitimi-calistayi": "/en/evaluator-training-workshop",

  // Raporlar
  "/hepdak-genel-kurulu-ve-raporlari": "/en/general-assembly-and-reports",
  "/tematik-analiz-raporu": "/en/thematic-analysis-reports",
  "/faaliyet-raporlari": "/en/activity-reports",
  "/paydas-gorusleri": "/en/stakeholder-opinion-reports",
  "/izleme-raporlari": "/en/monitoring-reports",
  "/surekli-iyilestirme-raporlari": "/en/continuous-improvement-reports",

  // Toplantılar
  "/heak-toplantilari": "/en/heak-meetings",
  "/danisma-kurulu-toplantilari": "/en/advisory-board-meetings",
  "/komisyon-toplantilari": "/en/commission-meetings",
  "/uluslararasi-toplantilar": "/en/international-meetings",
  "/paydas-toplantilari": "/en/stakeholder-meetings",

  // Eğitimler
  "/webinar": "/en/webinar",
  "/sempozyumlar-kongreler": "/en/symposiums",
  "/egitim-etkinlikleri": "/en/educational-activities",
  "/iyi-uygulama-ornekleri": "/en/good-practice-examples",

  // Yayınlar
  "/hepdak-sunumlari": "/en/hepdak-presentations",
  "/kaynaklar": "/en/resources",
  "/sempozyum-kongre-kitaplari": "/en/symposium-books",

  // İletişim
  "/iletisim": "/en/contact",
};

export const enToTr = Object.fromEntries(
  Object.entries(trToEn).map(([tr, en]) => [en, tr])
);