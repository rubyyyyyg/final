let commentInput = $('#commentSection').val();
//let outline = $('#bodypart').append(
//    <div id="post">
//    <img src="C:/Users/rubyg/Downloads/intro2web/final project/images/avatar.jpg" alt="avatar image"></img>
//    $('#displayName').val();
//    $('#commentSection').val();
//</div>
//);

//const commentsArray = [];

//const displayComments = function() {
//    let list = '<ul>';
//  commentsArray.each(function () {
//        list += '<li>$(commentInput)</li>';
//    });
//    list += '</ul>'
//    commentInput.innerHTML = list;
//}
//$('#button').on("click", function () {
//   if($(commentInput).length > 0) {
//        commentsArray.push($(commentInput));
//        displayComments();
//    }
//});



$('#button').on("click", function displayPost(){
    if (commentInput.length > 0) {
    let completePost = $(commentInput).wrap('div class="post"/>');
    $('#bodyPart').append(completePost);
    console.log(displayPost());
}});


