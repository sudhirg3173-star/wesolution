AOS.init({
      duration:1000,
      once:true
    });

    // COUNTER ANIMATION

    const counters=document.querySelectorAll('.counter');

    counters.forEach(counter=>{

      const updateCounter=()=>{

        const target=+counter.getAttribute('data-target');
        const count=+counter.innerText;
        const increment=target/100;

        if(count<target){
          counter.innerText=Math.ceil(count+increment);
          setTimeout(updateCounter,20);
        }else{
          counter.innerText=target;
        }
      };

      updateCounter();
    });

    // NAVBAR SCROLL EFFECT

    const navbar=document.getElementById('navbar');

    window.addEventListener('scroll',()=>{

      if(window.scrollY>50){

        navbar.classList.add('nav-scrolled');

        document.querySelector('.nav-text').classList.remove('text-white');
        document.querySelector('.nav-text').classList.add('text-black');

        document.querySelectorAll('.nav-links a').forEach(link=>{
          link.classList.remove('text-white');
          link.classList.add('text-black');
        });

      }else{

        navbar.classList.remove('nav-scrolled');

        document.querySelector('.nav-text').classList.remove('text-black');
        document.querySelector('.nav-text').classList.add('text-white');

        document.querySelectorAll('.nav-links a').forEach(link=>{
          link.classList.remove('text-black');
          link.classList.add('text-white');
        });

      }

    });

    // HERO IMAGE SLIDER

    const slides=document.querySelectorAll('.slide');
    const dots=document.querySelectorAll('.dot');

    let currentSlide=0;

    function showSlide(index){

      slides.forEach(slide=>slide.classList.remove('active'));
      dots.forEach(dot=>dot.classList.remove('active'));

      slides[index].classList.add('active');
      dots[index].classList.add('active');

    }

    function nextSlide(){

      currentSlide++;

      if(currentSlide>=slides.length){
        currentSlide=0;
      }

      showSlide(currentSlide);
    }

    setInterval(nextSlide,4000);

    dots.forEach((dot,index)=>{

      dot.addEventListener('click',()=>{

        currentSlide=index;
        showSlide(currentSlide);

      });

    });