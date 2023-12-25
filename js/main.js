var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}
const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 4000);
$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});
$("figure").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);