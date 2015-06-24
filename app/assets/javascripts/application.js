// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//NEED TO MAKE A BACK BUTTON THAT TAKES YOU BACK
//TO THE PREVIOUS LINK AND A HOME BUTTON TO TAKE
//YOU BACK TO START ENTIRELY AND RESET ALL VALUES


//Button to start game, leads to intro message
//directed at champion on light
	function gameStart(){
		$('#startButton').click(function(){
			window.location = 'introduction';
		})
	}

// "Hello Champion of Light! I'd like to ask you a few questions before we get started, alright?
// First, whats your name?" Name input submission form, take value and make a var for 
//later access. Must be at least five alphanumeric letters long, make sure that it's 
//the name the user wants. If not clear value and let them input a new name, 
//rinse and repeat until confirmed. Once submitted go to gender picker
	function nameSubmit(){
		$('#submitNameBtn').click(function(){
			window.location = 'gender';
		})
	}

//"Er... are you a man or a woman? This is a bit embarrassing to ask you know..."
//Two clickable images, male or female, catch the value for later use, ask if certain. 
//Once confirmed, move onto race options. 
	function genderSubmit(){
		$('#submitGender').click(function(){
			window.location = 'gender';
		})
	}


//"What race are you, sorry but you mortals all look the same to me!" (Human, Dwarf or Elf)
//Provide race pictures. If male, show male elf, human, and dwarf.
//If female, show female elf, human, and dwarf. Let user select
//and get their confirmation.

/*FOR HUMAN*/
//"You slept with farmer's daughter. Her angry father discovers the both of you in the barn. 
//He's pissed! Choose your weapon!" (bucket, words, chicken)

	//Bucket
		// The mighty bucket! The often overlooked weapon of champions.
		// You take a swing. How much force do you use?
		//A fluctuating power bar(0-100). On clicking enter, stop moving and
		//find value. Pop up numerical value and switch to according scenario
			
			//For values between 0-33
				//A pathetic swing! Were you even trying? You fail so horribly,
				//the farmer actually feels bad for you. After an awkward apology
				//you go on your way, taking the bucket with you. 
				//Congratulations? How do you celebrate?
					
					//Head into the wilderness
						//You go on a fantastically magical adventure with the bucket.
						//As it turns out, the bucket has always dreamed of a life like this.
						//As time goes on, the two of you become closer. More than just a pair of 
						//adventurers, but life partners. After swearing off Farmer's Daughters for
						//forever, you and the bucket start a new life together. The adventure of 
						//marriage. You live happiy ever after with bucket and your two pail children.
						//The end button (return to start button)
					
					//Go to the next town over
						//You discard the bucket and head to the next town over. Suffering from
						//a powerful thirst, you hit up the pub. Next thing you know, you're
						//making eyes at a pretty young thing seated next to you. You ask her who she is.
						//With a smile, she replies "Why, I'm the farmer's daughter."
						//Button: Here we go again... (return to start button)
				
			//For values 34-66
				// "A decent swing, enough to make the angry farmer back off. 
				// However, as a long term solution, this doesn't really quite work out.
				// Eventually, the authorities are called ad you're arrested."
				//(return to start button)

			//For values 67-100
				// "Incredible force! Unfortunately, your strength was so incredible that 
				// the Mighty Bucket flies out of your hand, missing the farmer, and knocking 
				// out his lovely daughter. Awkward. You should probably make a run for it."
				//(return to start button)

	//Words
		//"You try to stammer out an apology, but due to mispronouncing a word, you end up 
		//opening a portal to the nether realm. Demons invade. Everyone dies. Way to go hero."
		//Try again? (return to start button)

	//Chickens
		//"Chickens? Really? Who does that? Chickens peck and scratch you. 
		// Although in the confusion you manage to escape the farmer, you end up 
		// becoming a were-chicken. You terrorize the country-side until an adventurer 
		// turns you into crispy fried nugget. Mmm. Chicken." (return to start button)

/*FOR DWARF*/
// "Wake up after a raging kegger. All signs point to you having started a fire the local inn.
// What do you do?"

	//Run
		// "You run out of the inn, beard slightly singed. 
		// In the confusion, you managed to slip down an alleyway, unnoticed. 
		// However, this luck quickly runs out when you realize you're not alone. 
		// Three thuggish trolls are lurking there. They demand you hand over all your riches."
		//A fluctuating power bar(0-100). On clicking enter, stop moving and
		//find value. Pop up numerical value and switch to according scenario

			//For value 0
				// "You refuse to pay. Dwarvish honor demands it! 
				// Unfortunately, your Dwarvish honor provides little protection against 
				// three burly trolls. In the wake of a fire, no one discovers until days 
				// later the gooey paste of what once was a dwarf."
				// (return to start button)

			//For value 1-50
				// "A rather paltry sum, but as fate would have it, these trolls are rather dumb. 
				// It seems they have confused you for a leprechaun. Strapping you to the 
				// back of their largest and most burly member, the team of Trolls leave 
				// the town in search of your pot of gold. You survive for days, leading 
				// them on a wild goose chase, until a mysterious adventurer brandishing 
				// a bucket saves you. Impressed by the adventurer's valor, you follow, 
				// learning the ways of the bucket."
				// (return to start button)

			//For value 51-100
				// "Clever dwarf that you are, you know your life is worth more than a 
				// few hundred gold. You show the Trolls your coin purse and, before 
				// they can grab it, you toss it into the main street amongst the humans. 
				// Gold scatters and chaos ensues as greedy hands (human and troll alike) 
				// attempt to gather the money. Soon, it turns violent. Things get out of 
				// hand real fast, and skirmish escalates into a full blown war between 
				// humans and trolls. It is only after decades of fighting, both 
				// sides nearly extinct, that the war subsides. You, on the other hand, 
				// go to the next town over for a nice drink."
				// (return to start button)

	//Dig
		// "Flustered, you decide to do the most sensible thing you can, 
		// as a Dwarf, think of: Dig. Do you go bare-handed or find your tools?"
		// Two icons for choice, hands and a pickaxe. 

			//hands
				// "No time for tools! It's time to diggy dig a hole! Floorboards 
				// fly as you tear through the earth. You've entered into Dwarved Digging 
				// Frenzy-mode. You tunnel through dirt and stone when suddenly, the 
				// ground gives way. Silly Dwarf, hasn't anyone ever told you not to 
				// dig straight down?" (return to start button)

			//pickaxe
				// "You scramble for your tools. However, what you failed to realize, 
				// was that the inn was -still- burning. And that you were inside. 
				// You burn to a crisp. Mmm, Roasted Dwarf." (return to start button)

	//Extinguish
		// "With lightning fast reflexes, you extinguish the fire. Of course, no one 
		// actually witnessed you setting fire to the inn, only the act of you putting 
		// it out. With the aid of your natural Dwarven charm, you win over the 
		// townspeople. Just a few months later, you are elected mayor. You're well known 
		// for being a straight-shooter who values fire safety."
		// (return to start button)


