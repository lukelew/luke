var windowHeight = window.document.documentElement.clientHeight;
console.log(windowHeight);

// document.getElementById('stage1_intro').height(windowHeight);
document.querySelector('#stage1_intro').style.height = windowHeight + 'px';
