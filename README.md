# ![JPG](demo/img/logo_sm.png)
Give your content boxes a stacked cards look. A different approach to carousels/sliders.

![GIF](preview.gif)

## Demo
[View demo](https://junedchhipa.github.io/stacked-cards/)


##### ver 1.1 updates:

 - Swipe support added for mobile.
 - Removed "swapping of the cards on click" and replaced with "moving elements" to preserve the order of rendering.
 - Removed coverflow effect (transforms causing lot of trouble with z-index)

## StackedCards Usage

#### 1. Import css &amp; js
Add stackedCards.css &amp; stackedCards.js into your &lt;head&gt; section. You may add stackedCards.js before your closing &lt;/body&gt; tag 

#### 2. Setup HTML Markup

```html
	<div class="mycards">
		<ul>
			<li>your content</li>
			<li>your content</li>
			<li>your content</li>
			<li>your content</li>
			<li>your content</li>
		</ul>
	</div>
```

#### 3. Initialize StackedCards

```javascript
	var stackedCard = new stackedCards({
	 	selector: '.mycards',
	 	layout: "slide",
	 	transformOrigin: "center",
	});

	stackedCard.init();
````

