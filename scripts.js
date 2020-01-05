function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}
function clean() {
  document.form.textview.value = "";
}
function back() {
  var all = document.form.textview.value;
  document.form.textview.value = all.substring(0, all.length - 1);
}
function equal(){
    var all = document.form.textview.value;
    if(all) {
        document.form.textview.value=eval(all);
    }
}