(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{296:function(a,t,n){"use strict";n.r(t);var e=n(13),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"configuring-with-hardhat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-with-hardhat"}},[a._v("#")]),a._v(" Configuring with Hardhat")]),a._v(" "),t("p",[a._v("Run "),t("code",[a._v("saga chainlet get test")]),a._v(" to get the information about the "),t("code",[a._v("test")]),a._v(" chainlet.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("➜ saga chainlet get test                      \n2022-09-22T21:21:27-07:00 INF environment variable AWS_PROFILE is set to default\n\n\nchainlet information\n\nchainlet name: test\ncreation date: 22 Sep 22 21:13 PDT\nstatus: Running\nendpoint: a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com\nports: 26657,9090,1317,8545\n\n\nevm information\n\nnetwork name: test Saga Chainlet\nnew rpc url: http://a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com:8545\nchain id: 1663906420\ncurrency symbol: SAGA\n")])])]),t("p",[a._v("Update your configuration file with the endpoint of the chainlet:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\n{\n    localhost: {\n      url: "http://127.0.0.1:8545"\n    },\n    saga-test: {\n      url: "http://a81133aab3b9d4ca6981dfec73a032c7-1409eddb4a91d5ba.elb.us-west-1.amazonaws.com:8545"\n    }\n}\n')])])]),t("p",[a._v("For more information, you can visit the "),t("a",{attrs:{href:"https://hardhat.org/docs",target:"_blank",rel:"noopener noreferrer"}},[a._v("official Hardhat docs"),t("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);