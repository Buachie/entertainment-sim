(this["webpackJsonpentertainment-app-v1"]=this["webpackJsonpentertainment-app-v1"]||[]).push([[0],{115:function(e,t,a){e.exports=a(384)},119:function(e,t,a){},120:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),i=a.n(r),s=(a(119),a(14)),c=a(15),l=a(17),u=a(16),m=(a(120),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getHour=function(){var e=(new Date).getHours;n.setState({hour:e})},n.state={date:new Date,hour:null,username:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(this.userData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user"))this.setState({username:this.userData});else{var t=prompt("What is your name?");this.setState({username:t})}setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("user",JSON.stringify(t.username))}},{key:"componentDidMount",value:function(){this.getHour()}},{key:"render",value:function(){var e=this.state,t=e.hour,a=e.username,n=e.date;return console.log(this.state),o.a.createElement("div",{className:"greeting-container"},o.a.createElement("h1",{className:"time-container"},n.toLocaleTimeString()),o.a.createElement("h2",{className:"date-container"},n.toLocaleDateString("en-US",this.state.options)),o.a.createElement("h2",{className:"greeting"},t<12&&n.toLocaleTimeString().includes("AM")?"Good Morning ".concat(a):t<5&&n.toLocaleTimeString().includes("PM")?"Good Afternoon ".concat(a):(t>17&&n.toLocaleTimeString().includes("PM"),"Good Evening ".concat(a))))}}]),a}(n.Component)),h=a(110),g=a.n(h),p=(a(126),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).activeOption=function(){n.state.energy<2?alert("You don't have enough energy! Rest a bit and try again later"):(n.setState({strength:n.state.strength+2,intelligence:n.state.intelligence-1,charisma:n.state.charisma+1,energy:n.state.energy-2}),n.optionCooldown(),n.optionReset())},n.smartOption=function(){n.state.energy<=0?alert("You don't have enough energy! Rest a bit and try again later"):(n.setState({strength:n.state.strength-1,intelligence:n.state.intelligence+3,charisma:n.state.charisma-1,energy:n.state.energy-1}),n.optionCooldown(),n.optionReset())},n.charismaOption=function(){n.state.energy<2?alert("You don't have enough energy! Rest a bit and try again later"):(n.setState({strength:n.state.strength-1,intelligence:n.state.intelligence+1,charisma:n.state.charisma+2,energy:n.state.energy-2}),n.optionCooldown(),n.optionReset())},n.optionCooldown=function(){n.setState({displayButton:!1})},n.optionReset=function(){setTimeout((function(){n.setState({displayButton:!0})}),3e4)},n.restoreEnergy=function(){setTimeout((function(){n.state.energy<10?n.setState({energy:n.state.energy+1}):console.log(n.state.energy),n.restoreEnergy()}),2e4)},n.optionSelectOne=function(e){switch(e){case"Light Rain":return n.state.options.lightRain[0];case"Mostly Cloudy":return n.state.options.mostlyCloudy[0];case"Partly Cloudy":return n.state.options.partlyCloudy[0];case"Clear":return n.state.options.clear[0];case"Rain":return n.state.options.rain[0];case"Cloudy":return n.state.options.cloudy[0];case"Drizzle":return n.state.options.drizzle[0];case"Overcast":return n.state.options.overcast[0];case"Humid":return n.state.options.humid[0]}},n.optionSelectTwo=function(e){switch(e){case"Light Rain":return n.state.options.lightRain[1];case"Mostly Cloudy":return n.state.options.mostlyCloudy[1];case"Partly Cloudy":return n.state.options.partlyCloudy[1];case"Clear":return n.state.options.clear[1];case"Rain":return n.state.options.rain[1];case"Cloudy":return n.state.options.cloudy[1];case"Drizzle":return n.state.options.drizzle[1];case"Overcast":return n.state.options.overcast[1];case"Humid":return n.state.options.humid[1]}},n.optionSelectThree=function(e){switch(e){case"Light Rain":return n.state.options.lightRain[2];case"Mostly Cloudy":return n.state.options.mostlyCloudy[2];case"Partly Cloudy":return n.state.options.partlyCloudy[2];case"Clear":return n.state.options.clear[2];case"Rain":return n.state.options.rain[2];case"Cloudy":return n.state.options.cloudy[2];case"Drizzle":return n.state.options.drizzle[2];case"Overcast":return n.state.options.overcast[2];case"Humid":return n.state.options.humid[2]}},n.state={intelligence:5,strength:5,charisma:5,fun:5,energy:10,weather:"",icon:"",options:{clear:["Go for a Run","Go to the Museum","Call a friend"],rain:["Watch TV","Read a Book","Sleep"],cloudy:["Go to the movies","Work on vocabulary","Play a game"],lightRain:["Go hiking","Study at the library","Visit a friend"],mostlyCloudy:["Do yoga at the park","Meditate","Go to a BBQ"],partlyCloudy:["Do yoga at the park","Create diagrams","Visit an Aquarium"],drizzle:["Do some gardening","Practice an instrument","Go to an amusement park"],overcast:["Go to the gym","Listen to classical music","Volunteer"],humid:["Go swimming at the pool","Go to a book cafe","Go camping with friends"]},displayButton:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreEnergy()}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("strength",t.strength),localStorage.setItem("intelligence",t.intelligence),localStorage.setItem("charisma",t.charisma),localStorage.setItem("energy",t.energy)}},{key:"componentWillMount",value:function(){localStorage.getItem("strength","intelligence","charisma","energy")&&this.setState({strength:JSON.parse(localStorage.getItem("strength")),intelligence:JSON.parse(localStorage.getItem("intelligence")),charisma:JSON.parse(localStorage.getItem("charisma")),energy:JSON.parse(localStorage.getItem("energy"))})}},{key:"render",value:function(){var e=this.state,t=e.intelligence,a=e.strength,n=e.charisma,r=e.energy;return o.a.createElement("div",{className:"option-stats"},o.a.createElement("h3",null,"What would you like to do?"),o.a.createElement("div",{className:"option-container",style:{display:"".concat(this.state.displayButton?"block":"none")}},o.a.createElement("button",{className:"option",onClick:this.activeOption},this.optionSelectOne(this.props.weather)),o.a.createElement("button",{className:"option",onClick:this.smartOption},this.optionSelectTwo(this.props.weather)),o.a.createElement("button",{className:"option",onClick:this.charismaOption},this.optionSelectThree(this.props.weather))),o.a.createElement("div",{className:"stats-container"},o.a.createElement("ul",null,o.a.createElement("li",null,"Strength:",a),o.a.createElement("li",null,"Intelligence:",t),o.a.createElement("li",null,"Charisma:",n),o.a.createElement("li",null,"Energy:",r))))}}]),a}(n.Component)),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getLocation=function(){navigator.geolocation.getCurrentPosition((function(t){t.coords.latitude,t.coords.longitude;e.setState({long:t.coords.longitude,lat:t.coords.latitude})}),(function(){console.log("Unable to retrieve your location")}))},e.getWeather=function(){var t="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15abec103b4ca0854030b4462f9754ca/".concat(e.state.lat,",").concat(e.state.long);fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.currently.temperature,n=t.timezone.replace(/_/g," "),o=t.currently.summary,r="(Feels like) "+t.currently.apparentTemperature,i=t.currently.icon;e.setState({temp:a,place:n,weather:o,icon:i,apparentTemp:r})}))},e.state={long:-73.94998970249429,lat:40.63292717413113,temp:null,place:null,weather:null,apparentTemp:null,icon:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getLocation(),this.getWeather()}},{key:"render",value:function(){var e=this.state,t=e.temp,a=e.place,n=e.weather,r=e.icon,i=e.apparentTemp,s={icon:r.replace(/-/g,"_").toUpperCase(),color:"white",size:150,animate:!0};return o.a.createElement("div",null,o.a.createElement("div",{className:"icon"},o.a.createElement(g.a,{icon:s.icon,color:s.color,size:s.size,animate:s.animate})),o.a.createElement("div",{className:"location-container"},o.a.createElement("div",{className:"location"},a)),o.a.createElement("div",{className:"weather-container"},o.a.createElement("div",{className:"temp"},t,"\xb0"),o.a.createElement("div",{className:"feels-like"},i),o.a.createElement("div",{className:"weather"},n)),o.a.createElement(p,{weather:n}))}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getBackground=function(){fetch("https://pixabay.com/api/?key=14272018-277a44d4d1ae6e42f42ed7772&q=landscape&image_type=photo").then((function(e){return e.json()})).then((function(t){for(var a=[],n=[],o=[],r=0;r<t.hits.length;r++)a.push(t.hits[r].largeImageURL),n.push(t.hits[r].pageURL),o.push(t.hits[r].user);e.setState({imageURLS:a,pageURLS:n,users:o})}))},e.backgroundRandomizer=function(t){var a=Math.floor(Math.random()*Math.floor(t));return e.state.imageURLS[a]},e.state={imageURLS:[],pageURLS:[],users:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getBackground()}},{key:"render",value:function(){var e={zIndex:"-1",width:"100%",minHeight:"100%",position:"absolute",top:"0",left:"0",backgroundImage:"url(".concat(this.backgroundRandomizer(this.state.imageURLS.length),")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"};return o.a.createElement("div",{className:"background",style:e},o.a.createElement("div",{className:"credits"}))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(y,null),o.a.createElement("main",null,o.a.createElement("div",{className:"search-box"},o.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search..."})),o.a.createElement("div",{className:"flex-container"},o.a.createElement(m,null)),o.a.createElement(d,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.a4faad77.chunk.js.map