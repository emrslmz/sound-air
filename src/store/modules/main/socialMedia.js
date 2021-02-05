const state = {
    socialMedia: [
        {
            socialName: 'Instagram',
            socialIcon: 'fab fa-instagram',
            socialColor: 'text-instagram',
            socialLink: 'https://www.instagram.com/',
        },
        {
            socialName: 'Twitter',
            socialIcon: 'fab fa-twitter',
            socialColor: 'text-twitter',
            socialLink: 'https://www.twitter.com/',
        },
        {
            socialName: 'Discord',
            socialIcon: 'fab fa-discord',
            socialColor: 'text-discord',
            socialLink: 'https://discord.gg/E3Nv7Wpz9W',
        },
    ]
}

const getters = {
  getSocial(state) {
      return state.socialMedia;
  }
}


export default {
    state,
    getters
}