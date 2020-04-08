let array = ["string", "word", "text", "character"];

(function capitalise() {
    let newArr = array.map((arr)=>{
        return arr.toUpperCase();
    });
    alert(newArr);
})();