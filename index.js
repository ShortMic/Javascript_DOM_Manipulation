var canShowMultiple = false;
const accordionBlock = document.getElementsByClassName("accordion")[0];
const accordionParasBlock = Array.from(document.getElementsByClassName("accordion-para"));
const accordionHeaders = Array.from(document.getElementsByClassName("accordion-header"));
const multipleToggle = document.getElementById('accordion-multiple-togglebox');
multipleToggle.addEventListener('click',(x)=> {if(canShowMultiple){canShowMultiple = false;}else{canShowMultiple = true;}});
accordionParasBlock.map((x) => x.style.display = 'none');
accordionHeaders.map((x) => x.addEventListener('click',toggleAccordion));

function hideAllExcept(elementBlockException){
  const idException = elementBlockException.id;
  if (elementBlockException.style.display === 'none') {
    //clickedTarget.style.display = 'block';
    elementBlockException.style.removeProperty("display");
  } else {
    //clickedTarget.style.addProperty("display");
    elementBlockException.style.display = 'none';
  }
  if(!canShowMultiple){
    accordionParasBlock.map((x) => { if (x.id !== idException){
      x.style.display = 'none';
    }});
  }
}

function toggleAccordion(e) {
  let clickedTarget = e.target;
  console.log('Clicked item text:', clickedTarget.textContent);
  let foundCorrectSibling = false;
  while(clickedTarget && !foundCorrectSibling){
    clickedTarget = clickedTarget.nextElementSibling;
    if(clickedTarget && clickedTarget.classList.contains('accordion-para')){
      console.log("Target sibling found in element classlist: "+clickedTarget.classList);
      //clickedTarget = clickedTarget.getElementsByClassName('accordion-para')[0];
      foundCorrectSibling = true;
    }
  }
  console.log(clickedTarget);
  if(!foundCorrectSibling){
    console.log("Error: target accordion paragraph block not found for clicked title!");
  }else{
    hideAllExcept(clickedTarget);
  }
}
