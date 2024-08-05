!function(e){"use strict";var t={},a=e(window),o=e(document),s=(e("body"),e(".countdown")),n=e(".counter"),i=e(".skill-bar");e.fn.exists=function(){return this.length>0},t.preloader=function(){e("#load").fadeOut(),e("#pre-loader").delay(0).fadeOut("slow")},t.dropdownmenu=function(){e(".navbar").exists()&&e(".dropdown-menu a.dropdown-toggle").on("click",function(t){return e(this).next().hasClass("show")||e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),e(this).next(".dropdown-menu").toggleClass("show"),e(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(t){e(".dropdown-submenu .show").removeClass("show")}),!1})},t.menuaddclass=function(){e(".top-menu").on("click",function(){e(".nav-menu").toggleClass("open-menu")})},t.menuToggle=function(){e(".menu-overlay-offcanvas .navbar-nav .nav-link").on("click",function(){e(this).next(".dropdown-menu").slideToggle()})},t.offcanvasSidebar=function(){e(".sidebar-btn").on("click",function(){e("body").addClass("mobile-offcanvas")}),e(".offcanvas-sidebar .btn-close, .offcanvas-backdrop").on("click",function(){e("body").removeClass("mobile-offcanvas")})},t.isSticky=function(){var t=e(window),a=0,o=e(".header"),s=o.outerHeight();t.scroll(function(){var n=t.scrollTop();n>=s?o.addClass("is-sticky"):(o.removeClass("is-sticky"),o.removeClass("sticky-show")),o.hasClass("is-sticky")&&(n<a?o.addClass("sticky-show"):o.removeClass("sticky-show")),e("#lastscrolltop").text("LastscrollTop: "+a),a=n,e("#windowtop").text("scrollTop: "+n)})},t.Tooltip=function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)})},t.Popover=function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)})},t.counters=function(){jQuery(".counter").length>0&&n.each(function(){var t=e(this);t.appear(function(){t.find(".timer").countTo()})})},t.customAccordion=function(){e(".pgs-accordion > .accordion-item.is-active").children(".accordion-content").slideDown(),e(".pgs-accordion > .accordion-item").click(function(){e(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-content").slideUp(),e(this).toggleClass("is-active").children(".accordion-content").slideToggle("ease-out")})},t.carousel=function(){var t=jQuery("div.owl-carousel");t.length>0&&t.each(function(){var t=e(this),a=t.data("items")?t.data("items"):1,o=!!t.attr("data-center")&&t.data("center"),s=!t.attr("data-loop")||t.data("loop"),n=!!t.data("nav-dots")&&t.data("nav-dots"),i=!!t.data("nav-arrow")&&t.data("nav-arrow"),r=!t.attr("data-autoplay")||t.data("autoplay"),c=t.attr("data-autospeed")?t.data("autospeed"):5e3,l=t.attr("data-smartspeed")?t.data("smartspeed"):1e3,d=!!t.data("autoheight")&&t.data("autoheight"),u=t.attr("data-space")?t.data("space"):30;t.attr("data-animateOut")&&t.data("animateOut"),e(this).owlCarousel({loop:s,center:o,items:a,responsive:{0:{items:t.data("xx-items")?t.data("xx-items"):1},575:{items:t.data("xs-items")?t.data("xs-items"):1},768:{items:t.data("sm-items")?t.data("sm-items"):2},992:{items:t.data("md-items")?t.data("md-items"):3},1200:{items:t.data("lg-items")?t.data("lg-items"):4},1400:{items:a}},dots:n,autoplayTimeout:c,smartSpeed:l,autoHeight:d,margin:u,nav:i,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],autoplay:r,autoplayHoverPause:!0})})},t.slickslider=function(){e(".slider-for").exists()&&(e(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,asNavFor:".slider-nav"}),e(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!0,focusOnSelect:!0}))},t.countdownTimer=function(){s.exists()&&s.downCount({date:"09/14/2025 12:00:00",offset:-4})},t.historySwiperSlider=function(){new Swiper(".swiper-container",{loop:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:4,paginationClickable:!0,spaceBetween:30,breakpoints:{1199:{slidesPerView:3,spaceBetween:30},767:{slidesPerView:2,spaceBetween:30},480:{slidesPerView:1,spaceBetween:10}}})},t.progressBar=function(){i.exists()&&i.each(function(t,a){var o=e(this),s=o.attr("data-percent")||"100",n=o.attr("data-delay")||"100",i=o.attr("data-type")||"%";o.hasClass("progress-animated")||o.css({width:"0%"});var r=function(){o.animate({width:s+"%"},"easeInOutCirc").addClass("progress-animated"),o.delay(n).append('<span class="progress-type animated fadeIn">'+i+'</span><span class="progress-number animated fadeIn">'+s+"</span>")};e(a).appear(function(){setTimeout(function(){r()},n)})})},t.goToTop=function(){var t=document.querySelector(".back-to-top path"),a=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=a+" "+a,t.style.strokeDashoffset=a,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear";var o=function(){var o=e(window).scrollTop(),s=e(document).height()-e(window).height();t.style.strokeDashoffset=a-o*a/s};o(),e(window).scroll(o),jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>300?jQuery(".back-to-top").addClass("active-progress"):jQuery(".back-to-top").removeClass("active-progress")}),jQuery(".back-to-top").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},600),!1})},t.searchbar=function(){e("#search").exists()&&(e('a[href="#search"]').on("click",function(t){t.preventDefault(),e("#search").addClass("open"),e('#search > form > input[type="search"]').focus()}),e("#search, #search button.close").on("click keyup",function(t){(t.target==this||"close"==t.target.className||27==t.keyCode)&&e(this).removeClass("open")}),e("form").submit(function(e){return e.preventDefault(),!1}))},t.mediaPopups=function(){if(e(".popup-single").exists()||e(".popup-gallery").exists()||e(".modal-onload").exists()||e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){e(".popup-single").exists()&&e(".popup-single").magnificPopup({type:"image"}),e(".popup-gallery").exists()&&e(".popup-gallery").magnificPopup({delegate:"a.portfolio-img",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()&&e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});var t=e(".modal-onload");if(t.length>0){e(".popup-modal").magnificPopup({type:"inline"}),e(document).on("click",".popup-modal-dismiss",function(t){t.preventDefault(),e.magnificPopup.close()});var a=t.attr("data-target");setTimeout(function(){e.magnificPopup.open({items:{src:a},type:"inline",mainClass:"mfp-no-margins mfp-fade",closeBtnInside:!0,fixedContentPos:!0,removalDelay:500},0)},1500)}}},gsap.set(".awards-wrapper img.gsap-img-animation, .case-studies-wrapper img.gsap-img-animation",{yPercent:-50,xPercent:-50});let r;gsap.utils.toArray(".awards-item, .case-studies-item").forEach(e=>{let t=e.querySelector(".gsap-img-animation"),a,o,s=e=>{a(e.clientX),o(e.clientY)},n=()=>document.addEventListener("mousemove",s),i=()=>document.removeEventListener("mousemove",s),c=gsap.to(t,{autoAlpha:1,ease:"none",paused:!0,onReverseComplete:i});e.addEventListener("mouseenter",e=>{c.play(),n(),r&&gsap.set(t,{x:gsap.getProperty(r,"x"),y:gsap.getProperty(r,"y")}),r=t,a=gsap.quickTo(t,"x",{duration:.5,ease:"power3"}),o=gsap.quickTo(t,"y",{duration:.5,ease:"power3"}),s(e)}),e.addEventListener("mouseleave",()=>c.reverse())});let c=document.querySelector("#cursor"),l=c.querySelector(".cursor__circle"),d={x:-100,y:-100},u={x:0,y:0},p=e=>{d.x=e.clientX,d.y=e.clientY};window.addEventListener("mousemove",p);let f=()=>{var e,t,a,o;let s=Math.round(d.x-u.x),n=Math.round(d.y-u.y);u.x+=.1*s,u.y+=.1*n;let i=(e=s,180*Math.atan2(t=n,e)/Math.PI),r=(a=s,Math.min(Math.sqrt(Math.pow(a,2)+Math.pow(o=n,2))/1500,.15)),p="translate3d("+u.x+"px ,"+u.y+"px, 0)";c.style.transform=p,l.style.transform="rotate("+i+"deg)"+("scale("+(1+r)+", ")+(1-r)+")"};function m(){f(),requestAnimationFrame(m)}requestAnimationFrame(m);let v=document.querySelectorAll("[data-cursor-type]"),g=document.querySelectorAll("a:not(.cursor-style)");v.forEach(e=>{e.addEventListener("mouseenter",function(){let e=this.getAttribute("data-cursor-type");c.classList.add(e);let t=this.getAttribute("data-custom-text");null!==t?c.setAttribute("data-cursor-text",t):c.setAttribute("data-cursor-text","Drag")}),e.addEventListener("mouseleave",function(){let e=this.getAttribute("data-cursor-type");c.classList.remove(e),c.removeAttribute("data-cursor-text")})}),g.forEach(e=>{e.addEventListener("mouseenter",function(){c.classList.add("cursor-link")}),e.addEventListener("mouseleave",function(){c.classList.remove("cursor-link")})}),t.shuffle=function(){if(e(".my-shuffle-container").exists()){var t=window.Shuffle,a=document.querySelector(".my-shuffle-container"),o=a.querySelector(".my-sizer-element"),s=new t(a,{itemSelector:".grid-item",sizer:o,speed:700,columnThreshold:0});jQuery(document).ready(function(){jQuery(".btn-filter").on("click",function(){var e=jQuery(this).attr("data-group");"all"!=e?s.filter([e]):s.filter()}),e(".filters-group .btn-filter").on("click",function(){e(".filters-group .btn-filter").removeClass("active"),e(this).addClass("active")})})}},t.qty=function(){e(document).ready(function(){e(".minus").click(function(){var t=e(this).parent().find("input"),a=parseInt(t.val())-1;return a=a<1?1:a,t.val(a),t.change(),!1}),e(".plus").click(function(){var t=e(this).parent().find("input");return t.val(parseInt(t.val())+1),t.change(),!1})})},t.buttonEffect=function(){e.attractHover(".btn-effect",{proximity:70,magnetism:3})},t.portfolioFancy=function(){var t=e(".portfolio-fancy-wrapper .portfolio-item");e(t).hover(function(){e(t).removeClass("active"),e(this).addClass("active")})},t.workspaces=function(){e(".workspaces-inner .workspaces-content").each(function(){var t=e(this);t.children(".workspaces-info-item").hover(function(){t.find(".workspaces-info-item").removeClass("item-active"),e(this).addClass("item-active");var a=e(this).data("tab");e(this).parents(".workspaces-inner").find(".workspaces-image-item").removeClass("image-active"),e("#"+a).addClass("image-active")})})},t.stickyFooter=function(){var t=e(".sticky-footer").height();e(".site-content").css("margin-bottom",t+"px")},t.jarallaxBG=function(){e(".jarallax").exists()&&jarallax(document.querySelectorAll(".jarallax"),{speed:.2})},e(window).resize(function(){t.stickyFooter()}),a.on("load",function(){t.preloader(),t.shuffle(),t.customAccordion(),t.progressBar(),t.stickyFooter()}),o.ready(function(){t.counters(),t.slickslider(),t.dropdownmenu(),t.menuaddclass(),t.menuToggle(),t.offcanvasSidebar(),t.isSticky(),t.goToTop(),t.countdownTimer(),t.Tooltip(),t.Popover(),t.historySwiperSlider(),t.searchbar(),t.rangesliders(),t.mediaPopups(),t.carousel(),t.qty(),t.buttonEffect(),t.portfolioFancy(),t.workspaces(),t.jarallaxBG()})}(jQuery);