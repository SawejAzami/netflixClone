
  // movie image section
    let movieImg=[
      {        img:"./image/you.jpeg"
      },
      {        img:"./image/wednesday.jpeg" 
      },
      {        img:"./image/troll.jpeg"
      }, 
      {        img:"./image/silence.jpeg"
      }, 
      {        img:"./image/scrooge.jpeg" 
      }, 
      {        img:"./image/schoolForGodEvil.jpeg"
      },
      {        img:"./image/movie1.jpeg"
      },
       {        img:"./image/leo.jpeg"
      },
       {        img:"./image/bloodhound.jpeg"
      },
       {
        img:"./image/moneyHiest.jpeg"
      },
    ]

    let movie=document.getElementById("movieCard")

   function displayCard(index){
      let div=document.createElement('div')
      let img=document.createElement('img')
      img.setAttribute("src",`${index.img}`);
      div.setAttribute("class","card");

    div.appendChild(img);
    movie.appendChild(div)  
   }

   movieImg.forEach((el)=>displayCard(el))


// Question answer section

   let quest = [
     {
       id: 1,
       title: "What is Netflix?",
       para: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
     },
     {
       id: 2,
       title: "How much does Netflix cost?",
       para: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
     },
     {
       id: 3,
       title: "Where can I watch?",
       para: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
     },
     {
       id: 4,
       title: "How do I cancel?",
       para: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
     },
     {
       id: 5,
       title: "What can I watch on Netflix?",
       para: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
     },
     {
       id: 6,
       title: "Is Netflix good for kids?",
       para: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
     },
   ];

   let askTag=document.getElementById("ask")
   function renderQuestion(elm){
    let div=document.createElement("div")
    div.setAttribute("class", "question");
    div.setAttribute("id", `${elm.id}`);
    div.innerHTML = `
    <div class="title" id=${elm.id}>
          <p id=${elm.id}>${elm.title}</p>
          <div id=${elm.id} class="sign">+</div>
    </div>     
    `;
    askTag.appendChild(div);
   }
   quest.forEach((el)=>renderQuestion(el))


askTag.addEventListener("click",(e)=>{
  // console.log(e.target.id)
  let id = e.target.id;
  let container=askTag.children[id-1];
  let sign=container.querySelector(".sign");
  console.log(sign)

  let p = document.createElement("p");
  if (sign.innerHTML == "+") {
    p.setAttribute("class", "paragraph");
    p.innerHTML = `
          ${quest[id-1].para}
        `;
    container.appendChild(p);
    sign.innerHTML = "×";
  }
  else{
    sign.innerHTML = "+";
    container.children[1].remove();
  }

})













  //  <p class="paragraph" >
  //       ${elm.para}
  //       </p>

  
  //  askTag.addEventListener("click",(el)=>{
  //    let parent = el.target.parentNode;
  //    let id=parent.className;
  //    let para="";
  //    for(let i=0;i<quest.length;i++){
  //     if(i==id-1){
  //       para=quest[i].para;
  //       break;
  //     }
  //    }
  //    console.log(parent);
  //    console.log(parent.children[0]);

  //    if(id){
  //     let p = document.createElement("p");
  //     p.setAttribute("class", "paragraph");
  //     p.innerHTML = `
  //     ${para}
  //   `;
  //     parent.appendChild(p);
  //    }
     
  //  }
  // )

  // ***********************
//   askTag.addEventListener("click",(el)=>{
//      let parent = el.target.parentNode;
//     let child = parent.children[1];
//     let child2 = parent.children[0].children[1];
//     console.log(child2);
//      let id = parent.className;
//     if(id){
//       if (!child) {
//         addPara(el);
//         child2.innerHTML = `×`;
//       } else {
//        child.remove()
//        child2.innerHTML = `+`;
//       }
//     }
      
//   })

//   function addPara(el){
//     let parent = el.target.parentNode;
//      let id=parent.className;
//      let para="";
//      for(let i=0;i<quest.length;i++){
//       if(i==id-1){
//         para=quest[i].para;
//         break;
//       }
//      }
//      if(id){
//       let p = document.createElement("p");
//       p.setAttribute("class", "paragraph");
//       p.innerHTML = `
//       ${para}
//     `;
//       parent.appendChild(p);
//      }
//   }
// // ****************
  





  // function for input click event

  document.querySelectorAll(".email").forEach((input)=>{
     
    let label = input.previousElementSibling;
    input.addEventListener("click", (e) => {
      e.preventDefault();
      label.style.top = "8px";
      label.style.fontSize = "16px";
      label.style.left = "15px";
    });

     input.addEventListener("blur", () => {
       if (input.value.trim() === "") {
        
         label.style.fontSize = "20px";
         label.style.left = "5px"; 
         label.style.top = "12px"; 
       
       }
     });
  })

  
  
