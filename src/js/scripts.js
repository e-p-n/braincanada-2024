
// // **** Show / Hide text for Execs ****

function showHide(id, lang) {
    var more = "more >";
    var less = "less >";
    if (lang === "fr") {
        more = "Plus";
        less = "Moins";
    }
    var message = document.getElementById(id);
    

    let button = document.getElementById(id+'-button');
    let pic = document.getElementById(id+'-pic');
    let box = document.getElementById(id+'-box');
    var boxClass, buttonClass;
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
    console.log (button.className);

}

// **** Load Graph animation on View ****
const observer = new IntersectionObserver(entries => {
    let graphs = document.getElementById("financials");

    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        // entry.target.classList.add('animation');


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
    });
  });

//   const observer2 = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('fadeIn');
//       }
//     });
//   });
  
  observer.observe(document.querySelector('.fi-graph'));
//   observer.observe(document.querySelector('#graph2'));
//   observer2.observe(document.querySelector('#stats1'));
//   observer2.observe(document.querySelector('#stats2'));

