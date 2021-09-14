function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
  
  const obj = document.getElementById("value");
  animateValue(obj, 0, 7, 500);

  const obj2 = document.getElementById("value2");
  animateValue(obj2, 0, 32, 1000);

  const obj3 = document.getElementById("value3");
  animateValue(obj3, 0, 25, 1500);

  const obj4 = document.getElementById("value4");
  animateValue(obj4, 0, 99, 2500);
