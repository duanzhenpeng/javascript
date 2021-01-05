var app = new Vue({
    el: "#app",
    methods: {
        onClick: function() {
            console.log(1);
        },
        onEnter: function(){
            console.log("enter");
        },
        onOut: function(){
            console.log("out");
        }
    }
})