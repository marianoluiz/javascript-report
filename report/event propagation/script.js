// DOM manipulation

// event propagation 

  // event propagation - how event travels to DOM or DOM tree. you can think of electricity going through wire until it reaches its destination.

    //  the dom full of nodes. the events need to pause in every event until stoped.

    /* 3 phases

      1. event capturing - root(html) to target. parent to element.
      2. target - target to bubbling
      3. event bubbling - target to root (html) again. element to parent.

    */ 

    // DOM Manipulation
    // Event Propagation

    window.addEventListener("click", function() {
    console.log('Window');
    }, false);

    //may syntax kasi ang addEventListener na ang 3rd parameter ay either true or false.
    //pag false, event bubbling mangyayari (default value ket wala kang 3rd param). pag true naman event capturing mangyayari.

    document.addEventListener("click", function() {
    console.log('Document');
    },false);

    document.querySelector(".div2").addEventListener
    ("click", function() {
    console.log('DIV 2');
    }, false);

    document.querySelector(".div1").addEventListener
    ("click", function() {
    console.log('DIV 1');
    },false);

    document.querySelector("button").addEventListener
    ("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
    }, false);



/* explain:*/

  // the last is function(e), sa console.log e.target.innerText ibigsabihin, yung innerText ng button (yun kasi yung e.target mo e yung pinindot mo).

    // if you make console.log(e.target), it shows the <button>Click</button>. 

    // if you make console.log(e.target.innerText = 'clicked'); , it changes its text to 'clicked'.

    // concept here if we assume we have html,  is it travels from window, div2 (parent of div1), div1 (parent of button), to button (click). because of TRUE. [event capturing]

    // if false, it starts from clicked! to window (it is default  even without false) [ event bubbling]

    // TRUE OR FALSE is the third optional parameter that we can include.

    // we indicate true or false to choose whether to use event capturing or event bubbling.

    // we can stop propagation: if we make the div2 function(e) { e.stopPropagration()}

    // make {once: true}) for div 2 to fire only once. pag gusto mo isang beses lang yung event.

    // prevent default method: if we make the button into an anchor. the anchor's defualt behavior is to redirect somewhere else. so event quickly fires off and refreshes.
    // now if u put e.preventDefault(), it stays now and not refresh.