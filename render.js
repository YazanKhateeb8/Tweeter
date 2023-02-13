const Renderer = function () {

  const render = function (postArray) {
    
    $("#posts").empty();

    
    for (let post of postArray) {

          let postBox = $(
              `<div class='post' data-id=${post.id}> 
                    <div class='post-text'>  ${post.text} </div>
                    <div class='comments'></div>
                    <button class="delete">Delete</button>
                    <input placeholder='add Comment'>
                    <button class="commentButton">Comment</button>
                      
              </div`
          );

          $("#posts").append(postBox);



          for (let coment of post.comments) {
            
              let saveComent = $(`<div data-id=${coment.id}><span class='delete-comment'>X</span> ${coment.text} </div> `);
              $(`[data-id=${post.id}] .comments`).append(saveComent);
          }
    }
  };

  

  return {
    render: render,
  };


};
