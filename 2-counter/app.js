// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]

generateMathLib = () => {
    const companyName = companies[Math.floor(Math.random() * companies.length)]
    const firstLetter = companyName.charAt(0)
    const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!"

    return companyString
};

value.textContent = generateMathLib();

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    const mathLib = generateMathLib();

    if (styles.contains("decrease")) {
      value.textContent = mathLib;
    } else if (styles.contains("increase")) {
      value.textContent = mathLib;
    } else {
      value.textContent = '';
    }
  });
});
