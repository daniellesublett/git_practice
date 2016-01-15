// hampster model
function Hampster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// hampster Instances
var hammy = new Hampster('hammy', 'chihuahua', 14, 'squeek squeek','http://data.whicdn.com/images/151632077/superthumb.jpg');
var Emy = new Hampster('Emy','shepard mix', 7, 'woof woof!','http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/australianshepherds-th1.jpg' );


// hampster Array
var hampsterArray = [hammy, Emy];

//Output to HTML
for (i=0;i < hampsterArray.length; i++) {
        name = hampsterArray[i].name,
        img = hampsterArray[i].imgUrl,
        breed = hampsterArray[i].breed,
        sound = hampsterArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('dogs');
        sectionContainer.appendChild(animalDiv);
}

