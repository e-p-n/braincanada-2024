 
// MORE/LESS BUTTONS

function showHide(id, lang) {
    let more = "more >";
    let less = "less >";
    if (lang === "fr") {
        more = "Plus >";
        less = "Moins >";
    }
    let message = document.getElementById(id);
    
    let button = document.getElementById(id+'-button');
    let pic = document.getElementById(id+'-pic');
    let box = document.getElementById(id+'-box');
    let boxClass, buttonClass;
    if (id=="ceo") {
        boxClass = "pp-column-extended";
        buttonClass = " pp-padding"
    } else {
        boxClass = "pp-column-extended pp-margin"
        buttonClass = "";
    }
    if (message.className.indexOf("pp-show") == -1) {
        message.className += " pp-show"
        pic.className += " pp-pic-pos"
        box.className = box.className.replace("pp-column", boxClass);
        button.className += buttonClass
        button.innerHTML = less;
    } else {
        message.className = message.className.replace(" pp-show", "");
        box.className = box.className.replace(boxClass, "pp-column");
        button.className = button.className.replace(buttonClass, "");
        pic.className = pic.className.replace(" pp-pic-pos", "");
        button.innerHTML = more;
        url = location.href.split('#')[0];
        url += '#' + id + '-box';
        location.href = url;
    }

}

// ANIMATION FOR MULTIPLE ITEMS

const animObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('anim-padding');
            entry.target.classList.add('animate');
            console.log(entry.target.classList);
        }
        
    })

}
)

const eiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let liTags = entry.target.children;

            for(let i=0; i < liTags.length; i++) {
                liTags[i].classList.add("animate");

            }
  
        }
    })
})

const ipObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let infoBox = document.getElementById("info-box");
        if(entry.isIntersecting) {
            // infoBox.classList.replace("ib-slide-up", "ib-slide-down");
            // infoBox.classList.replace("ib-initial-pos", "ib-revised-pos");
            entry.target.classList.add("ip-slide-down");
        }
    },
    {
        rootMargin: "200px"
    })

})


// **** Load Graph animation on View ****
const graphObserver = new IntersectionObserver(entries => {
    

    // ANIMATE GRAPHS
    let graphs = document.getElementById("financials");
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation classes to divs with "row" class and lis with "legend-item"
        let rows = graphs.getElementsByTagName("div");
        for (let i= 0; i < rows.length; i++) {
            if(rows[i].classList.contains("row")) {
                 rows[i].classList.add("start-animation");
            }
        }
        let legends = graphs.getElementsByTagName("li");
        for (let i= 0; i < legends.length; i++) {
            if(legends[i].classList.contains("legend-item")){
                legends[i].classList.add("start-animation");
            }
        }        
      }
    },
    {
        rootMargin: "0 0 -200px 0"
    }
    );
  });

graphObserver.observe(document.querySelector('.fi-graph'));
eiObserver.observe(document.querySelector('#ei-info'));

const animations = document.querySelectorAll('.animation-item');
animations.forEach (animation =>
                   animObserver.observe(animation)
);
