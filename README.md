# ![JPG](demo/img/logo.png)
Give your content boxes a stacked cards look with each card swapping with other. 

![GIF](preview.gif)

## Demo
[View demo](https://junedchhipa.github.io/stacked-cards/)


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
	 	layout: "coverflow",
	 	transformOrigin: "center",
	});

	stackedCard.init();
````

