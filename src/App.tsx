import { useState } from 'react'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
      alt: "어린이 활동 1",
      caption: "즐거운 놀이 시간"
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
      alt: "어린이 활동 2",
      caption: "미술 활동"
    },
    {
      src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&q=80",
      alt: "어린이 활동 3",
      caption: "야외 활동"
    },
    {
      src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&q=80",
      alt: "어린이 활동 4",
      caption: "블록 놀이"
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80",
      alt: "어린이 활동 5",
      caption: "그림 그리기"
    },
    {
      src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80",
      alt: "어린이 활동 6",
      caption: "함께하는 시간"
    },
  ]

  return (
    <div id="top" className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden shadow-2xl bg-white dark:bg-[#1a160f]">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <img
            src={selectedImage}
            alt="확대 이미지"
            className="max-w-full max-h-[80vh] rounded-2xl object-contain"
          />
        </div>
      )}

      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between border-b border-[#e6e2db]/30">
        <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/20 bg-gradient-to-br from-primary to-primary-light">
          <span className="text-xl">🍎</span>
        </div>
        <h2 className="text-[#181611] dark:text-white text-base font-bold leading-tight tracking-tight flex-1 text-center font-display">
          수성애플트리어린이집
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="relative flex cursor-pointer items-center justify-center p-2 text-[#181611] dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-primary ring-2 ring-white"></span>
          </button>
        </div>
      </div>

      {/* Header Image & Welcome Message */}
      <div className="px-4 py-4">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <div
            className="bg-cover bg-center flex flex-col justify-end min-h-64 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80")`
            }}
          >
            <div className="p-6">
              <span className="inline-block bg-apple-green text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2">
                휴일·야간 어린이집
              </span>
              <p className="text-white text-2xl font-bold leading-tight drop-shadow-sm">
                대구광역시 수성구에서<br />
                사랑으로 아이들을 키웁니다
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display">주요 서비스</h3>
          <span className="text-primary text-xs font-semibold">더보기</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="#hours" className="flex flex-col gap-3 rounded-2xl border border-[#e6e2db] dark:border-[#3d382e] bg-white dark:bg-[#2c261c] p-4 transition-all hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <h4 className="text-[#181611] dark:text-white text-sm font-bold">운영시간</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-[11px] mt-0.5">휴일·야간 운영</p>
            </div>
          </a>
          <a href="#gallery" className="flex flex-col gap-3 rounded-2xl border border-[#e6e2db] dark:border-[#3d382e] bg-white dark:bg-[#2c261c] p-4 transition-all hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-emerald-600">
              <span className="material-symbols-outlined">photo_library</span>
            </div>
            <div>
              <h4 className="text-[#181611] dark:text-white text-sm font-bold">갤러리</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-[11px] mt-0.5">{galleryImages.length}장의 사진</p>
            </div>
          </a>
          <a
            href="https://icare.suseong.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl border border-[#e6e2db] dark:border-[#3d382e] bg-white dark:bg-[#2c261c] p-4 transition-all hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <span className="material-symbols-outlined">event_available</span>
            </div>
            <div>
              <h4 className="text-[#181611] dark:text-white text-sm font-bold">예약하기</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-[11px] mt-0.5">수성올인원</p>
            </div>
          </a>
          <a
            href="tel:053-745-0418"
            className="flex flex-col gap-3 rounded-2xl border border-[#e6e2db] dark:border-[#3d382e] bg-white dark:bg-[#2c261c] p-4 transition-all hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-500">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h4 className="text-[#181611] dark:text-white text-sm font-bold">문의하기</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-[11px] mt-0.5">053-745-0418</p>
            </div>
          </a>
        </div>
      </div>

      {/* Operating Hours */}
      <div id="hours" className="px-4 mt-8">
        <div className="bg-cream dark:bg-background-dark/40 rounded-2xl p-5 border border-primary/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">access_time</span>
            <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display">운영 시간</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex-shrink-0 w-36 bg-white dark:bg-[#2c261c] rounded-xl p-4 shadow-sm border border-[#e6e2db]/50">
              <div className="text-[24px] mb-1">🌞</div>
              <p className="text-[10px] font-bold text-primary uppercase">주말·공휴일</p>
              <p className="text-sm font-bold dark:text-white mt-1">09:00 ~ 18:00</p>
            </div>
            <div className="flex-shrink-0 w-36 bg-white dark:bg-[#2c261c] rounded-xl p-4 shadow-sm border border-[#e6e2db]/50">
              <div className="text-[24px] mb-1">🌙</div>
              <p className="text-[10px] font-bold text-primary uppercase">평일 야간</p>
              <p className="text-sm font-bold dark:text-white mt-1">19:30 ~ 24:00</p>
            </div>
            <div className="flex-shrink-0 w-36 bg-white dark:bg-[#2c261c] rounded-xl p-4 shadow-sm border border-[#e6e2db]/50">
              <div className="text-[24px] mb-1">👶</div>
              <p className="text-[10px] font-bold text-apple-green uppercase">대상</p>
              <p className="text-sm font-bold dark:text-white mt-1">5세 이하</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="px-4 py-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display">갤러리</h3>
          <span className="text-primary text-xs font-semibold">{galleryImages.length}장</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.src.replace('w=400', 'w=800'))}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <p className="text-white text-[10px] font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-3 rounded-xl border border-[#e6e2db] dark:border-[#3d382e] text-[#181611] dark:text-white font-semibold text-sm tracking-wide transition-all hover:bg-[#f5f5f5] dark:hover:bg-[#2c261c] active:scale-[0.98]">
          더 많은 사진 보기
        </button>
      </div>

      {/* Programs Section */}
      <div className="px-4 pb-8">
        <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display mb-4 px-1">보육 프로그램</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#2c261c] border border-[#e6e2db] dark:border-[#3d382e]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[#181611] dark:text-white text-sm font-bold leading-snug">기초 학습</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-xs mt-1">연령에 맞는 기초 학습 활동을 통해 인지 발달과 창의력을 키워갑니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#2c261c] border border-[#e6e2db] dark:border-[#3d382e]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[#181611] dark:text-white text-sm font-bold leading-snug">예술 활동</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-xs mt-1">미술, 음악, 신체 표현 등 다양한 예술 활동으로 감성과 표현력을 발달시킵니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#2c261c] border border-[#e6e2db] dark:border-[#3d382e]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[#181611] dark:text-white text-sm font-bold leading-snug">사회성 발달</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-xs mt-1">또래와의 상호작용을 통해 협동심과 배려심을 기르는 활동을 진행합니다.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#2c261c] border border-[#e6e2db] dark:border-[#3d382e]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-500">
              <span className="material-symbols-outlined">park</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[#181611] dark:text-white text-sm font-bold leading-snug">자연 체험</h4>
              <p className="text-[#181611]/60 dark:text-white/60 text-xs mt-1">계절에 맞는 자연 체험 활동으로 생태 감수성을 키워갑니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Steps */}
      <div id="info" className="px-4 pb-8">
        <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display mb-4 px-1">입소 안내</h3>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 border border-primary/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">1</div>
              <p className="text-sm dark:text-white"><strong>수성올인원</strong> 홈페이지 접속</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">2</div>
              <p className="text-sm dark:text-white">휴일·야간 어린이집 <strong>예약</strong></p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">3</div>
              <p className="text-sm dark:text-white">예약 시간에 맞춰 <strong>방문</strong></p>
            </div>
          </div>
          <a
            href="https://icare.suseong.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-6 py-3 rounded-xl bg-primary text-white font-bold text-sm text-center tracking-wide transition-all hover:bg-primary-light active:scale-[0.98]"
          >
            지금 예약하기
          </a>
        </div>
      </div>

      {/* Location Info */}
      <div className="px-4 pb-8">
        <h3 className="text-[#181611] dark:text-white text-lg font-bold font-display mb-4 px-1">오시는 길</h3>
        <div className="bg-white dark:bg-[#2c261c] rounded-2xl p-5 border border-[#e6e2db] dark:border-[#3d382e]">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-xs text-[#181611]/50 dark:text-white/50">주소</p>
                <p className="text-sm font-semibold dark:text-white">대구 수성구 화랑로2길 122</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <p className="text-xs text-[#181611]/50 dark:text-white/50">어린이집</p>
                <p className="text-sm font-semibold dark:text-white">053-745-0418</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">apartment</span>
              <div>
                <p className="text-xs text-[#181611]/50 dark:text-white/50">수성구청 여성가족과</p>
                <p className="text-sm font-semibold dark:text-white">053-666-2695</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">language</span>
              <div>
                <p className="text-xs text-[#181611]/50 dark:text-white/50">온라인 예약</p>
                <a
                  href="https://icare.suseong.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary"
                >
                  icare.suseong.kr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for Bottom Nav */}
      <div className="h-24"></div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-[#e6e2db]/30 px-6 py-3 pb-8 flex justify-between items-center">
        <a href="#top" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">홈</span>
        </a>
        <a href="#gallery" className="flex flex-col items-center gap-1 text-[#181611]/40 dark:text-white/40 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="text-[10px] font-medium">갤러리</span>
        </a>
        <a
          href="https://icare.suseong.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-12 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 ring-4 ring-white dark:ring-background-dark"
        >
          <span className="material-symbols-outlined !text-[32px]">edit_calendar</span>
        </a>
        <a href="#hours" className="flex flex-col items-center gap-1 text-[#181611]/40 dark:text-white/40 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">schedule</span>
          <span className="text-[10px] font-medium">운영시간</span>
        </a>
        <a href="#info" className="flex flex-col items-center gap-1 text-[#181611]/40 dark:text-white/40 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">info</span>
          <span className="text-[10px] font-medium">안내</span>
        </a>
      </div>
    </div>
  )
}

export default App
