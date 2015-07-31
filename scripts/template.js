var data = {
    aboutMe: [{
        title: 'Interests',
        subTitle: 'I am very passionate about UI/UX',
        desc: 'I recently discovered my interests in front - end development.I love a well designed UI / UX, and I love it more when I was the one behind it.'
    }, {
        title: 'Musician',
        subTitle: 'I enjoy both listening, and playing',
        desc: 'Now I will admit I am no musical genius, yet I love listening to /playing music.Currently trying to learn how to play the bass.'
    }, {
        title: 'Gamer',
        subTitle: 'I fancy playing a game or two',
        desc: 'I like to game occasionally, most people say that this is a waste of time.I disagree, in some cases can teach leadership / team work.'
    }, {
        title: 'To the Future',
        subTitle: 'My Goals to meet',
        desc: 'Future plans include increasing my knowledge in the web development field.Also I have many projects that I would love to create!'
    }],
    skills: [{
        title: 'HTML',
        items: ['Fimiliarity with HTML/HTML5 semantics/syantax', 'Knowledge level to hand-code markup', 'Ability to work with videos and images', 'Understanding of the DOM structure', 'Knowledge of best practices']
    }, {
        title: 'CSS',
        items: ['Understanding of the CSS box model', 'Ability to create effeicient/concise selectors', 'Knowledge of properties/attributes for changing display of elements', 'Proficient with CSS preprocessors(SASS / LESS)', 'Knowledge on CSS attributes and browser compatibility']
    }, {
        title: 'JavaScript',
        items: ['Familiarity of properties/control structures', 'Understanding of the MVC paradigm', 'Ability to implement form/regular expression validation', 'Knowledge on how to handle events', 'Understanding of RESTful APIs / how to handle API calls']
    }, {
        title: 'jQuery',
        items: ['Knowledge of element properties that can be manipulated', 'Ability to employ the jQuery library for animation, events, and manipulation', 'Understanding of when to empoly the use of JQuery over JavaScript']
    }, {
        title: 'Photoshop',
        items: ['Knowledge of tools in photoshop', 'Ability to create mocks with tools given', 'Ability to edit files with the tools given', 'Ability to create sprites and images from files', 'Understanding of layers and how to best structure them when creating PSDs']
    }, {
        title: 'UI/UX',
        items: ['Ability to ensure implementations are optimized for cross - browser performance', 'Understanding of the user flow in implementation of code', 'Knowledge of standards required for a web app / page', 'Ability to ensure that implementations are responsive for multi - device optimization']
    }],
    social: [{
            title: 'Pinterest',
            description: 'Here you will be able to see all of the random things that pique my interest which runs from inventions, to amazing designs that give me inspiration for projects.'
        }, {
            title: 'Github',
            description: 'Though this is not necessarily a social media site I do believe that through the projects that people create, one can also see into the interests of the creator.'
        }, {
            title: 'Tumblr',
            description: 'In my tumblr account you can see a bit of my comical taste. Most of my posts in this account are PG-13 rated, however there are a few posts that adults are more likely to get.'
        }, {
            title: 'Facebook',
            description: 'This is the godfather of all social media, and a great way to tell what I am planning. I will admit I may be switching this account out for a Twitter which seems to be more popular.'
        }, {
            title: 'LinkedIn',
            description: 'Here you are able to see all of my professonal aspects of my career including both previous experiences and my current occupational status.'
        }, {
            title: 'Instagram',
            description: 'Here you can see what I am up through a more visual story. Normally I show photos from trips I take, or freaking amazing food that I am eating!'
        }
]
};

// Handlebars compiles the above source into a template
var source1 = $('#aboutMeScript').html();
var source2 = $('#skillsScript').html();
var source3 = $('#socialScript').html();

var template1 = Handlebars.compile(source1);
var template2 = Handlebars.compile(source2);
var template3 = Handlebars.compile(source3);

// HTML element with id "animalList" is set to the output above
$("#aboutMe > div").html(template1(data));
$("#skills > div").html(template2(data));
$("#social > div").html(template3(data));