webpackJsonp([0],[function(t,e){t.exports=function(t,e,n,a){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var u=o.computed||(o.computed={});Object.keys(a).forEach(function(t){var e=a[t];u[t]=function(){return e}})}return{esModule:i,exports:r,options:o}}},,function(t,e,n){var a=n(0)(n(17),null,null,null);t.exports=a.exports},,,,,,,function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(6),s=(n.n(r),n(33)),o=n.n(s),u=n(12),c=n(13);n.d(e,"a",function(){return d});var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};n.i(r.sync)(c.a,u.a);var d=new i.a(l({router:u.a,store:c.a},o.a))},function(t,e,n){"use strict";var a=n(3),i=n.n(a);window.Promise=window.Promise||i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(29),i=n.n(a);i.a.install({onUpdateReady:function(){console.log("update ready"),i.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(5),s=n.n(r),o=n(4),u=n.n(o),c=n(38),l=n.n(c),d=n(41),p=n.n(d),f=n(37),_=n.n(f),v=n(39),m=n.n(v),g=n(40),h=n.n(g);i.a.use(s.a),i.a.use(u.a),e.a=new s.a({mode:"history",routes:[{path:"/",component:l.a},{path:"/@:id",component:p.a},{path:"/anime/:slug",component:_.a},{path:"/manga/:slug",component:m.a},{path:"*",component:h.a}]})},function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(7),s=n.n(r);i.a.use(s.a);var o={count:0},u={INCREMENT:function(t){t.count++},DECREMENT:function(t){t.count--}},c={incrementAsync:function(t){var e=t.commit;setTimeout(function(){e("INCREMENT")},200)}},l=new s.a.Store({state:o,mutations:u,actions:c});e.a=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(36),i=n.n(a),r=n(35),s=n.n(r);e.default={components:{Navbar:i.a,Footr:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{count:function(){return this.$store.state.count}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"set-title",props:["title"],created:function(){document.title=this.title},watch:{title:function(){document.title=this.title}},render:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n.n(a);e.default={components:{SetTitle:i.a},data:function(){return{loading:!1,anime:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/anime?filter[slug]="+this.$route.params.slug,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="Anime doesn't exist":(t.anime=e.body.data[0],t.anime.attr=t.anime.attributes,delete t.anime.attributes,delete t.anime.relationships)}).catch(function(e){t.error=e.toString()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(34),i=n.n(a);e.default={components:{Counter:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n.n(a);e.default={components:{SetTitle:i.a},data:function(){return{loading:!1,manga:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/manga?filter[slug]="+this.$route.params.slug,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="Manga doesn't exist":(t.manga=e.body.data[0],t.manga.attr=t.manga.attributes,delete t.manga.attributes,delete t.manga.relationships)}).catch(function(e){t.error=e.toString()})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n.n(a);e.default={components:{SetTitle:i.a},data:function(){return{loading:!1,user:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.user=null,this.loading=!0,this.$http.get("https://kitsu.io/api/edge/users?filter[name]="+this.$route.params.id,{},{headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}}).then(function(e){t.loading=!1,0===e.body.meta.count?t.error="No user exists":t.user=e.body.data[0]}).catch(function(e){t.error=e.toString()})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function a(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),a=function(t){function e(){switch(s.state){case"redundant":i("onUpdateFailed"),s.onstatechange=null;break;case"installing":a||i("onUpdating");break;case"installed":r||i("onUpdateReady");break;case"activated":i("onUpdated"),s.onstatechange=null}}function n(){switch(s.state){case"redundant":s.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":i("onInstalled"),s.onstatechange=null}}var a,r,s=t.installing||t.waiting;if(s&&!s.onstatechange){var o;t.active?(e(),o=e):(n(),o=n),a=!0,t.waiting&&(r=!0),s.onstatechange=o}},i=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(a(t),t.onupdatefound=function(){a(t)})}).catch(function(t){return i("onError"),Promise.reject(t)})}}function i(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){return n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),void(t&&t())):void(e&&e())})}function r(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=a,e.applyUpdate=i,e.update=r},,,,function(t,e,n){n(24);var a=n(0)(n(14),n(43),null,null);t.exports=a.exports},function(t,e,n){n(25);var a=n(0)(n(15),n(44),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(null,n(48),null,null);t.exports=a.exports},function(t,e,n){n(27);var a=n(0)(n(16),n(46),null,null);t.exports=a.exports},function(t,e,n){n(23);var a=n(0)(n(18),n(42),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(19),n(47),null,null);t.exports=a.exports},function(t,e,n){n(28);var a=n(0)(n(20),n(50),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(21),n(49),null,null);t.exports=a.exports},function(t,e,n){n(26);var a=n(0)(n(22),n(45),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anime"},[n("h1",[t._v("Anime")]),t._v(" "),t.loading?n("div",{staticClass:"loading"},[t._v("\n      Loading...\n    ")]):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.anime?n("div",{staticClass:"content"},[n("set-title",{attrs:{title:t.anime.attr.canonicalTitle+" - Hibari"}}),t._v(" "),n("p",[t._v(t._s(t.$route.params.slug))]),t._v(" "),n("pre",[t._v("\nID: "+t._s(t.anime.id)+"\nSlug: "+t._s(t.anime.attr.slug)+"\nSynopsis: "+t._s(t.anime.attr.synopsis)+"\nEnglish Title: "+t._s(t.anime.attr.titles.en)+"\nCanonical Title: "+t._s(t.anime.attr.canonicalTitle)+"\nAbbreviations: "+t._s(t.anime.attr.abbreviatedTitles)+"\nRating: "+t._s(t.anime.attr.averageRating)+"\nRatings: "+t._s(t.anime.attr.ratingFrequencies)+"\nFavourites: "+t._s(t.anime.attr.favoritesCount)+"\nStarted Airing: "+t._s(t.anime.attr.startDate)+"\nFinished Airing: "+t._s(t.anime.attr.endDate)+"\nPopularity Rank: "+t._s(t.anime.attr.popularityRank)+"\nRating Rank: "+t._s(t.anime.attr.ratingRank)+"\nAge Rating: "+t._s(t.anime.attr.ageRating)+"\nAge Guide: "+t._s(t.anime.attr.ageRatingGuide)+"\nEpisodes: "+t._s(t.anime.attr.episodeCount)+"\nLength: "+t._s(t.anime.attr.episodeLength)+" minutes\nType: "+t._s(t.anime.attr.subtype)+"\nYoutube: https://youtu.be/"+t._s(t.anime.attr.youtubeVideoId)+"\nNSFW: "+t._s(t.anime.attr.nsfw)+"\n      ")])],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),t._v(" "),n("router-view"),t._v(" "),n("footr")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter-wrapper"},[n("div",{staticClass:"counter"},[t._v("\n    "+t._s(t.count)+"\n  ")]),t._v(" "),n("button",{on:{click:function(e){t.$store.commit("INCREMENT")}}},[t._v("Increment")]),t._v(" "),n("button",{on:{click:function(e){t.$store.commit("DECREMENT")}}},[t._v("Decrement")]),t._v(" "),n("button",{on:{click:function(e){t.$store.dispatch("incrementAsync")}}},[t._v("Increment Async")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("h1",[t._v("User")]),t._v(" "),t.loading?n("div",{staticClass:"loading"},[t._v("\n      Loading...\n    ")]):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.user?n("div",{staticClass:"content"},[n("set-title",{attrs:{title:t.user.attributes.name+" - Hibari"}}),t._v(" "),n("p",[t._v(t._s(t.$route.params.id))]),t._v(" "),n("pre",[t._v("\nID: "+t._s(t.user.id)+"\nName: "+t._s(t.user.attributes.name)+"\nPast Names: "+t._s(t.user.attributes.pastNames)+"\n"),t._v("\nLocation: "+t._s(t.user.attributes.location)+"\nWaifu? "+t._s(t.user.attributes.waifuOrHusbando)+"\nFollowers: "+t._s(t.user.attributes.followersCount)+"\nFollowing: "+t._s(t.user.attributes.followingCount)+"\nJoined: "+t._s(t.user.attributes.createdAt)+"\nFacebook: https://facebook.com/"+t._s(t.user.attributes.facebookId)+"\nLife Spent on Anime: "+t._s(t.user.attributes.lifeSpentOnAnime)+"\nBirthday: "+t._s(t.user.attributes.birthday)+"\nGender: "+t._s(t.user.attributes.gender)+"\nLast Updated: "+t._s(t.user.attributes.updatedAt)+"\nFavourites: "+t._s(t.user.attributes.favouritesCount)+"\nRatings: "+t._s(t.user.attributes.ratingsCount)+"\nPosts: "+t._s(t.user.attributes.postsCount)+"\nComments: "+t._s(t.user.attributes.commentsCount)+"\nLikes Given: "+t._s(t.user.attributes.likesGivenCount)+"\nLikes Recieved: "+t._s(t.user.attributes.likesRecievedCount)+"\nReviews: "+t._s(t.user.attributes.reviewsCount)+"\nPro: "+t._s(t.user.attributes.proExpiresAt)+"\n      ")]),t._v(" "),n("img",{attrs:{src:t.user.attributes.avatar.large}}),t._v(" "),n("img",{attrs:{src:t.user.attributes.coverImage.original}})],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("h1",[t._v("Hibari")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("counter"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    To get started, edit files in "),n("code",[t._v("./client")]),t._v(" and save.\n  ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",[n("span",[t._v("Hello world")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("h1",[t._v("404")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"manga"},[n("h1",[t._v("Manga")]),t._v(" "),t.loading?n("div",{staticClass:"loading"},[t._v("\n      Loading...\n    ")]):t._e(),t._v(" "),t.error?n("div",{staticClass:"error"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),t.manga?n("div",{staticClass:"content"},[n("set-title",{attrs:{title:t.manga.attr.canonicalTitle+" - Hibari"}}),t._v(" "),n("p",[t._v(t._s(t.$route.params.slug))]),t._v(" "),n("pre",[t._v("\nID: "+t._s(t.manga.id)+"\nSlug: "+t._s(t.manga.attr.slug)+"\nSynopsis: "+t._s(t.manga.attr.synopsis)+"\nEnglish Title: "+t._s(t.manga.attr.titles.en)+"\nCanonical Title: "+t._s(t.manga.attr.canonicalTitle)+"\nAbbreviations: "+t._s(t.manga.attr.abbreviatedTitles)+"\nRating: "+t._s(t.manga.attr.averageRating)+"\nRatings: "+t._s(t.manga.attr.ratingFrequencies)+"\nFavourites: "+t._s(t.manga.attr.favoritesCount)+"\nStarted Publishing: "+t._s(t.manga.attr.startDate)+"\nFinished Publishing: "+t._s(t.manga.attr.endDate)+"\nPopularity Rank: "+t._s(t.manga.attr.popularityRank)+"\nRating Rank: "+t._s(t.manga.attr.ratingRank)+"\nAge Rating: "+t._s(t.manga.attr.ageRating)+"\nAge Guide: "+t._s(t.manga.attr.ageRatingGuide)+"\nChapters: "+t._s(t.manga.attr.chapterCount)+"\nVolumes: "+t._s(t.manga.attr.volumeCount)+"\nSerialization: "+t._s(t.manga.attr.serialization)+"\nType: "+t._s(t.manga.attr.subtype)+"\nNSFW: "+t._s(t.manga.attr.nsfw)+"\n      ")])],1):t._e()])},staticRenderFns:[]}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(n(10),n(9));n(11),a.a.$mount("#app")}],[52]);
//# sourceMappingURL=client.c2ded923.js.map