const tweeter = Tweeter()
const renderer = Renderer()





$("#post").on('click', function() {
    let inputValue = $("input").val()
    tweeter.addPost(inputValue)
    renderer.render(tweeter.getPosts())
    
})




$("#posts").on('click', ".delete" , function() {

    let deletePost = ($(this).closest(".post").data().id)
      tweeter.removePost(deletePost)
      renderer.render(tweeter.getPosts())
  })





$("#posts").on('click' , ".commentButton" , function(){

    let postId = ($(this).closest(".post").data().id)
    let comment = ($(this).closest(".post").find("input").val())
    tweeter.addComment(postId , comment)
    renderer.render(tweeter.getPosts())
})





$("#posts").on('click' , ".delete-comment" , function() { 

    let postId = ($(this).closest(".post").data().id)
    let deleteComment = ($(this).closest("div").data().id)
    tweeter.removeComment(postId , deleteComment)
    renderer.render(tweeter.getPosts())
})



renderer.render(tweeter.getPosts())