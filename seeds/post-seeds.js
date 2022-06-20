const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Etiam varius pellentesque erat id porta. Maecenas fringilla dolor risus. Vivamus tincidunt purus nisi, vitae scelerisque ligula hendrerit ac. Nullam eu varius felis. Etiam nunc leo, faucibus eget dolor vitae, interdum accumsan ligula. In ac elit at mi efficitur cursus quis a ex. Suspendisse potenti. Suspendisse condimentum dapibus nisi ut rhoncus.',
    user_id: 2
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Nullam porttitor tellus vitae ex sagittis facilisis. Ut et ante eleifend, posuere metus ac, tempor magna. Donec sollicitudin risus pellentesque tortor pulvinar sollicitudin.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
