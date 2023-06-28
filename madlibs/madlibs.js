const submitMadLibs = (event) => {
	alert("Are you ready to embrace your fate, mortal?");
	event:preventDefault();

	const form = new FormData(event.target);
	const userSubmission = Object.fromEntries(form);

	console story = `<h3>Read your prophecy ... if you dare!</h3> <p>Once upon a time, there was a <span class="inserted-text">${userSubmission.person/animal/creature1}</span> named <span class="inserted-text">${userSubmission.yourName}</span> who lived in
an enormous <span class="inserted-text">${userSubmission.building}</span>. One day, a <span class="inserted-text">${userSubmission.person/animal/creature2}</span> friend came to visit, sharing
news about a special <span class="inserted-text">${userSubmission.magical-item}</span>. <span class="inserted-text">${userSubmission.yourName}</span> felt very <span class="inserted-text">${userSubmission.feeling/emotion}</span> to hear
about this and couldn't wait to see it in person, even though it was a
long, long journey. The friends packed up, and off they went.
On the way, they found a <span class="inserted-text">${userSubmission.magical-creature1}</span> blocking the path who was crying.
It was stuck in the <span class="inserted-text">${userSubmission.obstacle}</span> and couldn't get loose. So the friends
thought about what they could do to help. Finally, <span class="inserted-text">${userSubmission.companion}</span> had an
idea! "Let's <span class="inserted-text">${userSubmission.verb}</span>!
After a mysterious <span class="inserted-text">${userSubmission.magical-creature2}</span> arrived to help, it was so grateful that the magical creature
decided to help them, too. Soon, the friends were <span class="inserted-text">${userSubmission.verb2}</span>! They made it to
see the <span class="inserted-text">${userSubmission.magical-item}</span> in no time, and brought along their new magical friend!
When they returned home, the friends decided to <span class="inserted-text">${userSubmission.verb3}</span> in order to
celebrate.</p>`;

console.log(story)

}
