$(document).ready(function() {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('.mi-menu').addClass('mi-menu__scroll');
        } else {
            $('.mi-menu').removeClass('mi-menu__scroll');
        }
    });
});

document.getElementById("defaultOpen").click();

function openService(evt, serviceName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}