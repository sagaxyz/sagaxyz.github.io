(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{295:function(t,a,e){"use strict";e.r(a);var n=e(13),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-with-truffle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-with-truffle"}},[t._v("#")]),t._v(" Configuring with Truffle")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("saga chainlet get test")]),t._v(" to get the information about the "),a("code",[t._v("test")]),t._v(" chainlet.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("➜ saga chainlet get test                      \n2022-09-22T21:21:27-07:00 INF environment variable AWS_PROFILE is set to default\n\n\nchainlet information\n\nchainlet name: test\ncreation date: 22 Sep 22 21:13 PDT\nstatus: Running\nendpoint: a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com\nports: 26657,9090,1317,8545,8546\n\n\nevm information\n\nnetwork name: test Saga Chainlet\nnew rpc url: http://a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com:8545\nchain id: 1663906420\ncurrency symbol: SAGA\n")])])]),a("p",[t._v("In "),a("code",[t._v("truffle-config.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('networks: {\n  saga-test: {\n    host: "http://a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com",\n    port: 8545,\n    network_id: "1663906420",\n    websockets: true\n  }\n}\n')])])]),a("p",[t._v("For more information, you can visit the "),a("a",{attrs:{href:"https://trufflesuite.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Truffle docs"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);