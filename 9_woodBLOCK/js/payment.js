function changeMainImage(src) {
  // 메인 이미지 변경
  document.getElementById("mainImage").src = src;

  // 모든 썸네일에서 'selected' 클래스 제거
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('selected');
  });

  // 클릭된 썸네일에 'selected' 클래스 추가
  const clickedThumbnail = Array.from(thumbnails).find(img => img.src === src);
  clickedThumbnail.classList.add('selected');
}
function toggleText(id) {
  const content = document.getElementById(id);
  content.classList.toggle("visible");

  const toggleBox = content.previousElementSibling;
  const plusIcon = toggleBox.querySelector(".plus");

  // 토글 상태에 맞춰 플러스/마이너스 아이콘 텍스트 변경
  if (content.classList.contains("visible")) {
    plusIcon.textContent = "−"; // 내용이 보일 때는 "−"
  } else {
    plusIcon.textContent = "+"; // 내용이 안 보일 때는 "+"
  }
}

const unitPriceElement = document.getElementById("unit-price");
const priceText = unitPriceElement.innerText.replace(/[^0-9]/g, '');
const unitPrice = parseInt(priceText);


function changeQty(amount) {
  const qtyElement = document.getElementById("quantity");
  const totalPriceElement = document.getElementById("total-price");
  const unitPriceElement = document.getElementById("unit-price");

  const priceText = unitPriceElement.innerText.replace(/[^0-9]/g, '');
  const unitPrice = parseInt(priceText);

  let currentQty = parseInt(qtyElement.innerText);
  let newQty = currentQty + amount;

  if (newQty < 1) newQty = 1;

  qtyElement.innerText = newQty;
  const totalPrice = unitPrice * newQty;
  totalPriceElement.innerText = `${totalPrice.toLocaleString()}원 (${newQty})`;
}