/*FOR ELF*/
// "Having failed the Ranger Academy exams once again, you decide to venture 
// off into the forest. You're intent to prove your worth as a Guardian of the Wood. 
// As you storm through the underbrush, you come across a white stag, caught in a 
// trap. What do you do?"

	//Leave
		// "Not your problem. Hunting is a natural part of life. That's something you and 
		// the Stag can agree upon. Of course, it doesn't work out so well for you. 
		// As soon as you turn your back, the Great White Stag, which is not a Stag, 
		// lets out a feral growl. It morphs into a black demon and devours you whole."
		// (return to start button)

	//Help
		// "You decide to help the poor creature. To your surprise, the Great White Stag 
		// speaks to you. "Please, kind Ranger," it beseeches you, "bring me some blue mana 
		// flowers. They will aid in curing me."\"
		// A fluctuating power bar(0-100). On clicking enter, stop moving and
		// find value. Pop up numerical value and switch to according scenario

			// If you pick 0 flowers
				// "Psych! You decide to leave the Stag behind. Mama didn't raise a fool. 
				// You know better than to get close to Forest Spirits. You leg it back 
				// home and tell the Rangers what you've seen. Impressed, they admit you 
				// into their ranks."
				// (return to start button)

			// If you pick 1-30 flowers
				// "You find a few. Being a rather inept Ranger, you've no idea how many to 
				// bring back. But surely this is enough. It is. Once the flowers are made 
				// into a fine paste, you smear it on the wounds. Almost immediately they heal. 
				// "Such a kind elf. So quick to obey. I think I will keep you. You'll make the 
				// loveliest slave." You try to protest. But something stops you. A deep, and 
				// powerful magic. Despair, young Ranger. You've been Lost."
				// (return to start button)

			// If you pick 31-60 flowers
				// "You retrieve an armful, just to be safe. The wound looked serious, so you 
				// didn't want to spend too much time dallying about. Once the flowers were made 
				// into a paste, you smear it on the Stag's leg. The wound heals almost instantly. 
				// "Might I make a request," you ask quietly. The Stag seems surprised, but bows 
				// his head, "You may." "You've seen how obedient I am. All that I ask is that you 
				// make me your vassal." You look up, eyes gleaming. Surely the Stag knew. Even 
				// young elves could see through such trickery. "Lord Armaga'aslz, Dread Void-Lord, 
				// make a Dread Knight, so that I might bring my fury down upon the elves." 
				// The Stag, which was not a stag, laughed. In a great mass of thick black smoke, 
				// he changed, revealing his true, demonic, form. "Very well, little elf. Together, 
				// we will make this forest burn."\""
				// (return to start button)

			// If you pick 61-100 flowers
				// "You bring as many flowers as you can. Being a rather inept Ranger, you've 
				// no idea how many are needed. But surely this is enough. It is. Once the 
				// flowers are made into a fine paste, you smear it on the wounds. Almost 
				// immediately they heal. "Such a kind elf. So quick to obey and so passionate 
				// about my well-being. I am moved." The Great White Stag stands. His fur 
				// ripples, shedding into an ashy dust as he morphs into a black demon. The 
				// Dread Void-Lord Armaga'aslz! You try to run, but find you cannot. You've 
				// been put under a spell. Mind screaming in terror, you watch as your body 
				// follows the Demon Lord. Evidently, kindness is unknown to demons, and so 
				// your display moved Lord Armaga'aslz. He has selected you to be his new consort.
				// Isn't it great to be loved?"
				// (return to start button)


	//Kill
		// "What else could you do, really? Such a rare catch. You make it quick, 
		// an arrow right between the eyes. Then suddenly, the wind dies down. Everything 
		// becomes eerily still. Color begins to fade... everything just withers away. 
		// Including yourself. You can feel yourself getting weaker and weaker. Perhaps you 
		// should have paid better attention in class. Then you would've known that the White 
		// Stag was the Heart of the Forest and you just killed it. Way to go, jackass."
		// (return to start button)

