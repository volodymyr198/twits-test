<h1>Task - Tweets-Test</h1>

<h2>The goal:</h2> <h3>to create tweet cards and add interactivity when clicking on a button. </h3>

<h2>Terms of reference:</h2>
<h3>1. According to the <a href="https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=5QvIS2OV8wwWGctR-0" target="_blank">layout</a>, you need to implement user cards.</h3> 
<h3>
    2. When you click on the Follow button, the text changes to Following. Also
    The color of the button changes. And yours is added to the number of followers. That is,
    The initial number is 100,500 followers. When you click on the button will be
    100,501.
</h3> 
<h3>
    3. When updating the page, the final result of the user's actions should be recorded. That is,
    If you click on the button and refresh the page, then the button still remains
    in the Following state with the corresponding color, and the number of followers is NOT
    decreases to the original value.
</h3>
<h3>
    4. When you click on the button again, its text and color change to the original one
    State. The number of followers also changes. It decreases by 1
    (100,500).
</h3>
<h3>
    5. In the code, the number 100,500 must be written with one value (100500). In UI -
    displayed separated by comma (100,500).
</h3><br>

<h2>The project was created using Create-React-App.</h2> 
<h2>Made routing using React Router with using lazy load.</h2>
<h2>User data is stored on the backend created using the mockapi.io UI service.</h2>
<h2>User filtering has been added to the completed terms of reference.</h2>
