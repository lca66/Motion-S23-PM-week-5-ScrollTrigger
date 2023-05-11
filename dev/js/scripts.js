import{gsap}from"gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set("#section-2 p span",{alpha:0.25});

// let tl = gsap.timeline({delay:1});

// tl.from(".box", {duration:1, x:0, ease:"power4.out"})
// .to(".box", {duration:1, y:0, ease:"power4.out"})

// gsap.to(".section-1", {duration:1, y:10});

gsap.from("#section-1 h1",{duration:1, scrollTrigger:{
    trigger:"#section-1",
    toggleActions:"play pause resume reverse",
    start:"top 0%",
    end:"bottom 25%",
    markers:true
    // (property) startColor: white,
    // (property) endColor: string
    // markers: {startColor: "--black", endColor: "--black"}
    },
    scale:.75, 
    font-opacity: 70%,
    y:"-=800%"});

// gsap.from("#section-1 h1",{duration:3, scrollTrigger:{
//     trigger:"#section-1",
//     toggleActions:"play pause resume reverse",
//     start:"top 80%",
//     end:"bottom 20%",
//     markers:true
//     },
//     scale:.5,});



 gsap.from("#section-1 p",{duration:1, scrollTrigger:{
    trigger:"#section-1",
    toggleActions:"play pause resume reverse",
    start:"top 0%",
    end:"bottom 25%",
    markers:true
    },
    scale:.75,   
    y:"-=700%"});   

// tl.from(".section-1", {duration:1, x:20, ease:"power4.out"})
// .to(".section-1", {duration:1, y:20, ease:"power4.out"})

gsap.from("#box",{duration:2, scrollTrigger:{
    trigger:"#box",
    toggleActions:"play pause resume reverse",
    start:"top 60%",
    end:"bottom 40%",
    markers:true
    },
    scale:.7, 
    x:"=100%"});

gsap.from("#section-2",{duration:1, scrollTrigger:{
    trigger:"#section-2",
    toggleActions:"play pause resume reverse",
    start:"top 40%",
    end:"bottom 60%",
    markers:true
    },
    scale:.95, 
    x:"=100%"});

gsap.from("#box2",{duration:2, scrollTrigger:{
    trigger:"#box2",
    toggleActions:"play pause resume reverse",
    start:"bottom 70%",
    end:"top 30%",
    markers:true
    },
    scale:.7, 
    x:"=100%"});

gsap.from("#section-3",{duration:1, scrollTrigger:{
    trigger:"#section-3",
    toggleActions:"play pause resume reverse",
    start:"top 40%",
    end:"bottom 60%",
    markers:true
    },
    scale:.95, 
    x:"=100%"});

gsap.from("#box3",{duration:2, scrollTrigger:{
    trigger:"#box3",
    toggleActions:"play pause resume reverse",
    start:"bottom 80%",
    end:"top 20%",
    markers:true
    },
    scale:.7, 
    x:"=100%"});

gsap.from("#section-4",{duration:1, scrollTrigger:{
    trigger:"#section-4",
    toggleActions:"play pause resume reverse",
    start:"top 60%",
    end:"bottom 40%",
    markers:true
    },
    scale:.95, 
    x:"=100%"});