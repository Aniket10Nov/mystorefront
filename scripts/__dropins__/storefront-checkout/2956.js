export const id=2956;export const ids=[2956];export const modules={9188:(e,t,n)=>{n.d(t,{s:()=>E,C:()=>P});var r=n(2796),a=n(9952),o=n.n(a),i=n(4944);const l=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"updating":{"label":"{product} is updating"}}}}');var s=n(2460),p={default:l,en_US:l},c=n(5536),d=n.n(c),f=n(7008),u=n.n(f),b=n(1496),y=n.n(b),m=n(9356),g=n.n(m),x=n(9904),h=n.n(x),v=n(8864),w={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"},styleTagTransform:function(e,t){window._loadedStyles=window._loadedStyles??{};const n=e?.match(/^\.dropin-(\w+)/)?.[1],r=t.getAttribute("data-sdk"),a=n?`sdk/${n}`:t.getAttribute("data-dropin");t.setAttribute("data-dropin",a),t.removeAttribute("data-sdk");const o=window._loadedStyles[a];if(o){const a=function(e,t){const[n,r]=e.split("-"),[a,o]=t.split("-"),i=[...n.split("."),r],l=[...a.split("."),o],s=parseInt(i[0],10),p=parseInt(l[0],10);if(s!==p)return s>p?e:t;const c=parseInt(i[1],10),d=parseInt(l[1],10);if(c!==d)return c>d?e:t;const f=parseInt(i[2],10),u=parseInt(l[2],10);if(f!==u)return f>u?e:t;if(i[3]&&l[3]){const n=/(alpha|beta)(.*)/,r=i[3].match(n),a=l[3].match(n),o=r[1],s=a[1],p=parseInt(r[2],10),c=parseInt(a[2],10);if(o===s)return p>c?e:t;if("alpha"===o&&"beta"===s)return t;if("beta"===o&&"alpha"===s)return e}return i[3]?t:e}(r,o.sdk);if(!n||n&&a===o.sdk){const t=o.style.textContent;o.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else n&&a!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void t.remove()}t.textContent=e,window._loadedStyles[a]={sdk:r,core:n,style:t};const i=document.querySelector("head"),{lastDropinStyleInjected:l,lastSDKStyleInjected:s}=window._loadedStyles;n?(s?i.insertBefore(t,s.nextSibling):i.insertBefore(t,i.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(l?i.insertBefore(t,l.nextSibling):s?i.insertBefore(t,s.nextSibling):i.insertBefore(t,i.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}};w.setAttributes=g(),w.insert=y().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=h();d()(v.c,w);v.c&&v.c.locals&&v.c.locals;var S=n(5864),O={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"},styleTagTransform:function(e,t){window._loadedStyles=window._loadedStyles??{};const n=e?.match(/^\.dropin-(\w+)/)?.[1],r=t.getAttribute("data-sdk"),a=n?`sdk/${n}`:t.getAttribute("data-dropin");t.setAttribute("data-dropin",a),t.removeAttribute("data-sdk");const o=window._loadedStyles[a];if(o){const a=function(e,t){const[n,r]=e.split("-"),[a,o]=t.split("-"),i=[...n.split("."),r],l=[...a.split("."),o],s=parseInt(i[0],10),p=parseInt(l[0],10);if(s!==p)return s>p?e:t;const c=parseInt(i[1],10),d=parseInt(l[1],10);if(c!==d)return c>d?e:t;const f=parseInt(i[2],10),u=parseInt(l[2],10);if(f!==u)return f>u?e:t;if(i[3]&&l[3]){const n=/(alpha|beta)(.*)/,r=i[3].match(n),a=l[3].match(n),o=r[1],s=a[1],p=parseInt(r[2],10),c=parseInt(a[2],10);if(o===s)return p>c?e:t;if("alpha"===o&&"beta"===s)return t;if("beta"===o&&"alpha"===s)return e}return i[3]?t:e}(r,o.sdk);if(!n||n&&a===o.sdk){const t=o.style.textContent;o.style.textContent=`${t}\n/* --- MERGED --- */\n${e}`}else n&&a!==o.sdk&&(o.style.textContent=`/* --- UPGRADED --- */\n${e}`);return void t.remove()}t.textContent=e,window._loadedStyles[a]={sdk:r,core:n,style:t};const i=document.querySelector("head"),{lastDropinStyleInjected:l,lastSDKStyleInjected:s}=window._loadedStyles;n?(s?i.insertBefore(t,s.nextSibling):i.insertBefore(t,i.firstChild),window._loadedStyles.lastSDKStyleInjected=t):(l?i.insertBefore(t,l.nextSibling):s?i.insertBefore(t,s.nextSibling):i.insertBefore(t,i.firstChild),window._loadedStyles.lastDropinStyleInjected=t)}};O.setAttributes=g(),O.insert=y().bind(null,"head"),O.domAPI=u(),O.insertStyleElement=h();d()(S.c,O);S.c&&S.c.locals&&S.c.locals;var j=n(8412),I=["lang","langDefinitions","className","children"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=(0,r.GY)({locale:"en-US"}),P=e=>{var{lang:t="en_US",langDefinitions:n={},className:a,children:l}=e,c=C(e,I),d=(0,r.bB)((()=>{var e,r=o()(n.default,null!==(e=n[t])&&void 0!==e?e:{});return o()((e=>o()(p.default,p[e]||{}))(t),r)}),[t,n]),f=t.replace("_","-");return(0,j.im)(E.Provider,{value:{locale:f},children:(0,j.im)(s.us,{definition:d,children:(0,j.im)("div",A(A({},c),{},{className:(0,i.i)(["dropin-design",a]),children:l}))})})}},7536:(e,t,n)=>{n.d(t,{A:()=>a,c:()=>o});var r=new class{get map(){return this._map}set map(e){this._map=e}getMethods(){return{setMap:e=>{this.map=e},getMap:()=>this.map}}},{setMap:a,getMap:o}=r.getMethods()},8864:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(6008),a=n.n(r),o=n(2076),i=n.n(o)()(a());i.push([e.id,".dropin-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#ad5c00;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#bf4545;\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --color-action-button-active:#ffffff;\n  --color-action-button-hover:#e8e8e8;\n  --color-button-active:#2b2b2b;\n  --color-button-focus:#d6d6d6;\n  --color-button-hover:#383838;\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 700 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const l=i},5864:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(6008),a=n.n(r),o=n(2076),i=n.n(o)()(a());i.push([e.id,".dropin-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.dropin-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.dropin-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const l=i},9952:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function a(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,t,n){var a={};return n.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"==typeof n?n:s}(o,n)(e[o],t[o],n):a[o]=r(t[o],n))})),a}function s(e,n,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=r;var i=Array.isArray(n);return i===Array.isArray(e)?i?o.arrayMerge(e,n,o):l(e,n,o):r(n,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})};var p=s;e.exports=p}};