

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');


const submitMadLibs = (event) => {
	alert("Are you ready to embrace your fate, mortal?");
	event.preventDefault();
	madLibsForm.classList.add('hide');

	const form = new FormData(event.target);
	const userSubmission = Object.fromEntries(form);

	const story = `
	<header id="intro" class="center">
	<h3>Read your prophecy ... if you dare!</h3> 
	

	<p>Once upon a time, there was a <span class="inserted-text">${userSubmission.personanimalcreature1}</span> named <span class="inserted-text">${userSubmission.yourName}</span> who lived in
		an enormous <span class="inserted-text">${userSubmission.building}</span>. One day, a <span class="inserted-text">${userSubmission.personanimalcreature2}</span> friend came to visit, sharing
		news about a special <span class="inserted-text">${userSubmission.magicalitem}</span>. <span class="inserted-text">${userSubmission.yourName}</span> felt very <span class="inserted-text">${userSubmission.feelingemotion}</span> to hear
		about this and couldn't wait to see it in person, even though it was a
		long, long journey. The friends packed up, and off they went.</p>

		<p>On the way, they found a <span class="inserted-text">${userSubmission.magicalcreature1}</span> blocking the path who was crying.
		It was stuck in the <span class="inserted-text">${userSubmission.obstacle}</span> and couldn't get loose. So the friends
		thought about what they could do to help.</p>

		<p>Finally, <span class="inserted-text">${userSubmission.companion}</span> had an
		idea! "Let's <span class="inserted-text">${userSubmission.verb}</span>!
		After a mysterious <span class="inserted-text">${userSubmission.magicalcreature2}</span> arrived to help, it was so grateful that the magical creature
		decided to help them, too. Soon, the friends were <span class="inserted-text">${userSubmission.verb2}</span>!</p>

		<p>They made it to
		see the <span class="inserted-text">${userSubmission.magicalitem}</span> in no time, and brought along their new magical friend!
		When they returned home, the friends decided to <span class="inserted-text">${userSubmission.verb3}</span> in order to
		celebrate.</p>

		</header>
`;

storySection.innerHTML += story;
storySection.classList.remove('hide');

let resetButton = `
<button id="madlibs-reset" onclick="resetMadLibs()">Reset</button>
`;
storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
	storySection.classList.add('hide');
	storySection.innerHTML = '';
	madLibsForm.reset();
	madLibsForm.classList.remove('hide');
}