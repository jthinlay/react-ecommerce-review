const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/KxK5jv4/hat.jpg',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/JkLTJhR/jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/ykR2Pr4/women.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/RgHvnfy/man.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        }
      ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
}
export default directoryReducer