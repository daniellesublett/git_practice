// hampster model
function Reptile (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// hampster Instances
var hammy = new Reptile('slimy', 'snake', 14, 'hiss hiss','http://data.whicdn.com/images/151632077/superthumb.jpg');
var Emy = new Reptile('scaly','lizard', 7, 'scurry scurry','http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/australianshepherds-th1.jpg' );


// hampster Array
var reptileArray = [hammy, Emy];

//Output to HTML
for (i=0;i < reptileArray.length; i++) {
        name = reptileArray[i].name,
        img = reptileArray[i].imgUrl,
        breed = reptileArray[i].breed,
        sound = reptileArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('reptiles');
        sectionContainer.appendChild(animalDiv);
}

