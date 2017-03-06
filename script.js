var popup = document.querySelector('.popup');
var btn = document.querySelector('.log-in');
var close = document.querySelector('.close');

btn.onclick = function() {
  popup.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

close.onclick = function() {
  popup.style.display = 'none';
  document.body.style.overflow = "";
};

var sidebar = document.querySelector('.sidebar');
var sidebarContent = document.querySelector('.sidebar-content');
var main = document.querySelector('.main');
var sidebarClassList = sidebar.classList;
var mainClassList = main.classList;
var previousScroll = 0;

window.onscroll = function() {
  scrollHandler();
};

function scrollHandler() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  var sidebarContentHeight = sidebarContent.offsetHeight;
  var isScrollToBottom = currentScroll > previousScroll;
  var isSidebarHideCondition = sidebarContentHeight < currentScroll;
  var isSidebarHided =  sidebarClassList.contains('hide');

  if (isSidebarHideCondition && isScrollToBottom) {
    if (!isSidebarHided) {
      mainClassList.add('wide');
      sidebarClassList.add('hide');
    }
  } else if (!isSidebarHideCondition && !isScrollToBottom ) {
    if (isSidebarHided) {
      console.log(previousScroll);
      console.log(currentScroll);
      mainClassList.remove('wide');
      sidebarClassList.remove('hide');

    }
  }

  previousScroll = currentScroll;
}
