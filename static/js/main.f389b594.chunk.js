(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],[,,,,function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var c=a(6);function r(e){for(var t=!1,a=!1,r=0;!t&&!a;){var n=Math.floor(4*Math.random()),s=Math.floor(4*Math.random());if(r++,0===e[n][s]&&(e[n][s]=2,t=!0),r>50&&(a=!0,Object(c.a)(e)))return!1}return e}},,function(e,t,a){"use strict";var c=a(17).default,r=a(18).default,n=a(19).default,s=a(20).default;t.a=function(e){var t=c(e);if(JSON.stringify(e)!==JSON.stringify(t))return!1;var a=r(e);if(JSON.stringify(e)!==JSON.stringify(a))return!1;var i=n(e);if(JSON.stringify(e)!==JSON.stringify(i))return!1;var l=s(e);return JSON.stringify(e)===JSON.stringify(l)}},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(4),r=a(6);t.default=function(e){for(var t=e,a=e.map((function(e){return e.slice()})),n=0;n<4;n++){for(var s=a[n],i=0,l=1;i<4;)switch(!0){case 4===l:l=i+1,i++;case 0===s[i]&&0===s[l]:l++;break;case 0===s[i]&&0!==s[l]:s[i]=s[l],s[l]=0,l++;break;case 0!==s[i]&&0===s[l]:l++;break;case 0!==s[i]&&0!==s[l]:s[i]===s[l]?(s[i]=s[i]+s[l],s[l]=0,l=i+1,i++):(i++,l=i+1)}return(JSON.stringify(t)===JSON.stringify(a)||(Object(c.default)(a),!Object(r.a)(a)))&&a}}},function(e,t,a){"use strict";a.r(t);var c=a(4),r=a(6);t.default=function(e){for(var t=e.map((function(e){return e.slice()})),a=JSON.parse(JSON.stringify(e)),n=3;n>=0;n--)for(var s=t.length-1,i=s-1;s>0;)-1!==i?0===t[s][n]&&0===t[i][n]?i--:0===t[s][n]&&0!==t[i][n]?(t[s][n]=t[i][n],t[i][n]=0,i--):0!==t[s][n]&&0===t[i][n]?i--:0!==t[s][n]&&0!==t[i][n]&&(t[s][n]===t[i][n]?(t[s][n]=t[s][n]+t[i][n],t[i][n]=0,i=s-1,s--):i=--s-1):(i=s-1,s--);return(JSON.stringify(t)===JSON.stringify(a)||(Object(c.default)(t),!Object(r.a)(t)))&&t}},function(e,t,a){"use strict";a.r(t);var c=a(4),r=a(6);t.default=function(e){for(var t=e,a=e.map((function(e){return e.slice()})),n=3;n>=0;n--)for(var s=a[n],i=s.length-1,l=i-1;i>0;)-1!==l?0===s[i]&&0===s[l]?l--:0===s[i]&&0!==s[l]?(s[i]=s[l],s[l]=0,l--):0!==s[i]&&0===s[l]?l--:0!==s[i]&&0!==s[l]&&(s[i]===s[l]?(s[i]=s[i]+s[l],s[l]=0,l=i-1,i--):l=--i-1):(l=i-1,i--);return(JSON.stringify(a)===JSON.stringify(t)||(Object(c.default)(a),!Object(r.a)(a)))&&a}},function(e,t,a){"use strict";a.r(t);var c=a(6),r=a(4).default;t.default=function(e){for(var t=e.map((function(e){return e.slice()})),a=JSON.parse(JSON.stringify(e)),n=0;n<4;n++)for(var s=0,i=1;s<4;)4!==i?0===t[s][n]&&0===t[i][n]?i++:0===t[s][n]&&0!==t[i][n]?(t[s][n]=t[i][n],t[i][n]=0,i++):0!==t[s][n]&&0===t[i][n]?i++:0!==t[s][n]&&0!==t[i][n]&&(t[s][n]===t[i][n]?(t[s][n]=t[s][n]+t[i][n],t[i][n]=0,i=s+1,s++):i=++s+1):(i=s+1,s++);return(JSON.stringify(a)===JSON.stringify(t)||(r(t),!Object(c.a)(t)))&&t}},,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(11),s=a.n(n),i=a(14),l=a(24),o=a(3),d=JSON.parse(localStorage.getItem("leaderBoard"))||{scores:[]};var u=JSON.parse(localStorage.getItem("state"))?JSON.parse(localStorage.getItem("state")).gameInfo:{data:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],replayAllData:[],nowReplayingData:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],replay:!1,undo:[],redo:[],score:0,winner:!1,gameOver:!1};var j=Object(i.a)({gameInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_NUMBER":return Object(o.a)(Object(o.a)({},e),{},{data:t.payload,replayAllData:e.replayAllData.concat([t.payload])});case"UPDATE_BOARD_DATA":return Object(o.a)(Object(o.a)({},e),{},{data:t.payload,replayAllData:e.replayAllData.concat([t.payload]),undo:e.replayAllData[e.replayAllData.length-1]});case"REPLAY_START":return Object(o.a)(Object(o.a)({},e),{},{replay:!0,nowReplayingData:t.payload});case"REPLAY_STOP":return Object(o.a)(Object(o.a)({},e),{},{replay:!1,nowReplayingData:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]});case"UNDO":return Object(o.a)(Object(o.a)({},e),{},{redo:e.data,data:e.undo,undo:[]});case"REDO":return Object(o.a)(Object(o.a)({},e),{},{undo:e.data,data:e.redo,redo:[]});case"TAKE_GAME_ONE_STEP_BACK":return Object(o.a)(Object(o.a)({},e),{},{replayAllData:e.replayAllData.slice(0,-1),redo:[]});case"RESET_GAME":return localStorage.removeItem("state"),{data:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],replayAllData:[],nowReplayingData:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],replay:!1,undo:[],redo:[],score:0,winner:!1,gameOver:!1};case"INCREASE_SCORE":var a=JSON.parse(localStorage.getItem("highestScore")),c=e.score+t.payload;return c>a&&localStorage.setItem("highestScore",JSON.stringify(c)),Object(o.a)(Object(o.a)({},e),{},{score:c});case"GAME_OVER":return Object(o.a)(Object(o.a)({},e),{},{gameOver:!e.gameOver});case"WINNER":return Object(o.a)(Object(o.a)({},e),{},{winner:!e.winner});case"CONTINUE_GAME":return Object(o.a)(Object(o.a)({},e),{},{winner:!1});default:return e}},leaderBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER_NAME":var a=t.payload,c=e.scores.find((function(e){return e.name===a}));if(c)return localStorage.setItem("currentUser",JSON.stringify({name:c.name})),e;var r=e.scores;return r.push({name:a,score:0}),localStorage.setItem("currentUser",JSON.stringify({name:a})),localStorage.setItem("leaderBoard",JSON.stringify({scores:r})),Object(o.a)(Object(o.a)({},e),{},{scores:Object(l.a)(r)});case"UPDATE_SCOREBOARD":var n=(JSON.parse(localStorage.getItem("leaderBoard"))||{scores:[]}).scores,s=JSON.parse(localStorage.getItem("currentUser")),i=n.find((function(e){return e.name===s.name}))||{},u=t.payload,j=u.oldScore,O=u.currentScore,b=j+O;return b>i.score?(i.score=b,localStorage.setItem("leaderBoard",JSON.stringify({scores:n})),Object(o.a)(Object(o.a)({},e),{},{scores:n})):e;default:return e}}}),O=Object(i.b)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=a(5),f=(a(33),a(7)),p=a.n(f),m=a(13),h=a(10),v=a(4),N=(a(35),a(1)),g=Object(b.b)()((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("section",{className:"winner_container",children:[Object(N.jsx)("h4",{className:"winner_title",children:"You Won!!"}),Object(N.jsx)("div",{className:"btn_continue_game",onClick:function(){e.dispatch({type:"CONTINUE_GAME"})},children:"Continue"}),Object(N.jsx)("div",{className:"btn_restart_game",onClick:function(){e.dispatch({type:"RESET_GAME"});var t=Object(v.default)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);t=Object(v.default)(t),e.dispatch({type:"ADD_NEW_NUMBER",payload:t}),e.setShouldCheckWinner(!0)},children:"Restart"})]})})})),y=(a(37),Object(b.b)()((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("section",{className:"game_over_container",children:[Object(N.jsx)("h3",{className:"game_over_title",children:"Game Over!!!"}),Object(N.jsx)("div",{className:"btn_game_over_reset",onClick:function(){e.dispatch({type:"RESET_GAME"});var t=Object(v.default)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);t=Object(v.default)(t),e.dispatch({type:"ADD_NEW_NUMBER",payload:t})},children:"Retry"})]})})}))),x=a(47),_=(a(38),function(e){var t=e.data,a=e.props;return Object(N.jsx)(N.Fragment,{children:t&&!a.replay?Object(N.jsx)("div",{className:"number_conatiner",children:t.map((function(e){return Object(N.jsx)("div",{className:"number_row",children:e.map((function(e){return Object(N.jsx)("div",{className:"single_block b".concat(e),children:0!==e?e:""},Object(x.a)())}))},Object(x.a)())}))}):a.replay?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"number_conatiner",children:(a.nowReplayingData||t).map((function(e){return Object(N.jsx)("div",{className:"number_row",children:e.map((function(e){return Object(N.jsx)("div",{className:"single_block b".concat(e),children:0!==e?e:""},Object(x.a)())}))},Object(x.a)())}))})}):Object(N.jsx)("div",{className:"number_conatiner",children:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]].map((function(e){return Object(N.jsx)("div",{className:"number_row",children:e.map((function(e){return Object(N.jsx)("div",{className:"single_block ".concat(e),children:0!==e?e:""})}))})}))})})}),S=a(18),E=a(20),A=a(17),D=a(19),R=a(6),w=function(e,t){var a=t.map((function(e){return e.slice()})).flat().filter((function(e){return 2!==e})),c=e.map((function(e){return e.slice()})).flat().filter((function(e){return 2!==e}));return a.forEach((function(e){c.includes(e)&&0!==e&&c.splice(c.indexOf(e),1,0)})),c.reduce((function(e,t){return e+=t}),0)},I=function(e){return e.map((function(e){return e.slice()})).flat().includes(2048)};a(39);var J=Object(b.b)((function(e){return localStorage.setItem("state",JSON.stringify(e)),{data:e.gameInfo.data,replay:e.gameInfo.replay,replayAllData:e.gameInfo.replayAllData,nowReplayingData:e.gameInfo.nowReplayingData,redo:e.gameInfo.redo,winner:e.gameInfo.winner,gameOver:e.gameInfo.gameOver,score:e.gameInfo.score}}))((function(e){var t=Object(c.useState)(e.data),a=Object(h.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)(e.gameOver),i=Object(h.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(e.winner),u=Object(h.a)(d,2),j=u[0],O=u[1],b=Object(c.useState)(!0),f=Object(h.a)(b,2),x=f[0],J=f[1],k=function(t){if(t){var a=w(t,r);e.dispatch({type:"INCREASE_SCORE",payload:a}),e.dispatch({type:"UPDATE_SCOREBOARD",payload:{oldScore:e.score,currentScore:a}}),n(t),e.dispatch({type:"UPDATE_BOARD_DATA",payload:t}),I(t)&&x&&(O(!0),e.dispatch({type:"WINNER"}),J(!1))}else o(!0),e.dispatch({type:"GAME_OVER"})},T=function(){var t=Object(m.a)(p.a.mark((function t(a){var c,n,s,i,l,d,u=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=!(u.length>1&&void 0!==u[1])||u[1],JSON.parse(localStorage.getItem("currentUser"))){t.next=7;break}return t.next=5,prompt("Please enter your name");case 5:n=t.sent,e.dispatch({type:"ADD_USER_NAME",payload:n});case 7:if(c&&a.preventDefault(),!e.replay){t.next=10;break}return t.abrupt("return");case 10:Object(R.a)(r)&&(o(!0),e.dispatch({type:"GAME_OVER"})),e.redo.length&&e.dispatch({type:"TAKE_GAME_ONE_STEP_BACK"}),t.t0=a.keyCode,t.next=38===t.t0?15:40===t.t0?18:37===t.t0?21:39===t.t0?24:27;break;case 15:return s=Object(E.default)(r),k(s),t.abrupt("break",28);case 18:return i=Object(S.default)(r),k(i),t.abrupt("break",28);case 21:return l=Object(A.default)(r),k(l),t.abrupt("break",28);case 24:return d=Object(D.default)(r),k(d),t.abrupt("break",28);case 27:return t.abrupt("break",28);case 28:Object(R.a)(r)&&(o(!0),e.dispatch({type:"GAME_OVER"}));case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){!function(){if(r){var t=Object(v.default)(r.map((function(e){return e.slice()})));t&&(t=Object(v.default)(t.map((function(e){return e.slice()})))),t?(n(t),e.dispatch({type:"ADD_NEW_NUMBER",payload:t})):t||o(!0)}}()}),[]),Object(c.useEffect)((function(){n(e.data)}),[e.data]),Object(c.useEffect)((function(){if(e.replay){var t=e.replayAllData.length;e.replayAllData.map((function(a,c){setTimeout((function(){e.dispatch({type:"REPLAY_START",payload:a}),t===c+1&&e.dispatch({type:"REPLAY_STOP"})}),2e3*c,a)}))}else for(var a=0;a<1e3;a++)window.clearTimeout(a)}),[e.replay]),Object(c.useEffect)((function(){j!==e.winner&&O(e.winner),l!==e.gameOver&&o(e.gameOver)}),[e]),Object(c.useEffect)((function(){return window.addEventListener("keydown",T),function(){window.removeEventListener("keydown",T)}})),Object(N.jsxs)("div",{className:"game_board_container",children:[j?Object(N.jsx)(g,{setShouldCheckWinner:J}):"",l?Object(N.jsx)(y,{}):"",Object(N.jsx)(_,{data:r,props:e})]})}));a(40);var k=Object(b.b)((function(e){return{score:e.gameInfo.score}}))((function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"game_header",children:[Object(N.jsx)("div",{className:"game_name",children:"2048"}),Object(N.jsxs)("div",{className:"score_section",children:[Object(N.jsxs)("div",{className:"current_score",children:[Object(N.jsx)("div",{children:"Score"}),Object(N.jsx)("div",{className:"score_num",children:e.score})]}),Object(N.jsxs)("div",{className:"best_score",children:[Object(N.jsx)("div",{children:" Best"}),Object(N.jsx)("div",{className:"score_num",children:JSON.parse(localStorage.getItem("highestScore"))>0?JSON.parse(localStorage.getItem("highestScore")):0})]})]})]})})})),T=a(9),C=a(23),M=a(22);a(41);var U=Object(b.b)((function(e){return localStorage.setItem("state",JSON.stringify(e)),{replay:e.gameInfo.replay,undo:e.gameInfo.undo,redo:e.gameInfo.redo,replayDataLength:e.gameInfo.replayAllData.length}}))((function(e){var t=function(){e.replay?e.dispatch({type:"REPLAY_STOP"}):e.dispatch({type:"REPLAY_START"})};return Object(N.jsxs)("section",{className:"replay_container",children:[e.undo&&e.undo.length?Object(N.jsxs)("div",{onClick:function(){e.dispatch({type:"UNDO"})},className:"undo_button",children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(T.b,{color:"white"})}),Object(N.jsx)("div",{className:"text",children:"Undo"})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(T.b,{})}),Object(N.jsx)("div",{className:"text",children:"Undo"})]}),e.replayDataLength<=1||e.replay?Object(N.jsx)("div",{children:e.replay?Object(N.jsxs)("div",{className:"replay_button",children:[Object(N.jsx)("div",{className:"icon",onClick:t,children:Object(N.jsx)(C.a,{})}),Object(N.jsx)("div",{className:"text",children:"Stop"})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(M.a,{})}),Object(N.jsx)("div",{className:"text",children:"Play"})]})}):Object(N.jsxs)("div",{onClick:t,className:"replay_button",children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(M.a,{})}),Object(N.jsx)("div",{className:"text",children:"Play"})]}),e.redo&&e.redo.length?Object(N.jsxs)("div",{onClick:function(){e.dispatch({type:"REDO"})},className:"redo_button",children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(T.a,{})}),Object(N.jsx)("div",{className:"text",children:"Redo"})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"icon",children:Object(N.jsx)(T.a,{})}),Object(N.jsx)("div",{className:"text",children:"Redo"})]})]})}));function P(e){return{type:"ADD_NEW_NUMBER",payload:e}}a(42);var B=Object(b.b)((function(e){return{scores:e.leaderBoard.scores||[]}}))((function(e){var t=e.scores.sort((function(e,t){return e.score>t.score?-1:1})),a=JSON.parse(localStorage.getItem("currentUser")),c=function(){var t=Object(m.a)(p.a.mark((function t(a){var c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,prompt("Please enter your name");case 3:c=t.sent,e.dispatch({type:"ADD_USER_NAME",payload:c}),e.dispatch({type:"RESET_GAME"}),r=Object(v.default)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),r=Object(v.default)(r),e.dispatch(P(r));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"leader_board_container",children:[Object(N.jsx)("h2",{children:"Leader Board"}),Object(N.jsxs)("div",{className:"leader_board_content",children:[Object(N.jsxs)("div",{className:"player_container",children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{children:"Player"})," ",Object(N.jsx)("span",{children:a?a.name:"---"})]}),Object(N.jsx)("button",{type:"button",onClick:c,children:"Change User"})]}),Object(N.jsxs)("div",{className:"table",children:[Object(N.jsxs)("div",{className:"row header",children:[Object(N.jsx)("div",{className:"cell",children:"Rank"}),Object(N.jsx)("div",{className:"cell",children:"Name"}),Object(N.jsx)("div",{className:"cell",children:"Score"})]}),t.length>0?t.map((function(e,t){var a=e.name,c=e.score;return Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"cell","data-title":"Rank",children:t+1}),Object(N.jsx)("div",{className:"cell","data-title":"Name",children:a}),Object(N.jsx)("div",{className:"cell","data-title":"Score",children:c})]},t)})):Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"cell","data-title":"Rank",children:"---"}),Object(N.jsx)("div",{className:"cell","data-title":"Name",children:"No Data"}),Object(N.jsx)("div",{className:"cell","data-title":"Score",children:"---"})]})]})]})]})}));a(43);var L=Object(b.b)((function(e){return{replay:e.gameInfo.replay}}))((function(e){return Object(N.jsx)("section",{className:"home_parent_conatiner",children:Object(N.jsxs)("div",{className:"home_contanier",children:[Object(N.jsxs)("div",{className:"game_container",children:[Object(N.jsx)(k,{}),Object(N.jsxs)("div",{className:"game_dispciption",children:[" ","Join the numbers and get to ",Object(N.jsx)("b",{children:"2048 title!"})," ",Object(N.jsx)("button",{onClick:function(){if(!e.replay){e.dispatch({type:"RESET_GAME"});var t=Object(v.default)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);t=Object(v.default)(t),e.dispatch(P(t))}},children:"Reset"})]}),Object(N.jsx)(J,{})]}),Object(N.jsx)(U,{}),Object(N.jsx)(B,{})]})})}));var G=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(L,{})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};a(44);s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(b.a,{store:O,children:Object(N.jsx)(G,{})})}),document.getElementById("root")),F()}],[[45,1,2]]]);
//# sourceMappingURL=main.f389b594.chunk.js.map