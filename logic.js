const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Secound post !",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't wory second poster, you'll be first one day."},
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];




  let postIdCounter = _posts.length;
  let commentIdCounter = 6;









/**
 * 
 * @returns Array Posts
 */
  const getPosts = function () {
    return _posts;
  };

  


/**
 * 
 * @param {Adding Post to Array _posts} text 
 */
  const addPost = function (text) {
    
    postIdCounter++;

    const newPost = {

            text: text,
            id: "p" + postIdCounter,
            comments: [],
    };

        _posts.push(newPost);
  };





/**
 * 
 * @param {id the post want to remove} postId 
 * Remove Post from Array _posts
 */
  const removePost = function (postId) {

        for (let key in _posts) {

            if (_posts[key].id == postId) {
                    _posts.splice(key, 1);
            }

        }
  };







/**
 * 
 * @param {id the post} postID 
 * @param {the comment want to add} text 
 * Adding comment to array post.comments
 */
  const addComment = function (postID, text) {
    
        commentIdCounter++;

            for (let key of _posts) {

                if (key.id == postID) {

                        key.comments.push({
                        id: "c" + commentIdCounter,
                        text: text,
                        });
                }
            }
  };






  /**
   * 
   * @param {id the post} postID 
   * @param { id comment want to remove} commentID 
   * Remove Comment from array _post.comments
   */

  const removeComment = function (postID, commentID) {

    for (let key of _posts) {

        if (key.id == postID) {
            
            let count = 0;
            for (let val of key.comments) {

                    if (val.id == commentID) {
                        key.comments.splice(count, 1);
                    }

                count++;
            }
        }
    }
  };





  return {

    postIdCounter: postIdCounter,
    commentIdCounter: commentIdCounter,
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,

  };
};
