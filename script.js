//1. Select the last child of the <ol> tag and put it at the beginning of the list;
// select the <ol> element
const ol = document.querySelector('ol');
// select the last child element of the <ol> element
const lastChild = ol.lastElementChild; 
// insert the last child element before the first child element of the <ol> element
ol.insertBefore(lastChild, ol.firstElementChild); 



//2. Move the <h2> of the third section in the second one and vice-versa;
//create two variables, secondSection and thirdSection, 
//store references to the second and third sections
const secondSection = document.getElementsByTagName('section')[1];
const thirdSection = document.getElementsByTagName('section') [2];
//create two more variables, secondSectionHeader and thirdSectionHeader, 
//store references to <h2> in second and third sections. 
const secondSectionHeader = secondSection.querySelector('h2');
const thirdSectionHeader = thirdSection.querySelector('h2');
//These lines use the insertBefore() method to move the <h2> element in the third section
// to the beginning of the second section and vice-versa. 
secondSection.insertBefore(thirdSectionHeader,secondSection.firstChild);
thirdSection.insertBefore(secondSectionHeader, thirdSection.firstChild);



//3. Delete the last section from the DOM, we don't need it anyways;
console.log(thirdSection);
const thirdSectionUseless = thirdSection.remove('section');





















