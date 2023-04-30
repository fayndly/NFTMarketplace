"use strict";(self["webpackChunknft_marketplace"]=self["webpackChunknft_marketplace"]||[]).push([[995],{762:function(e,t,n){n.d(t,{Z:function(){return D}});var a=n(3396),i=n(7139);const s=e=>((0,a.dD)("data-v-233387c0"),e=e(),(0,a.Cn)(),e),o={class:"auction-timer"},r=s((()=>(0,a._)("p",{class:"auction-timer__name"},"Auction ends in:",-1))),c={class:"auction-timer__timer"},l={class:"auction-timer__time"},_={class:"auction-timer__time-value"},d=s((()=>(0,a._)("p",{class:"auction-timer__time-name"},"Hours",-1))),u=s((()=>(0,a._)("div",{class:"auction-timer__delimiter"},":",-1))),m={class:"auction-timer__time"},f={class:"auction-timer__time-value"},p=s((()=>(0,a._)("p",{class:"auction-timer__time-name"},"Minutes",-1))),v=s((()=>(0,a._)("div",{class:"auction-timer__delimiter"},":",-1))),h={class:"auction-timer__time"},g={class:"auction-timer__time-value"},w=s((()=>(0,a._)("p",{class:"auction-timer__time-name"},"Seconds",-1)));function b(e,t,n,s,b,y){const T=(0,a.up)("buttonDefault");return(0,a.wg)(),(0,a.iD)("div",o,[r,(0,a._)("div",c,[(0,a._)("div",l,[(0,a._)("div",_,(0,i.zw)(s.hours%24),1),d]),u,(0,a._)("div",m,[(0,a._)("div",f,(0,i.zw)(s.minutes%60),1),p]),v,(0,a._)("div",h,[(0,a._)("div",g,(0,i.zw)(s.seconds%60),1),w])]),n.button?((0,a.wg)(),(0,a.j4)(T,{key:0,class:"auction-timer__button",type:"secondary",modifier:"filled",text:"Place Bid"})):(0,a.kq)("",!0)])}var y=n(4870),T={name:"AuctionTimer",props:{button:{type:Boolean},endTime:{type:String}},setup(e){const t=(0,y.iH)(0),n=(0,y.iH)(0),a=(0,y.iH)(0),i=new Date(e.endTime);return setInterval((()=>{const e=new Date,s=i-e;a.value=parseInt(s/1e3),n.value=parseInt(a.value/60),t.value=parseInt(n.value/60),a.value}),1e3),{hours:t,minutes:n,seconds:a}}},k=n(89);const W=(0,k.Z)(T,[["render",b],["__scopeId","data-v-233387c0"]]);var D=W},6995:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(3396),i=n(7139);const s=e=>((0,a.dD)("data-v-a55ddce6"),e=e(),(0,a.Cn)(),e),o={class:"nft__info"},r=s((()=>(0,a._)("div",{class:"nft__headline"},[(0,a._)("h2",{class:"nft__name"},"Animakid"),(0,a._)("p",{class:"nft__uploaded"},"Minted on Sep 30, 2022")],-1))),c={class:"nft__more-info"},l=s((()=>(0,a._)("div",{class:"nft__more-info-item"},[(0,a._)("p",{class:"nft__info-haedline"},"Created By"),(0,a._)("p",{class:"nft__info-text"}," The internet's friendliest designer kid. ")],-1))),_=s((()=>(0,a._)("div",{class:"nft__more-info-item"},[(0,a._)("p",{class:"nft__info-haedline"},"Description"),(0,a._)("p",{class:"nft__info-text"}," The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target. ")],-1))),d=s((()=>(0,a._)("div",{class:"nft__more-info-item"},[(0,a._)("p",{class:"nft__info-haedline"},"Details"),(0,a._)("p",{class:"nft__info-text"}," The internet's friendliest designer kid. ")],-1))),u={class:"nft__more-info-item"},m=s((()=>(0,a._)("p",{class:"nft__info-haedline"},"Tags",-1))),f={class:"nft__auction-timer"};function p(e,t,n,s,p,v){const h=(0,a.up)("sectionWrapper"),g=(0,a.up)("TagComponent"),w=(0,a.up)("AuctionTimer"),b=(0,a.up)("HeaderSection"),y=(0,a.up)("NFTCard"),T=(0,a.up)("gridWrapper"),k=(0,a.up)("mainWrapper");return(0,a.wg)(),(0,a.j4)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"placeholder-section",style:(0,i.j5)(`background-image: url(${v.getImage})`)},null,8,["style"]),(0,a.Wm)(h,{class:"nft"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[r,(0,a._)("div",c,[l,_,d,(0,a._)("div",u,[m,(0,a.Wm)(g,{name:"Animation"}),(0,a.Wm)(g,{name:"illustration"}),(0,a.Wm)(g,{name:"moon"}),(0,a.Wm)(g,{name:"moon"})])])]),(0,a._)("div",f,[(0,a.Wm)(w,{class:"nft__timer",button:!0})])])),_:1}),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{sectionHeader:{headerName:"More from this artist",button:!0}}),(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(9,(e=>(0,a.Wm)(y,{key:e.key}))),64))])),_:1})])),_:1})])),_:1})}const v={class:"tag"};function h(e,t,n,s,o,r){return(0,a.wg)(),(0,a.iD)("p",v,(0,i.zw)(n.name),1)}var g={name:"TagComponent",props:{name:{type:String}}},w=n(89);const b=(0,w.Z)(g,[["render",h],["__scopeId","data-v-61bedff2"]]);var y=b,T=n(1730),k=n(762),W={name:"NftPage",components:{AuctionTimer:k.Z,HeaderSection:T.Z,TagComponent:y},data(){return{}},methods:{},computed:{getImage(){return"/images/virtual_wolrd.png"}}};const D=(0,w.Z)(W,[["render",p],["__scopeId","data-v-a55ddce6"]]);var C=D}}]);
//# sourceMappingURL=995.c5e5a28a.js.map