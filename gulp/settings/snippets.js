//=============/ ADAPTIVE VALUES /=============

/*
@mixin adaptivValue($property, $startSize, $minSize, $type) {
	$addSize: $startSize - $minSize;

	@if $type == 1 {
		//Только если меньше контейнера
		#{$property}: $startSize + px;
		@media (max-width: #{$maxWidthContainer + px}) {
			#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidthContainer - 320}));
		}
	} @else if $type == 2 {
		//Только если больше контейнера
		#{$property}: $startSize + px;
		@media (min-width: #{$maxWidthContainer + px}) {
			#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));
		}
	} @else {
		//Всегда
		#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));
	}
}
*/




//=============/=============/ BURGER /=============/=============

/*
{
  "burger": {
    "scope": "html",
    "prefix": "q-burger",
    "body": [
      "<button class=\"_btn-reset _burger\" aria-label=\"Открыть меню\" aria-expanded=\"false\"  data-burger>",
			"  <span class=\"_burger__inner\">",
			"    <span class=\"_burger__line\"></span>",
			"    <span class=\"_burger__line\"></span>",
			"    <span class=\"_burger__line\"></span>",
			"    <span class=\"_burger__line\"></span>",
			"  </span>",
      "</button>"
    ],
  },
}
*/

/*
{
	"burger code in scss": {
		"scope": "scss",
		"prefix": "q-burger-scss",
		"body": [
			"._stop-scroll {",
			"  overflow: hidden;",
			"}",
			"",
			"._burger {",
			"  width: 44px;",
			"  height: 44px;",
			"  border: 1px solid rgba(255, 255, 255, 0.28);",
			"  border-radius: 10px;",
			"  display: none;",
			"",
			"  @include large {",
			"    display: block;",
			"  }",
			"",
			"  &__inner {",
			"  position: relative;",
			"  width: 26px;",
			"  height: 12px;",
			"  }",
			"",
			"  &__line {",
			"    position: absolute;",
			"    left: 0;",
			"    top: 50%;",
			"    transform: translateY(-50%);",
			"    transition: all 0.4s ease;",
			"    width: 100%;",
			"    height: 2px;",
			"    background-color: var(--black-color);",
			"  }",
			"",
			"  &__line {",
			"    position: absolute;",
			"    left: 0;",
			"    top: 50%;",
			"    transform: translateY(-50%);",
			"    transition: all 0.4s ease;",
			"    width: 100%;",
			"    height: 2px;",
			"    background-color: var(--white-color);",
			"  }",
			"",
			"  &__line:nth-child(1) {",
			"    margin-top: -7px;",
			"  }",
			"",
			"  &__line:nth-child(4) {",
			"    margin-top: 7px;",
			"    width: 13px;",
			"  }",
			"}",
			"",
			"._burger--active {",
			"  ._burger__line:nth-child(1),",
			"  ._burger__line:nth-child(4) {",
			"    @include hide;",
			"  }",
			"",
			"  ._burger__line:nth-child(2) {",
			"    transform: rotate(45deg);",
			"  }",
			
			"  ._burger__line:nth-child(3) {",
			"    transform: rotate(-45deg);",
			"  }",
			"}",
		],
	}
}
*/


//=============/=============/ PICTURE /=============/=============
/*
{
  "picture": {
    "prefix": "q-picture",
    "body": [
      "<picture>",
      "  <source srcset=\"@img$1$2.webp\" type=\"image/webp\">",
      "  <img loading=\"lazy\" src=\"@img$1\" width=\"$3\" height=\"$4\" alt=\"$5\">",
      "</picture>"
    ],
  },
*/


//=============/=============/ TABS /=============/=============

/*
{
	"tabs": {
		"scope": "html",
		"prefix": "q-tabs",
		"body": [
			"<div class=\"_tabs\">",
			"  <div class=\"_tabs__nav\">",
			"    <button class=\"_btn-reset _tabs__btn\" data-tab=\"#tab_1\">Tab1</button>",
			"    <button class=\"_btn-reset _tabs__btn\" data-tab=\"#tab_2\">TAb2</button>",
			"    <button class=\"_btn-reset _tabs__btn\" data-tab=\"#tab_3\">Tab3</button>",
			"  <div>",
			"  <div class=\"_tabs__body\">",
			"    <div class=\"_tabs__content\" id=\"tab_1\"></div>",
			"    <div class=\"_tabs__content\" id=\"tab_2\"></div>",
			"    <div class=\"_tabs__content\" id=\"tab_3\"></div>",
			"  </div>",
			"</div>",
		],
	}
}
*/


//=============/=============/ ACCORDION /=============/=============

/*
{
	"Print to accordion": {
		"scope": "html",
		"prefix": "q-accordion",
		"body": [
			"<div class=\"accordion\">",
			"  <button class=\"btn-reset accordion__header\" aria-expanded=\"false\">",
			"    <i class=\"accordion__icon\"></i>",
			"    <span class=\"accordion__title\">What's an accordion?</span>",
			"  </button>",
			"  <div class=\"accordion__content\" aria-hidden=\"true\">",
			"    <div class=\"accordion__description\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugit.</div>",
			"  </div>",
			"</div>"
		],
	}
}
*/


//=============/=============/ ADAPTIVE-VALUE /=============/=============

/*
{
	"adaptiv-value": {
		"scope": "css, scss",
		"prefix": "q-adaptiv-value",
		"body": [
			"@include adaptivValue('$1', $2, $3, 1);",
		],
	}
}
*/


//=============/=============/ SPOILER /=============/=============

/*
{
	"spoiler": {
		"scope": "html",
		"prefix": "q-spoiler",
		"body": [
			"<div class=\"_spoiler\">",
			"  <button class=\"_btn-reset _spoiler__btn\">Пункт</button>",
			"    <ul class=\"_list-reset _spoiler__droplist\">",
			"      <li>Подпункт</li>",
			"    </ul>",
			"</div>"
		],
	}
}
*/


//=============/=============/ BREAKPOINTS /=============/=============

/*
{
	"breakpoint extra-huge": {
		"scope": "scss",
		"prefix": "q-extra-huge",
		"body": [
			"@include extra-huge {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint huge": {
		"scope": "scss",
		"prefix": "q-huge",
		"body": [
			"@include huge {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint extra-large": {
		"scope": "scss",
		"prefix": "q-extra-large",
		"body": [
			"@include extra-large {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint large": {
		"scope": "scss",
		"prefix": "q-large",
		"body": [
			"@include large {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint medium": {
		"scope": "scss",
		"prefix": "q-medium",
		"body": [
			"@include medium {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint small": {
		"scope": "scss",
		"prefix": "q-small",
		"body": [
			"@include small {",
			"  $1",
			"}"
		],
	}
}

{
	"breakpoint extra-small": {
		"scope": "scss",
		"prefix": "q-extra-small",
		"body": [
			"@include extra-small {",
			"  $1",
			"}"
		],
	}
}
*/