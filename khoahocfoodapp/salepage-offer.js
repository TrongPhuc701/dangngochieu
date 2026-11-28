/* Offer confirmed by owner: 599,000 VND through 31 Dec 2026 (Vietnam time), then 799,000 VND. */
(() => {
  const deadline = Date.parse('2027-01-01T00:00:00+07:00');
  let lastExpired;
  function renderOffer() {
    const remaining = Math.max(0, deadline - Date.now());
    const seconds = Math.floor(remaining / 1000);
    const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
    for (const [unit, value] of Object.entries(values)) {
      document.querySelectorAll(`[data-clock="${unit}"]`).forEach(el => { el.textContent = String(value).padStart(2, '0'); });
    }
    const expired = remaining === 0;
    if (expired === lastExpired) return;
    lastExpired = expired;
    const set = (selector, text) => document.querySelectorAll(selector).forEach(el => { el.textContent = text; });
    set('[data-offer-short]', expired ? '799K' : '599K');
    set('[data-offer-inline], [data-offer-price]', expired ? '799.000đ' : '599.000đ');
    set('[data-offer-tag]', expired ? 'HỌC PHÍ HIỆN TẠI' : 'ƯU ĐÃI ĐẾN HẾT 31/12/2026');
    set('[data-offer-label]', expired ? 'ƯU ĐÃI 599K ĐÃ KẾT THÚC' : 'THỜI GIAN CÒN LẠI CỦA ƯU ĐÃI');
    set('[data-offer-next]', expired ? 'Học phí 799.000đ áp dụng từ 01/01/2027.' : 'Từ 01/01/2027, mức phí tăng lên 799.000đ.');
    set('[data-offer-ribbon]', expired ? 'Kiến Trúc Menu Food App 5 Flow+ · HỌC PHÍ 799.000Đ' : 'HỌC PHÍ ƯU ĐÃI 599.000Đ · ĐẾN HẾT 31.12.2026');
    document.querySelectorAll('[data-offer-saving], .deal-timer').forEach(el => { el.hidden = expired; });
    document.title = `Kiến Trúc Menu Food App 5 Flow+ — ${expired ? '799K' : 'Ưu đãi 599K'} | Đặng Ngọc Hiếu`;
  }
  renderOffer();
  window.setInterval(renderOffer, 1000);
})();
