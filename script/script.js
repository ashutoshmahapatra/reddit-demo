(function(){
var threads = [
	{
		title:"Cyclone Vardah: Wind speed to cross 100kmph.",
		status:'submitted',
		votes:62,
		comments:269,
		user:'Times of India',
		date:'1d ago',
		imageUrl:'cyclone.jpg',
	},
	{
		title:"82 trains delayed, 16 cancelled due to fog.",
		status:'submitted',
		votes:48,
		comments:120,
		user:'Assu Deepu',
		date:'20hr ago',
		imageUrl:'train.jpg',
	},
	{
		title:"Note ban scripts trouble for Sunday book market",
		status:'submitted',
		votes:45,
		comments:103,
		user:'Anil',
		date:'23hr ago',
		imageUrl:'book.jpg',
	},
	{
		title:"Metro finances to be hit if fares not hiked",
		status:'submitted',
		votes:55,
		comments:150,
		user:'Jose',
		date:'10hr ago',
		imageUrl:'metro.jpg',
	},
	{
		title:"6-year-old leopard found dead in Adilabad district",
		status:'submitted',
		votes:40,
		comments:180,
		user:'Bagha',
		date:'1day ago',
		imageUrl:'leopard.jpg',
	},
	{
		title:"Potato prices drop as cold storages clear stock",
		status:'submitted',
		votes:89,
		comments:191,
		user:'Bataka',
		date:'18hr ago',
		imageUrl:'potato.jpg',

	},
	{
		title:"Drinking water remains a luxury in key Old City areas in Hyderabad",
		status:'submitted',
		votes:37,
		comments:164,
		user:'Assu Deepu',
		date:'15hr ago',
		imageUrl:'water.jpg',
	},
	{
		title:"RBI against government's proposal to dramatically lower charges on debit card transactions",
		status:'submitted',
		votes:58,
		comments:170,
		user:'Ashutosh',
		date:'20hr ago',
		imageUrl:'rbi.jpg',
	},
	{
		title:"Ratan Tata hailed as saviour of UK steel industry",
		status:'submitted',
		votes:38,
		comments:150,
		user:'Anthoine',
		date:'15hr ago',
		imageUrl:'tata.jpg',

	},
	{
		title:"Telangana to tweak consent norm in land acquisition bill",
		status:'submitted',
		votes:47,
		comments:110,
		user:'Vital',
		date:'21hr ago',
		imageUrl:'telengana.jpg',
	},
	{
		title:"Virat Kohli, Ravindra Jadeja put India on path for series win",
		status:'submitted',
		votes:89,
		comments:190,
		user:'Satyajit',
		date:'12hr ago',
		imageUrl:'cricket.jpg',
	},
	{
		title:"Indian Aces end runner-up again, lose IPTL final to Slammers",
		status:'submitted',
		votes:44,
		comments:140,
		user:'Assu',
		date:'13hr ago',
		imageUrl:'aces.jpg',
	},
	
]
function ce(tag,className){
	var ele = document.createElement(tag);
	if(className)
	{
		ele.className = className;	
	}
	return ele;
}
function threadCreator(data){
		var thread = ce('div','thread');
		var mainCard = ce('div','mdl-card mdl-shadow--2dp');
		var voter = ce('div','voter');
		var up = ce('div','up');
		var materialIconsUp = ce('i','material-icons');
		var materialIconsDown = ce('i','material-icons');
		var number = ce('div','number');
		number.innerHTML = data.votes;
		var down = ce('div','down');
		var icon = ce('div','icon');
		var iconImage = ce('img');
		if(data.imageUrl)
		{
			iconImage.src = 'images/'+data.imageUrl;
			icon.appendChild(iconImage);	
		}
		else
		{
			var imageReplaceIcon = ce('i','material-icons');
			imageReplaceIcon.innerHTML = 'description';
			icon.appendChild(imageReplaceIcon);	
		}
		var content = ce('div','content');
		var mainText = ce('div','main-text');
		var status = ce('span','status');
		var title = ce('span','main-text');
		title.innerHTML = data.title;
		status.innerHTML = data.status;
		var mdlCardSupportingText1 = ce('div','mdl-card__supporting-text');
		var submitted = ce('span','light');
		submitted.innerHTML = 'submitted';
		var date = ce('span','dark');
		date.innerHTML = data.date;
		var by = ce('span','dark');
		by.innerHTML ='by';
		var user = ce('a');
		user.innerHTML = data.user;
		
		var mdlCardSupportingText2 = ce('div','mdl-card__supporting-text');
		var comments = ce('span','dark');
		comments.innerHTML = data.comments + " comments";
		user.innerHTML = data.user;
		var share = ce('a');
		share.innerHTML = 'Share';

		
		thread.appendChild(mainCard);
		mainCard.appendChild(voter);
		mainCard.appendChild(icon);
		mainCard.appendChild(content);
		voter.appendChild(up);
		voter.appendChild(number);
		voter.appendChild(down);
		up.appendChild(materialIconsUp);
		down.appendChild(materialIconsDown);
		materialIconsUp.innerHTML = 'keyboard_arrow_up';
		materialIconsDown.innerHTML = 'keyboard_arrow_down';

		content.appendChild(mainText);
		content.appendChild(mdlCardSupportingText1);
		content.appendChild(mdlCardSupportingText2);
		mainText.appendChild(status);
		mainText.appendChild(title);
		mdlCardSupportingText1.appendChild(submitted);
		mdlCardSupportingText1.appendChild(date);
		mdlCardSupportingText1.appendChild(by);
		mdlCardSupportingText1.appendChild(user);
		mdlCardSupportingText2.appendChild(comments);
		mdlCardSupportingText2.appendChild(share);
		return thread;
	}
	window.onload = function(){
		var threadContent = document.getElementById('thread-cont');
		threads.forEach(function(data){
			var threadEle = threadCreator(data);
			threadContent.appendChild(threadEle);
		})	
	}
	
	
})();