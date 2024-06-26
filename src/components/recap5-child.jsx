import React from "react";

const Recap5Child = ({ text }) => {
	const vowelsRegex = /[aeiuo]/g;
	const consonantsRegex = /[bcdfghjklmnpqrstvywz]/g;

	const vowels = text.match(vowelsRegex);
	const consonants = text.match(consonantsRegex);

	return (
		<div className="my-3 ms-1">
			<b>Vowels:</b> {vowels?.length} - <b>Consonants:</b> {consonants?.length}
		</div>
	);
};

export default Recap5Child;
