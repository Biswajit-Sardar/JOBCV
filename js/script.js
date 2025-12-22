// Stop animation temporarily on arrow click
function scrollRow(row, direction) {
  // Besi kore move korar jonno 1000 ba tar besi dite paren
  const scrollAmount = 1000; 

  row.style.animationPlayState = 'paused'; 
  
  row.scrollBy({ 
    left: direction * scrollAmount, 
    behavior: 'smooth' 
  });

  // Resume animation with a bit more delay to let the smooth scroll finish
  setTimeout(() => {
    row.style.animationPlayState = 'running';
  }, 800); // 0.8s delay dile movement ta bhalo bujha jay
}

// Row 1 setup
const row1 = document.getElementById('cvRow1');
document.querySelector('.left-arrow1').addEventListener('click', () => scrollRow(row1, -1));
document.querySelector('.right-arrow1').addEventListener('click', () => scrollRow(row1, 1));

// Row 2 setup
const row2 = document.getElementById('cvRow2');
document.querySelector('.left-arrow2').addEventListener('click', () => scrollRow(row2, -1));
document.querySelector('.right-arrow2').addEventListener('click', () => scrollRow(row2, 1));